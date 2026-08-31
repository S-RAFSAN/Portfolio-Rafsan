import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Background</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            My{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            The academic foundations that shaped how I think and build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((ed, i) => (
            <div
              key={`${ed.degree}-${i}`}
              className="panel p-6 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-widest text-primary">
                  {ed.period}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug">{ed.degree}</h3>
                <div className="mt-2 text-base-content/60 text-sm">{ed.institution}</div>
                <div className="mt-5 flex items-center gap-2 text-base-content/40 text-xs font-mono">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Verified credential
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
