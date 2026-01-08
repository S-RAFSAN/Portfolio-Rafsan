import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 py-12 border-t border-base-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {personalInfo.firstName} {personalInfo.lastName}
            </div>
            <p className="text-base-content/70">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content/70 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content/70 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.socialLinks.facebook || 'https://facebook.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content/70 hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-base-300 text-center text-base-content/60">
          <p>© {currentYear} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

