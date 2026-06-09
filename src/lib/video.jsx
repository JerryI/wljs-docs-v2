
'use client'

import React, { useState, useEffect, useRef } from 'react';

export function LazyVideo ({url, className, style}) {
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="my-4 bg-fd-card rounded-xl relative border shadow-sm not-prose overflow-hidden text-sm github-light github-dark" style={{ minHeight: '150px', ...(style ?? {}) }}>
            {hasBeenInView && (
                <video
                    src={url}
                    className={className ? className : 'invertColor' }
                    controls
                    playsInline
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
        </div>
    );
};

export function LazyAutoplayVideo ({url, className}) {

    const [hasBeenInView, setHasBeenInView] = useState(false); // State to track if video has ever been in view 
    const containerRef = useRef(null); // Ref to access the container element 
    const videoElementRef = useRef(null); // Ref to access the video element
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
                    if (entry.isIntersecting) {
                        // Load video if not already loaded
                        setHasBeenInView(prev => prev || true);
                        // Play video when in view (only if paused)
                        const video = videoElementRef.current;
                        if (video && video.paused) {
                            video.play();
                        }
                    } else {
                        // Pause video when out of view
                        videoElementRef.current?.pause();
                    }
                }, 100); // 100ms debounce delay
            },
            { threshold: 0.5 } // Trigger when at least 50% of the video is in view 
        );

        if (containerRef.current) {
            observer.observe(containerRef.current); // Observe the container element 
            
            // Check if element is already in view (important for accordion reopening)
            const rect = containerRef.current.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInViewport) {
                setHasBeenInView(true);
            }
        }

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current); // Clear timeout on cleanup
            }
        };
    }, []);

    return (

        <div ref={containerRef} className="my-4 bg-fd-card rounded-xl relative border shadow-sm not-prose overflow-hidden text-sm github-light github-dark" style={{ minHeight: '150px' }}> {/* Wrapper with minimum height */}
            {hasBeenInView && (
                <video
                    ref={videoElementRef}
                    src={url}
                    className={className ? className:'invertColor'}
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
