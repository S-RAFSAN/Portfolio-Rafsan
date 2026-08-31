import { skillIcons } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Technical Proficiency</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            My{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            A curated stack I reach for when shipping real-world, production-grade software.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skillIcons.map((skill, idx) => (
            <div
              key={skill.name}
              className="panel group p-4 flex flex-col items-center justify-center gap-3 aspect-square animate-fade-in"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.25)]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="text-[11px] md:text-xs font-mono text-base-content/75 text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
