import { blogs } from '../data/portfolio';

const Blogs = () => {
  return (
    <section id="blogs" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Thoughts</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Latest{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto">
            Notes on engineering, AI-assisted development, and the lessons from shipping real apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((b, i) => (
            <a
              key={b.title}
              href={b.link}
              className="panel p-6 group flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Thumbnail-style header */}
              <div className="h-32 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border border-primary/20 flex items-center justify-center mb-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 30%, rgba(16,185,129,0.4), transparent 40%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3), transparent 40%)',
                  }}
                />
                <svg className="w-10 h-10 text-primary relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 4v6h6M9 14h6M9 18h4" />
                </svg>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-base-content/50 mb-2">
                <span>{b.date}</span>
                <span>•</span>
                <span>{b.readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-base-content/60 line-clamp-3">{b.excerpt}</p>

              <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-1.5 text-xs font-mono text-primary group-hover:gap-2.5 transition-all">
                Read more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
