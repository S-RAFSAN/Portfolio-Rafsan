import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import CodeCard from './CodeCard';
import Typewriter from './Typewriter';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-24 pb-20"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.35), transparent 45%)`,
        }}
      />
      <div className="absolute top-24 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Intro */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-mono">
              <span className="availability-dot" />
              {personalInfo.availability}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-base-content/90">Hello,</span>
              <br />
              <span className="text-base-content/70 text-4xl md:text-5xl lg:text-6xl font-semibold">
                This is
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {personalInfo.firstName}
              </span>{' '}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                {personalInfo.lastName}
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-base-content/80 font-mono">
              <span className="text-base-content/50">I'm a </span>
              <Typewriter words={personalInfo.rotatingRoles} />
            </div>

            <p className="text-base md:text-lg text-base-content/60 max-w-xl">
              {personalInfo.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={() => scrollToSection('contact')} className="btn-neon">
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn-ghost-neon">
                View My Work
              </button>
            </div>

            <div className="pt-6 flex items-center gap-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-base-200/60 border border-primary/20 text-base-content/70 hover:text-primary hover:border-primary hover:scale-110 transition-all"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-base-200/60 border border-primary/20 text-base-content/70 hover:text-primary hover:border-primary hover:scale-110 transition-all"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.socialLinks.facebook || 'https://facebook.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-base-200/60 border border-primary/20 text-base-content/70 hover:text-primary hover:border-primary hover:scale-110 transition-all"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 max-w-lg">
              {Object.values(personalInfo.stats).map((s) => (
                <div key={s.label} className="panel px-4 py-3 text-center">
                  <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-base-content/55 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Code card */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <CodeCard filename="developer.js" live>
              <pre className="whitespace-pre-wrap leading-7">
{renderDeveloperCode()}
              </pre>
            </CodeCard>
          </div>
        </div>
      </div>
    </section>
  );
};

function renderDeveloperCode() {
  const name = `'${personalInfo.firstName} ${personalInfo.lastName}'`;
  const builds = personalInfo.builds.map((b) => `'${b}'`).join(', ');
  const expertise = personalInfo.expertise.map((b) => `'${b}'`).join(', ');
  const skills = personalInfo.coreSkills.map((b) => `'${b}'`).join(', ');
  return (
    <>
      <span className="tok-key">const</span>{' '}
      <span className="tok-var">developer</span>{' '}
      <span className="tok-punct">= {'{'}</span>
      {'\n'}
      {'  '}<span className="tok-prop">name</span>
      <span className="tok-punct">:</span>{' '}
      <span className="tok-str">{name}</span>
      <span className="tok-punct">,</span>
      {'\n'}
      {'  '}<span className="tok-prop">builds</span>
      <span className="tok-punct">: [</span>
      <span className="tok-str">{builds}</span>
      <span className="tok-punct">],</span>
      {'\n'}
      {'  '}<span className="tok-prop">expertise</span>
      <span className="tok-punct">: [</span>
      <span className="tok-str">{expertise}</span>
      <span className="tok-punct">],</span>
      {'\n'}
      {'  '}<span className="tok-prop">skills</span>
      <span className="tok-punct">: [</span>
      <span className="tok-str">{skills}</span>
      <span className="tok-punct">],</span>
      {'\n'}
      {'  '}<span className="tok-prop">problemSolver</span>
      <span className="tok-punct">:</span>{' '}
      <span className="tok-bool">true</span>
      <span className="tok-punct">,</span>
      {'\n'}
      {'  '}<span className="tok-prop">aiDriven</span>
      <span className="tok-punct">:</span>{' '}
      <span className="tok-bool">true</span>
      <span className="tok-punct">,</span>
      {'\n'}
      <span className="tok-punct">{'}'};</span>
    </>
  );
}

export default Hero;
