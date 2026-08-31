import { personalInfo } from '../data/portfolio';

const About = () => {
  const initials = `${personalInfo.firstName[0]}${personalInfo.lastName[0]}`;

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">About Me</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Who{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              I Am?
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            A developer obsessed with clean architecture, quality output and shipping things that actually move the needle.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          {/* Avatar / portrait */}
          <div className="relative mx-auto w-full max-w-sm aspect-square">
            <div className="absolute inset-0 orbit" />
            <div className="absolute inset-6 orbit" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
            <div className="absolute inset-10 rounded-full panel overflow-hidden flex items-center justify-center">
              <div className="text-8xl md:text-9xl font-extrabold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent select-none">
                {initials}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary whitespace-nowrap">
                {personalInfo.firstName} {personalInfo.lastName}
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -right-2 panel px-3 py-2 text-xs font-mono flex items-center gap-2 animate-float">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#10b981]" />
              Next.js
            </div>
            <div className="absolute bottom-4 -left-4 panel px-3 py-2 text-xs font-mono flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#06b6d4]" />
              TypeScript
            </div>
          </div>

          {/* Text + stats */}
          <div className="space-y-6">
            {personalInfo.about.map((p, i) => (
              <p key={i} className="text-base-content/70 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {personalInfo.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 border border-primary/25 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Stats with progress bars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {Object.values(personalInfo.stats).map((s) => (
                <div key={s.label} className="panel p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-mono text-base-content/40">
                      {s.percentage}%
                    </span>
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-base-content/55 mt-1">
                    {s.label}
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-base-300/60 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href={personalInfo.resumeLink} className="btn-neon">
                View Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M4 6h16" />
                </svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-ghost-neon">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
