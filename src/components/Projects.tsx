import { projects } from '../data/portfolio';
import CodeCard from './CodeCard';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Background</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Selected{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            A mix of full-stack products, internship work and client websites — each with real users and real constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, idx) => {
            const tools = p.technologies.map((t) => `'${t}'`).join(', ');
            return (
              <div
                key={p.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Index badge */}
                <div className="absolute -top-3 -left-3 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-[#041210] font-mono font-bold flex items-center justify-center shadow-glow-emerald">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <CodeCard filename={`project-${idx + 1}.js`} live>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{p.image}</span>
                    <div>
                      <div className="text-base-content font-sans font-semibold text-base leading-tight">
                        {p.title}
                      </div>
                      {p.role && (
                        <div className="text-[11px] font-mono text-secondary mt-0.5">
                          myRole: {p.role}
                        </div>
                      )}
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap text-[0.78rem] leading-6">
                    <span className="tok-key">const</span>{' '}
                    <span className="tok-var">project</span>{' '}
                    <span className="tok-punct">= {'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">name</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-str">'{p.title}'</span>
                    <span className="tok-punct">,</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">tools</span>
                    <span className="tok-punct">: [</span>
                    <span className="tok-str">{tools}</span>
                    <span className="tok-punct">],</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">description</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-str">
                      '{p.description.slice(0, 160)}
                      {p.description.length > 160 ? '…' : ''}'
                    </span>
                    <span className="tok-punct">,</span>
                    {'\n'}
                    <span className="tok-punct">{'}'};</span>
                  </pre>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary/10 border border-primary/25 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 6 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-base-300/60 text-base-content/55">
                        +{p.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-primary/10">
                    {p.link && p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-accent transition-colors"
                      >
                        Live Demo
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {p.github && p.github !== '#' && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-base-content/60 hover:text-primary transition-colors"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </CodeCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
