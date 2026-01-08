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
          <div className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/30">
                <div className="space-y-6">
                  {Object.entries(personalInfo.stats).map(([key, stat], index) => {
                    const gradients = [
                      'from-primary to-secondary',
                      'from-secondary to-accent',
                      'from-accent to-primary',
                    ];
                    const colorClasses = [
                      'text-primary',
                      'text-secondary',
                      'text-accent',
                    ];
                    const gradient = gradients[index % gradients.length];
                    const colorClass = colorClasses[index % colorClasses.length];
                    
                    return (
                      <div key={key}>
                        <div className="flex items-center justify-between">
                          <span className="text-base-content/70">{stat.label}</span>
                          <span className={`text-2xl font-bold ${colorClass}`}>
                            {stat.value}
                          </span>
                        </div>
                        <div className="w-full bg-base-300 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${gradient} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${stat.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

