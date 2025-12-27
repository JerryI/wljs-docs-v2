'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Code2, Lightbulb, Zap, Download, Package, Terminal } from 'lucide-react';
import { AnimationController, type AnimationConfig } from './AnimationController';

// Animation sequences - easy to add more!
const ANIMATIONS: Record<string, AnimationConfig> = {
  plot: {
    delay: 50,
    frames: [
      `Plot[`,
      `(*FB[*)((1)(*,*)/(*,*)(x))(*]FB*)`,
      ...(`, {x,0,1}`).split(''),
      ...(`, PlotStyle->`.split('')),
      `(*VB[*)(RGBColor[1, 0, 0])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qYgCDD/ZQBgMDnAEA4iUPRg=="*)(*]VB*)`,
      ...(`, {x,0,1}]`).split('')
    ]
  },
  table: {
    delay: 60,
    frames: [`Table[`, `i^2`, `, {i, 1, 10}]`]
  },
  manipulate: {
    delay: 40,
    frames: [`Manipulate[`, `Plot[Sin[a x], {x, 0, 2Pi}]`, `, {a, 1, 5}]`]
  }
};

export default function HomePage() {
  const controllerRef = useRef<AnimationController | null>(null);

  useEffect(() => {
    const editor = document.getElementById('hero-editor');
    
    if (!editor) return;

    const handleCodemirrorReady = (event: any) => {
      if (!event.detail) {
        console.warn('codemirrorReady event missing detail');
        return;
      }

      // Create animation controller
      const controller = new AnimationController(ANIMATIONS, event.detail);
      controllerRef.current = controller;

      controller.runSequence([
        { animationName: 'plot', pauseAfter: 2000, clearBefore: true }, // Clear placeholder, run plot, wait 2s
        { animationName: 'table', pauseAfter: 1500, clearBefore: true }, // Clear, run table, wait 1.5s
        { animationName: 'manipulate', clearBefore: true } // Clear and run manipulate
      ]);

      // Infinite loop 
      // const runLoop = () => {
      //   controller.runSequence([
      //     { animationName: 'plot', pauseAfter: 3000, clearBefore: true },
      //     { animationName: 'table', pauseAfter: 3000, clearBefore: true },
      //   ]);
      //   // Schedule next loop after all animations complete
      //   setTimeout(runLoop, 8000);
      // };
      // runLoop();
    };
    
    editor.addEventListener('codemirrorReady', handleCodemirrorReady);
    
    // Comprehensive cleanup
    return () => {
      editor.removeEventListener('codemirrorReady', handleCodemirrorReady);
      
      // Stop any running animations
      if (controllerRef.current) {
        controllerRef.current.stop();
        controllerRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Full-width background with gradients and geometric shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-350 h-350 bg-linear-to-br from-orange-500/15 via-transparent to-pink-500/15 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-1/4 w-250 h-250 bg-linear-to-bl from-rose-500/70 via-transparent to-orange-500/15 blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-1/4 w-200 h-200 bg-linear-to-tr from-pink-500/70 via-transparent to-rose-500/10 blur-3xl opacity-40" />
        
        {/* Geometric shapes with noise */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <filter id="noiseShape">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
              <feColorMatrix type="saturate" values="0" />
              <feBlend mode="overlay" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        
        {/* Geometric shapes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="noiseTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
              <feColorMatrix in="noise" type="saturate" values="0" />
            </filter>
          </defs>
          {/* Circle top right */}
          <circle cx="1400" cy="150" r="200" fill="#f97316" filter="url(#noiseTexture)" opacity="0.15" />
          {/* Triangle top left */}
          <polygon points="100,150 350,100 200,400" fill="#ec4899" filter="url(#noiseTexture)" opacity="0.12" />
          {/* Pentagon bottom left */}
          <polygon points="150,600 300,550 400,650 320,800 120,750" fill="#f43f5e" filter="url(#noiseTexture)" opacity="0.13" />
          {/* Rectangle rotated */}
          <rect x="1200" y="500" width="300" height="200" fill="#f97316" transform="rotate(25 1350 600)" filter="url(#noiseTexture)" opacity="0.12" />
          {/* Hexagon middle right */}
          <polygon points="1300,450 1380,490 1380,570 1300,610 1220,570 1220,490" fill="#ec4899" filter="url(#noiseTexture)" opacity="0.13" />
          {/* Small circles scattered */}
          <circle cx="250" cy="450" r="120" fill="#f43f5e" filter="url(#noiseTexture)" opacity="0.10" />
          <circle cx="1450" cy="700" r="150" fill="#f97316" filter="url(#noiseTexture)" opacity="0.12" />
          {/* Diamond shape center */}
          <polygon points="800,350 900,450 800,550 700,450" fill="#ec4899" filter="url(#noiseTexture)" opacity="0.10" />
        </svg>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20" />
      </div>

      <main className="relative max-w-7xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-secondary/50 px-4 py-1.5 text-sm mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open Source & Free
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
          WLJS Notebook
        </h1>
        <p className="text-xl sm:text-2xl text-fd-muted-foreground mb-4 max-w-2xl font-medium">
          Open-source Notebook interface for Wolfram Language
        </p>
        <p className="text-base sm:text-lg text-fd-muted-foreground/80 mb-8 max-w-xl">
          Typeset math input, syntactic sugar, multiple languages, and a fast, granular evaluation engine
        </p>
        
        <div className="flex gap-3 mb-12 flex-wrap justify-center">
          <Link 
            href="/docs" 
            className="group relative inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-2.5 font-medium text-fd-primary-foreground transition-all hover:bg-fd-primary/90 hover:shadow-lg hover:shadow-fd-primary/25"
          >
            <span className="relative z-10">Overview</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-fd-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link 
            href="/docs" 
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/50 backdrop-blur-sm px-6 py-2.5 font-medium transition-all hover:bg-fd-primary hover:text-fd-background hover:border-fd-primary/50"
          >
            <Download className="size-4" />
            Install
          </Link>
        </div>

        {/* Code Example with glow effect */}
        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-fd-primary/50 to-purple-500/50 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
          <div className="relative rounded-lg border border-fd-border bg-fd-card/95 backdrop-blur-sm p-6 text-left shadow-xl">
            <pre className="text-sm overflow-x-auto">
              <code>
                <wljs-editor id="hero-editor" type="Input" display="codemirror">{`Plot`}</wljs-editor>
              </code>
            </pre>
          </div>
        </div>
        <div className="relative w-full max-w-2xl group mt-2">
          
          <div className="relative rounded-lg border border-fd-border bg-fd-card/95 backdrop-blur-sm p-6 text-center shadow-xl">
            <pre className="text-sm overflow-x-auto">
              <code>
                <wljs-editor type="Input" id="hero-output" display="codemirror">{`Plot`}</wljs-editor>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Everything you need to build amazing sharable notebooks
        </h2>
        <Cards>
          <Card 
            icon={<Code2 />}
            title="Feels like Mathematica and Jupyter"
            description="WLJS Notebook is compatible with Wolfram Mathematica (it can open .nb files) and has a flat and minimal notebook structure like in Jupyter Lab."
            href="/docs"
          />

          <Card 
            icon={<Zap />}
            title="Interactive & Powerful"
            description="Optimized for interactive computing and allows to make complex real-time visualizations."
            href="/docs"
          />

          <Card 
            icon={<Lightbulb />}
            title="Driven by real-world problem solving"
            description="Developed through the collaboration of physicists and programmers at University of Augsburg 🇩🇪 it is continuously refined in a feedback loop."
            href="/docs"
          />

          <Card 
            icon={<Download />}
            title="Super portable"
            description="Export and share your notebook as a standalone or embeddable .html or .mdx file—plots stay interactive, and sliders remain draggable."
            href="/docs"
          />

          <Card 
            icon={<Package />}
            title="Batteries included"
            description="More than 200 importers/exporters formats, 3000 functions. Vast standard library of Wolfram Engine is ready for every computational need."
            href="/docs"
          />

          <Card 
            icon={<Terminal />}
            title="Javascript Sandbox"
            description="First class support of Javascript with a dedicated communication channel to Wolfram Kernel. Use any library from web to enhance your visuals."
            href="/docs"
          />
        </Cards>
      </div>

      {/* Call to Action Section with gradient border */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-fd-primary via-purple-500 to-fd-primary rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500" />
        <div className="relative rounded-lg border border-fd-border bg-fd-card/95 backdrop-blur-sm p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">We need your support</h2>
          <p className="text-fd-muted-foreground mb-6 max-w-2xl mx-auto">
            As an independent open-source project, we're unaffiliated with Wolfram or any company. Your support keeps this project alive.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a 
              href="https://github.com/JerryI/wolfram-js-frontend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-secondary px-6 py-2.5 font-medium text-fd-secondary-foreground transition-all hover:bg-fd-secondary/80 hover:scale-105"
            >
              ⭐ Star on GitHub
            </a>
            <Link 
              href="/docs" 
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-2.5 font-medium text-fd-primary-foreground transition-all hover:bg-fd-primary/90 hover:scale-105"
            >
              📚 Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
