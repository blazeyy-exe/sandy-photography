
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Entrance animation
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power2.out"
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(42, 42, 42, 0.3), rgba(42, 42, 42, 0.3)), url('/lovable-uploads/c67ed19f-4d34-490b-a67d-77e1a0be06e6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Main content */}
      <div className="text-center z-10 px-4 w-full max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 leading-tight opacity-0 px-2"
          style={{
            transform: 'translateY(40px)',
            filter: 'blur(10px)'
          }}
        >
          I CAPTURE MEMORIES
        </h1>
      </div>
    </section>
  );
};

export default Hero;
