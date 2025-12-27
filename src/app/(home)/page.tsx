'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Code2, Lightbulb, Zap, Download, Package, Terminal } from 'lucide-react';
import { AnimationController, type AnimationConfig } from './AnimationController';


// Animation sequences - easy to add more!
const ANIMATIONS: Record<string, AnimationConfig> = {
  plot: {
    delay: 45,
    frames: [
      `Plot[{`,
      `(*FB[*)((1)(*,*)/(*,*)(x))(*]FB*)`,
      `, `,
      `(*SpB[*)Power[E(*|*),(*|*)x](*]SpB*)`,
      `}`, 0,
      ...(`, {x,0,1}`).split(''),
      ...(`, PlotStyle->{`.split('')),
      `(*VB[*)(Hue[0.03561231666487014, 0.8918383801498982, 0.8795337025157177, 1.])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNBCjmANIBLk7Oefn5BcVicky3lVWfWNfpLliouDmCxfsi/5vOjStL2qHfREDGHywBwA7SBsq"*)(*]VB*)`,
      `, `,
      `(*VB[*)(Hue[0.7525250981820283, 0.9387608112070892, 0.9098038112440241, 1.])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNBCjmANIBLk7Oefn5BcVPbA7J9m98759kcuMqc8Ota2xL7Iwf/RQRvatfREDGHywBwBxeRxB"*)(*]VB*)`,
      ...(`}, {x,0,1}]`).split('')
    ]
  },
  table: {
    delay: 30,
    frames: [
      ...(`Table[If[PrimeQ[i], Framed[i, Background->`).split(''),
      `(*VB[*)(RGBColor[1, 1, 0])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qYgCDD/boDAYGAO7rEHU="*)(*]VB*)`,
      ...(`], i], {i, 1, 20}]`.split('')),
    ]
  },
  eigen: {
    delay: 50,
    frames: [
      ...(`LinearSolve[(`.split('')),
      `(*GB[*){{r(*|*),(*|*)s}(*||*),(*||*){t(*|*),(*|*)u}}(*]GB*)`,
      `)`,0,
      ...(`, {y, z}]`.split(''))
    ]
  },
  csv: {
    delay: 50,
    frames: [
      ...(`"table.tsv" // SemanticImport`.split(''))
    ]
  },  
  manipulate: {
    delay: 15,
    frames: [...(`Manipulate[
    Plot[
      1 + Sin[\\[Phi]] Sin[x + \\[Phi]], {x, 0, 5 \\[Pi]}, 
      Epilog -> {`.split('')),
      `(*VB[*)(RGBColor[1, 0, 0])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qYgCDD/ZQBgMDnAEA4iUPRg=="*)(*]VB*)`,
      ...(`, Disk[{8, 1 + Sin[\\[Phi]] Sin[8 + \\[Phi]]}, \\[Phi] {0.5,0.1}]}
    , ImageSize->250, ImagePadding->23], {\\[Phi], 0, \\[Pi], 0.2}
]`.split(''))]
  },

  parrot: {
    delay: 60,
    frames: [
      `(*VB[*)(FrontEndRef["e8bf1ee2-d637-4e14-9e1f-7fcd3edb8c67"])(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKp1okpRmmphrpppgZm+uapBqa6FqmGqbpmqclpxinpiRZJJuZAwCTVhZ2"*)(*]VB*)`,
      ...(` // DominantColors`.split(''))
    ]
  },

  md: {
    delay: 40,
    frames: `.md
Write *your notes* in the same cell with $\\\\LaTeX$`.split('')
  },

  js: {
    delay: 30,
    frames: `.js
const r = document.createElement('div');
Object.assign(r.style, {width:'4rem',height:'3rem',backgroundImage:'linear-gradient(to right, red, green)'});
return r;`.split('')
  },

  tomorrow: {
    delay: 50,
    frames: 'Tomorrow - Today'.split('')
  }
};


