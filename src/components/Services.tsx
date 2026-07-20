
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Heart, Briefcase, Camera as TravelIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Camera,
    title: "Event Photography",
    description: "Capturing your special moments with artistic flair and professional precision",
    price: "Starting at $800",
    features: ["Full day coverage", "High-res gallery", "Quick turnaround"]
  },
  {
    icon: Heart,
    title: "Portrait Sessions",
    description: "Intimate portraits that reveal the authentic beauty and personality within",
    price: "Starting at $300",
    features: ["1-2 hour session", "Multiple locations", "Retouched images"]
  },
  {
    icon: Briefcase,
    title: "Brand Shoots",
    description: "Professional imagery that elevates your brand and tells your story",
    price: "Starting at $500",
    features: ["Brand consultation", "Multiple concepts", "Commercial license"]
  },
  {
    icon: TravelIcon,
    title: "Travel Collaborations",
    description: "Documenting adventures and destinations with a creative eye",
    price: "Custom pricing",
    features: ["Travel included", "Content package", "Social media ready"]
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    // Cards animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards, {
        opacity: 0,
        y: 60,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%"
        }
      });
    }

    // Card hover effects
    const cardElements = cardsRef.current?.children;
    if (cardElements) {
      Array.from(cardElements).forEach(card => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-soft-black mb-6">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-dust-violet to-golden mx-auto mb-8"></div>
          <p className="text-lg text-dust-violet max-w-2xl mx-auto">
            Tailored photography services to capture your vision and bring your stories to life
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-warm-dark hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-dust-violet to-golden p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-semibold text-soft-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-dust-violet mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="text-golden font-semibold text-lg">
                        {service.price}
                      </div>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-dust-violet">
                            <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-warm-dark">
                  <button className="w-full bg-gradient-to-r from-dust-violet to-golden text-white py-3 px-6 rounded-lg font-medium hover:from-golden hover:to-dust-violet transition-all duration-300 transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
