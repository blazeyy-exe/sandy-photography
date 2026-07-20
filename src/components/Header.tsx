
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex flex-col items-center justify-center py-4 md:py-6">
          {/* Desktop Navigation - logo centered with nav items on sides */}
          <div className="hidden lg:flex items-center justify-center w-full max-w-6xl">
            {/* Left side navigation */}
            <nav className="flex items-center space-x-6 xl:space-x-8">
              <a href="#home" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">HOME</a>
              <a href="#about" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">ABOUT US</a>
              <a href="#portfolio" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">SERVICES</a>
            </nav>

            {/* Centered Logo */}
            <div className="flex items-center mx-8 xl:mx-12">
              <img 
                src="/lovable-uploads/e6402a9b-0534-4a95-9121-7339405a7c4a.png" 
                alt="Sandeep Photography Logo" 
                className="h-12 xl:h-16 w-auto"
              />
            </div>

            {/* Right side navigation */}
            <nav className="flex items-center space-x-6 xl:space-x-8">
              <a href="#testimonials" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">CLIENT</a>
              <a href="#blog" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">BLOG</a>
              <a href="#contact" className="text-white hover:text-golden transition-colors font-medium tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap">CONTACT US</a>
            </nav>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center justify-between w-full">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e6402a9b-0534-4a95-9121-7339405a7c4a.png" 
                alt="Sandeep Photography Logo" 
                className="h-14 w-auto"
              />
            </div>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-golden transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile - Logo and menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e6402a9b-0534-4a95-9121-7339405a7c4a.png" 
                alt="Sandeep Photography Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-golden transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/80 backdrop-blur-sm rounded-lg mt-2 mx-2">
            <nav className="py-4 space-y-2">
              <a href="#home" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>HOME</a>
              <a href="#about" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
              <a href="#portfolio" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
              <a href="#testimonials" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>CLIENT</a>
              <a href="#blog" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>BLOG</a>
              <a href="#contact" className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