const animationsArray = [
  async function(controller:any,setOutputVisible:any,assetsRef:any) {
        //section 1
        await controller.animate('plot', true);   // Clear and animate plot
        controller.setOutput(`(*VB[*)(dontlookatme)(*,*)(*"1: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"*)(*]VB*)`);// Wait 1 second
        await controller.pause(300);
        setOutputVisible(true);                    // Show output container
        await controller.pause(4000);    
        setOutputVisible(false); 
  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 2
        await controller.animate('table', true);   // Clear and animate plot
        controller.setOutput(`{1,(*BB[*)(2)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),(*BB[*)(3)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),4,(*BB[*)(5)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),6,(*BB[*)(7)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),8,9,10,(*BB[*)(11)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),12,(*BB[*)(13)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),14,15,16,(*BB[*)(17)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),18,(*BB[*)(19)(*,*)(*"1:eJxTTMoPSmNmYGAo5gMSwSWVOakuqcn5RYkl+UVpTCBxFiARVJqTWswFZDglJmenF+WX5qVANHGAJN2dnPNz8osyGYEcCAHEDGi6ecDGF2UW+Od55hWUlhSzAgXcEnOKU1EVBoPFixJzU8FCIUWlqQAABiTb"*)(*]BB*),20}`);
        setOutputVisible(true);    
        await controller.pause(3000);     
        setOutputVisible(false);     
  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 3
        await controller.animate('eigen', true);
        controller.setOutput(`{(*FB[*)((u y-s z)(*,*)/(*,*)(-s t+r u))(*]FB*),(*FB[*)((t y-r z)(*,*)/(*,*)(s t-r u))(*]FB*)}`);
        setOutputVisible(true); 
        await controller.pause(3000);  
        setOutputVisible(false); 

  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 4
        // Load assets only when needed (right before CSV animation) and only once
        if (!assetsRef.current) {
          const loadedAssets = await loadAssets();
          assetsRef.current = loadedAssets;
        }
        await controller.animate('csv', true);
        controller.setOutput(`(*VB[*)(FrontEndRef["1156c29d-dc71-4588-a402-ae682a3fa0ce"])(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKGxqamiUbWabopiSbG+qamFpY6CaaGBjpJqaaWRglGqclGiSnAgB7dxWa"*)(*]VB*)`);
        setOutputVisible(true); 
        await controller.pause(3000);  
        setOutputVisible(false);    
        
  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 5
        await controller.animate('md', true);
        await controller.pause(3000);
      

  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 6
        // Load assets only when needed (right before CSV animation) and only once
        if (!assetsRef.current) {
          const loadedAssets = await loadAssets();
          assetsRef.current = loadedAssets;
        }        
        await controller.animate(`js`, true);
        controller.setOutput(`(*VB[*)(hey)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKJxkkp5gnmRnophqZJeuaWBgn6loYWxjqmpsZGSYbJRmZmqZYAgCDuRU/"*)(*]VB*)`);
        setOutputVisible(true); 
        await controller.pause(3000);
        setOutputVisible(false);  

              
  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 7
        // Load assets only when needed (right before CSV animation) and only once
        if (!assetsRef.current) {
          const loadedAssets = await loadAssets();
          assetsRef.current = loadedAssets;
        }            
        await controller.animate('manipulate', true);
        controller.setOutput(`(*VB[*)(42)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKm6daJqWapSbpWhqmmumaGBlb6lpYmFroGqQZpJklG6SkpaQaAgCH6xXp"*)(*]VB*)`);
        setOutputVisible(true); 
        await controller.pause(6000);  
        setOutputVisible(false);  


  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 8
        // Load assets only when needed (right before CSV animation) and only once
        if (!assetsRef.current) {
          const loadedAssets = await loadAssets();
          assetsRef.current = loadedAssets;
        }            
        await controller.animate('parrot', true);
        controller.setOutput(`{(*VB[*)(RGBColor[0.30789742562221767, 0.28009930799992366, 0.2567324801591748])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8q0qpOSZ++5bJ9UUT1/aWqby/aF+lsahP0y7tgDwBouxmd"*)(*]VB*),(*VB[*)(RGBColor[0.9708091105843779, 0.9803148755413071, 0.9904798899674178])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qOndmsss9gff2RUl57r5744AMRv0bD5k2vbcHAHK+Ghw="*)(*]VB*),(*VB[*)(RGBColor[0.5978503447738835, 0.04531749371194499, 0.035019904506210064])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qujjjGvd0xcf2RRzPbh+6ZbzcvuhArAKj4ruF9gB1jxnm"*)(*]VB*),(*VB[*)(RGBColor[0.5876268431590908, 0.6555093639216234, 0.500288518611284])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8q0rlufP7a2Uf2RX+qOY69+/nEvujHX3vBWKYH9gCQ2Bvy"*)(*]VB*),(*VB[*)(RGBColor[0.6734079946460099, 0.5111777811451619, 0.03394819738718463])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qSrts/aav56l90YtdfY0Tox/YF0nUClWvSFxoDwCBHBp8"*)(*]VB*),(*VB[*)(RGBColor[0.060156564843861726, 0.19024753116250473, 0.33023547565899036])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qkjjmGXv9zDr7opc5dt/Yo07YF6078/vnZKWr9gB2iRtT"*)(*]VB*),(*VB[*)(RGBColor[0.6126267453513451, 0.4924692137326053, 0.409727153537265])(*,*)(*"1:eJxTTMoPSmNiYGAo5gUSYZmp5S6pyflFiSX5RcEsQBHn4PCQNGaQPAeQCHJ3cs7PyS8qus1dl7541mP7Ii7di9Pntty3L3Iu0rP9YXHLHgBoWxmI"*)(*]VB*)}`);
        setOutputVisible(true); 
        await controller.pause(4000);  
        setOutputVisible(false);     
        

  },

  async function (controller:any,setOutputVisible:any,assetsRef:any) {
        //section 9
        await controller.animate(`tomorrow`, true);
        controller.setOutput(`(*VB[*)(Quantity[1, "Days"])(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWnMIB4vkAjLTC13SU3OL0osyS8K5gCKBJYm5pVkllRmgnQEg3S4JFYWAwAJNw/d"*)(*]VB*)`);
        setOutputVisible(true); 
        await controller.pause(3000);
        setOutputVisible(false);   
  }
];

