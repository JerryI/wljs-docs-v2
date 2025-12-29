
'use client'

import React, { useState, useEffect, useRef } from 'react';

export function LazyAutoplayVideo ({url}) {

    const [hasBeenInView, setHasBeenInView] = useState(false); // State to track if video has ever been in view 
    const videoRef = useRef(null); // Ref to access the video element 
    const debounceTimerRef = useRef(null); // Ref to store debounce timer

    useEffect(() => {

        // Create an Intersection Observer to track when the video is in view 
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Clear any existing timeout
                if (debounceTimerRef.current) {
                    clearTimeout(debounceTimerRef.current);
                }
                
                // Debounce the state change to prevent flickering
                debounceTimerRef.current = setTimeout(() => {
                    // Once video has been in view, keep it loaded to prevent layout shifts
                    if (entry.isIntersecting) {
                        setHasBeenInView(true);
                    }
                }, 100); // 100ms debounce delay
            },
            { threshold: 0.5 } // Trigger when at least 50% of the video is in view 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current); // Observe the video element 
        }

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current); // Clear timeout on cleanup
            }
        };
    }, []);

    return (

        <div ref={videoRef} className="my-4 bg-fd-card rounded-xl relative border shadow-sm not-prose overflow-hidden text-sm github-light github-dark" style={{ minHeight: '150px' }}> {/* Wrapper with minimum height */}
            {hasBeenInView && (
                <video
                    src={url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
        </div>
    );
};
