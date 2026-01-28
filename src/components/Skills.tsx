import { skills, techStack } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    skills.frontend,
    skills.backend,
    skills.tools,
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-base-100 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-base-content/70 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Additional tech stack showcase */}
        <div className="mt-16 max-w-4xl mx-auto">

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 cursor-default"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