function loadAssets() : Promise<HTMLElement> {
  const store = document.createElement('wljs-store');
  store.setAttribute('kernel', '/home/kernel.txt');
  store.setAttribute('json', '/home/storage.txt');
  document.body.appendChild(store);
  console.log('started loading assets...');
  const p = new Promise<HTMLElement>((resolve)=>{
    store.addEventListener('loaded', () => {
      resolve(store);
    });
  });
  return p;
}

function unloadAssets(el:HTMLElement) {
  el.remove();
}

function shuffleArray(array:any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export default function HomePage() {
  const controllerRef = useRef<AnimationController | null>(null);
  const [outputVisible, setOutputVisible] = useState(false);
  const assetsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const editor = document.getElementById('hero-editor');
    const outputEditor = document.getElementById('hero-output');
    
    if (!editor) return;

    const handleCodemirrorReady = (event: any) => {
      if (!event.detail) {
        console.warn('codemirrorReady event missing detail');
        return;
      }

      // Create animation controller
      const controller = new AnimationController(ANIMATIONS, event.detail);
      controllerRef.current = controller;

      // Initialize output editor when it's ready
      if (outputEditor) {
        const handleOutputReady = (e: any) => {
          if (e.detail) {
            controller.setOutputEditor(e.detail);
          }
        };
        outputEditor.addEventListener('codemirrorReady', handleOutputReady);
      }

      // Run animations with async/await - much cleaner!
      shuffleArray(animationsArray);
      (async () => {
        for(const f of animationsArray) {
          await f(controller, setOutputVisible,assetsRef)
        }
      })();
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

      // Unload assets when component unmounts
      if (assetsRef.current) {
        unloadAssets(assetsRef.current);
        assetsRef.current = null;
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
        
        {/* Output container - slides in when outputVisible is true */}
        <div 
          style={{height: '260px'}}
          className={`relative w-full max-w-2xl group mt-4 transition-all duration-500 ease-out ${
            outputVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/50 to-blue-500/50 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
          <div className="relative rounded-lg border border-fd-border bg-fd-card/95 backdrop-blur-sm p-6 text-center shadow-xl text-left">
            <pre className="text-sm overflow-x-auto">
              <code>
                <wljs-editor type="Input" id="hero-output" display="codemirror">{`🪄`}</wljs-editor>
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
