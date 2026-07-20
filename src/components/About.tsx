
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Award, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo([imageRef.current, contentRef.current], {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Image hover effect
    const handleMouseEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.05,
        rotation: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mouseenter', handleMouseEnter);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mouseenter', handleMouseEnter);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="w-80 h-80 mx-auto relative rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sandeep - Freelance Photographer"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dust-violet/20 to-golden/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating quote */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm italic text-soft-black font-light">
                "Photography is the pause button of life"
              </p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-soft-black mb-6">
                About Sandeep
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-dust-violet to-golden mb-8"></div>
              
              <p className="text-lg text-dust-violet leading-relaxed mb-6">
                With over 8 years of experience capturing life's most precious moments, 
                I specialize in creating visual narratives that speak to the soul. My work 
                spans from intimate portraits to grand celebrations, each frame thoughtfully 
                composed to tell your unique story.
              </p>
              
              <p className="text-lg text-dust-violet leading-relaxed">
                Based in the heart of the city, I draw inspiration from the interplay of 
                natural light and human emotion, creating timeless images that you'll 
                treasure for generations.
              </p>
            </div>

            {/* Skills/Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-golden/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-golden/20 transition-colors duration-300">
                  <Camera className="h-8 w-8 text-dust-violet" />
                </div>
                <p className="font-medium text-soft-black">Canon 5D IV</p>
                <p className="text-sm text-dust-violet">Primary Camera</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-golden/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-golden/20 transition-colors duration-300">
                  <Award className="h-8 w-8 text-dust-violet" />
                </div>
                <p className="font-medium text-soft-black">500+</p>
                <p className="text-sm text-dust-violet">Projects</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-golden/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-golden/20 transition-colors duration-300">
                  <Star className="h-8 w-8 text-dust-violet" />
                </div>
                <p className="font-medium text-soft-black">8 Years</p>
                <p className="text-sm text-dust-violet">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
