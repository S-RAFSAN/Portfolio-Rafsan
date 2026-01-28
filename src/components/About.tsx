import { personalInfo } from '../data/portfolio';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-base-200 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg leading-relaxed text-base-content/80">
                {personalInfo.about.map((paragraph, index) => (
                  <p key={index} className={index < personalInfo.about.length - 1 ? "mb-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {personalInfo.tags.map((tag, index) => {
                  const colorClasses = [
                    'bg-primary/20 text-primary',
                    'bg-secondary/20 text-secondary',
                    'bg-accent/20 text-accent',
                  ];
                  const colorClass = colorClasses[index % colorClasses.length];
                  return (
                    <div
                      key={index}
                      className={`px-4 py-2 ${colorClass} rounded-full font-semibold`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

