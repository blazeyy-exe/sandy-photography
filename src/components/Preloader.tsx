
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let imagesLoaded = 0;
    const totalImages = 2;
    
    const checkAllImagesLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        startAnimation();
      }
    };

    // Preload hero background image
    const heroImage = new Image();
    heroImage.onload = checkAllImagesLoaded;
    heroImage.onerror = checkAllImagesLoaded; // Continue even if image fails to load
    heroImage.src = '/lovable-uploads/c67ed19f-4d34-490b-a67d-77e1a0be06e6.png';
    
    // Preload header logo
    const headerLogo = new Image();
    headerLogo.onload = checkAllImagesLoaded;
    headerLogo.onerror = checkAllImagesLoaded; // Continue even if image fails to load
    headerLogo.src = '/lovable-uploads/e6402a9b-0534-4a95-9121-7339405a7c4a.png';

    const startAnimation = () => {
      const tl = gsap.timeline();
      
      // Initial state
      gsap.set([textRef.current, logoRef.current], { opacity: 0, y: 30 });
      gsap.set(progressRef.current, { width: '0%' });

      // Animation sequence
      tl.to([logoRef.current, textRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      })
      .to(progressRef.current, {
        width: "100%",
        duration: 2,
        ease: "power2.out"
      }, "-=0.5")
      .to([logoRef.current, textRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in"
      }, "+=0.3")
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        }
      }, "-=0.2");
    };

    // Fallback timeout in case images take too long
    const fallbackTimeout = setTimeout(() => {
      if (imagesLoaded < totalImages) {
        console.log('Image preloading timeout, proceeding with animation');
        startAnimation();
      }
    }, 5000); // 5 second timeout

    return () => {
      clearTimeout(fallbackTimeout);
    };

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-warm flex flex-col items-center justify-center"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-golden rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        <div ref={logoRef} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-soft-black mb-2">
            Sandeep
          </h1>
          <div className="h-1 bg-gradient-to-r from-dust-violet to-golden mx-auto w-24"></div>
        </div>
        
        <div ref={textRef} className="mb-12">
          <p className="text-lg text-dust-violet font-light">
            Capturing Light & Life...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-warm-dark mx-auto relative">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-dust-violet to-golden absolute left-0 top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
