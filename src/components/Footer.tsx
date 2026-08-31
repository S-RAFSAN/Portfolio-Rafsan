import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-base-200/40 border-t border-primary/15 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto px-6 py-14">
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold font-mono tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              &lt;{personalInfo.firstName} {personalInfo.lastName}/&gt;
            </div>
            <p className="text-base-content/60 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer crafting high-performance, AI-assisted web applications.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-primary">
              <span className="availability-dot" />
              {personalInfo.availability}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              // Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              // Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-primary transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.socialLinks.facebook || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-primary transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-base-content/55">
          <p>
            © {currentYear} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Built with <span className="text-primary">React</span>,{' '}
            <span className="text-primary">TypeScript</span> &amp;{' '}
            <span className="text-primary">Tailwind CSS</span>
            <span className="mx-2 text-base-content/30">•</span>
            Version <span className="text-accent">{personalInfo.version}</span>
          </p>
        </div>

        <div className="mt-10 text-center space-y-2">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Thank You for Visiting
          </h3>
          <p className="text-base-content/55 text-sm">
            Keep building, keep learning — see you in the next commit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
