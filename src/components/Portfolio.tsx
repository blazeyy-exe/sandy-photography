
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

const portfolioData: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Portraits",
    title: "Morning Light",
    description: "Natural light portrait capturing authentic emotions"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nature",
    title: "Mountain Mist",
    description: "Ethereal landscape at golden hour"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nature",
    title: "Ocean Dreams",
    description: "Capturing the raw power of the sea"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Portraits",
    title: "Creative Flow",
    description: "Documenting the creative process"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nature",
    title: "Forest Light",
    description: "Sunbeam filtering through ancient trees"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Street",
    title: "Urban Solitude",
    description: "Finding quiet moments in the bustling city"
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Portraits', 'Nature', 'Street', 'Events'];

  const filteredPhotos = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(photo => photo.category === activeFilter);

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

    // Grid items animation
    const gridItems = gridRef.current?.children;
    if (gridItems) {
      gsap.fromTo(gridItems, {
        opacity: 0,
        y: 50,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%"
        }
      });
    }
  }, [filteredPhotos]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-soft-black mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-dust-violet to-golden mx-auto mb-8"></div>
          <p className="text-lg text-dust-violet max-w-2xl mx-auto">
            A curated collection of moments that matter, each telling its own unique story
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-dust-violet text-white shadow-lg'
                  : 'bg-white text-dust-violet hover:bg-dust-violet hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-playfair font-semibold mb-1">{photo.title}</h3>
                    <p className="text-sm opacity-90">{photo.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-dust-violet/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {photo.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="max-w-4xl max-h-full relative">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-playfair font-semibold mb-2">{selectedPhoto.title}</h3>
                <p className="text-lg opacity-90">{selectedPhoto.description}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-golden transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
