import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Background</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            My{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            Roles and projects where I built, shipped and learned.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${exp.role}-${i}`}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 animate-fade-in`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 timeline-dot" />

                  <div className={`pl-12 md:pl-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                    <div className="panel p-6">
                      <div className="text-xs font-mono uppercase tracking-widest text-primary">
                        {exp.period}
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-base-content">{exp.role}</h3>
                      <div className="text-secondary font-mono text-sm mt-0.5">
                        @ {exp.company}
                      </div>
                      <ul className={`mt-4 space-y-2 text-sm text-base-content/70 ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className={`flex gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-primary shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
