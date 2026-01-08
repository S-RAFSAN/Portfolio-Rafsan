import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-base-100/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            RAFSAN
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection('home')}
              className="cursor-pointer hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="cursor-pointer hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('skills')}
              className="cursor-pointer hover:text-primary transition-colors font-medium"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection('projects')}
              className="cursor-pointer hover:text-primary transition-colors font-medium"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a
              onClick={() => scrollToSection('home')}
              className="block cursor-pointer hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="block cursor-pointer hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('skills')}
              className="block cursor-pointer hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection('projects')}
              className="block cursor-pointer hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="block cursor-pointer hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

