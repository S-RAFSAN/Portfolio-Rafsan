import { certificates } from '../data/portfolio';

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Recognition</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Certificates &{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            Credentials and continuous learning milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((c, i) => (
            <div
              key={c.title}
              className="panel p-6 md:p-7 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/15 border border-primary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base-content leading-snug">{c.title}</h3>
                  <div className="mt-1 flex items-center gap-2 flex-wrap text-xs font-mono">
                    <span className="text-secondary">{c.issuer}</span>
                    <span className="text-base-content/30">•</span>
                    <span className="text-base-content/50">{c.year}</span>
                  </div>
                  <p className="mt-3 text-sm text-base-content/65 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
