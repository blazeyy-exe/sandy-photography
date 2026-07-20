
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import LatestBlog from '@/components/LatestBlog';
import Contact from '@/components/Contact';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Add smooth scrolling effect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="blog">
            <LatestBlog />
          </div>
          <div id="contact">
            <Contact />
          </div>
          
          {/* Footer */}
          <footer className="bg-warm py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
                  {/* Left side navigation */}
                  <div className="lg:text-right space-y-4">
                    <div className="space-y-2">
                      <a href="#home" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">HOME</a>
                      <a href="#about" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">ABOUT US</a>
                    </div>
                    <div className="space-y-2">
                      <a href="#portfolio" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">SERVICES</a>
                      <a href="#blog" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">BLOG</a>
                    </div>
                  </div>

                  {/* Center - Logo */}
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/3d9f3716-d550-4a76-b4d0-e0c5f52303f6.png" 
                      alt="Sandeep Photography Logo" 
                      className="h-24 w-auto mx-auto mb-6"
                    />
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6">
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Youtube size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className="lg:text-left space-y-4">
                    <div className="space-y-2">
                      <a href="#testimonials" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">CLIENT</a>
                      <a href="#contact" className="block text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">CONTACT US</a>
                    </div>
                    
                    {/* Stay in Touch section */}
                    <div className="mt-8">
                      <h3 className="text-soft-black font-bold text-sm uppercase tracking-wider mb-2">STAY IN TOUCH</h3>
                      <p className="text-soft-black text-sm leading-relaxed">
                        Keep up-to-date with all things<br />
                        Capture! Join our community and<br />
                        never miss a moment!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile and Tablet layout */}
                <div className="lg:hidden space-y-8">
                  {/* Logo and Social Media - Top */}
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/3d9f3716-d550-4a76-b4d0-e0c5f52303f6.png" 
                      alt="Sandeep Photography Logo" 
                      className="h-20 w-auto mx-auto mb-6"
                    />
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6">
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Youtube size={20} />
                      </a>
                      <a href="#" className="text-soft-black hover:text-golden transition-colors">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Page Navigation - Middle */}
                  <div className="text-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <a href="#home" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">HOME</a>
                      <a href="#about" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">ABOUT US</a>
                      <a href="#portfolio" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">SERVICES</a>
                      <a href="#testimonials" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">CLIENT</a>
                      <a href="#blog" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">BLOG</a>
                      <a href="#contact" className="text-soft-black hover:text-golden transition-colors font-medium tracking-wider text-sm uppercase">CONTACT US</a>
                    </div>
                  </div>

                  {/* Stay in Touch - Bottom */}
                  <div className="text-center">
                    <h3 className="text-soft-black font-bold text-sm uppercase tracking-wider mb-2">STAY IN TOUCH</h3>
                    <p className="text-soft-black text-sm leading-relaxed">
                      Keep up-to-date with all things Capture!<br />
                      Join our community and never miss a moment!
                    </p>
                  </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-soft-black/20 mt-8 pt-4 text-center">
                  <p className="text-soft-black text-sm">
                    Copyright © 2024 Web Design Mastery. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
