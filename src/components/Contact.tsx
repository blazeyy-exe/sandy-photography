
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Instagram, Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    gsap.fromTo(section.querySelector('h2'), {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%"
        }
      });
    }

    // Social links animation
    const socialLinks = socialsRef.current?.children;
    if (socialLinks) {
      gsap.fromTo(socialLinks, {
        opacity: 0,
        scale: 0
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialsRef.current,
          start: "top 80%"
        }
      });
    }

    // Floating sparkles animation
    const sparkles = section.querySelectorAll('.sparkle');
    gsap.to(sparkles, {
      y: -20,
      rotation: 360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hey! I would like to work with you");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F1EB 0%, #E8DDD4 50%, #D4AF37 100%)'
      }}
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-soft-black mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-dust-violet to-white mx-auto mb-8"></div>
          <p className="text-lg text-soft-black/80 max-w-2xl mx-auto">
            Ready to capture your story? Let's discuss your vision and create something beautiful together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Send Message Button */}
          <div className="text-center mb-12">
            <Button
              ref={buttonRef}
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-dust-violet to-golden hover:from-golden hover:to-dust-violet text-white px-12 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow-pulse"
            >
              Send Message
            </Button>
          </div>

          {/* Social Links */}
          <div ref={socialsRef} className="flex justify-center space-x-8">
            <a
              href="#"
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="h-6 w-6 text-dust-violet group-hover:text-golden transition-colors" />
            </a>
            
            <a
              href="#"
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Camera className="h-6 w-6 text-dust-violet group-hover:text-golden transition-colors" />
            </a>
            
            <a
              href="mailto:hello@Sandeep.photography"
              className="group bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-dust-violet group-hover:text-golden transition-colors font-medium">
                hello@Sandeep.photography
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
