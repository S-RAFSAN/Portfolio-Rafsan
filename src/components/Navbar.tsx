import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Primary nav items (shown inline). Extras go under the "More" dropdown.
  const primary = SECTIONS.slice(0, 7);
  const extras = SECTIONS.slice(7);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-base-100/80 backdrop-blur-md border-b border-primary/15 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold font-mono tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            &lt;RAFSAN/&gt;
          </button>

          <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-base-200/60 border border-primary/15 backdrop-blur-md">
            {primary.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'text-primary'
                    : 'text-base-content/70 hover:text-base-content'
                }`}
              >
                {activeSection === id && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30" />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}

            {/* "More" dropdown for extras */}
            <div className="relative group">
              <button
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  extras.some((e) => e.id === activeSection)
                    ? 'text-primary'
                    : 'text-base-content/70 hover:text-base-content'
                }`}
              >
                More
                <svg className="w-3.5 h-3.5 inline-block ml-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-base-200/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {extras.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      activeSection === id
                        ? 'bg-primary/10 text-primary'
                        : 'text-base-content/75 hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button onClick={() => scrollToSection('contact')} className="btn-neon !py-2 !px-5 text-sm">
              Hire Me
            </button>
          </div>

          <button
            className="lg:hidden text-base-content/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-2xl bg-base-200/80 border border-primary/15 backdrop-blur-md space-y-1 max-h-[70vh] overflow-y-auto">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                  activeSection === id
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-base-content/80 hover:text-primary hover:bg-base-300/40'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-neon w-full mt-2"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
