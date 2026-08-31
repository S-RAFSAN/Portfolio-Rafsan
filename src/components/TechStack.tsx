import { useState } from 'react';
import { stack, type StackKey } from '../data/portfolio';

const TechStack = () => {
  const tabs = Object.keys(stack) as StackKey[];
  const [active, setActive] = useState<StackKey>('Frontend');

  const metrics = [
    { label: 'Efficiency Index', value: '0.99ms', key: 'LATENCY_CORE' },
    { label: 'Uptime', value: '99.998%', key: 'CORE_STABILITY' },
    { label: 'Memory Load', value: '32%', key: 'MEM_V3' },
    { label: 'Core Encryption', value: 'AES-256', key: 'SEC_CORE' },
  ];

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="eyebrow">Verified Architecture</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
            Mastering{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              High-Load Stacks.
            </span>
          </h2>
          <p className="mt-4 text-base-content/55 max-w-2xl mx-auto italic">
            "Architecting digital ecosystems where performance meets absolute reliability."
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-stretch">
          {/* Metrics panel */}
          <div className="panel p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-primary">
                  System Status
                </div>
                <div className="text-base-content/60 text-sm mt-1">Frontend_V2.0.4 — optimised</div>
              </div>
              <div className="gauge" style={{ ['--value' as string]: 92 } as React.CSSProperties}>
                <span>92%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.key} className="metric">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-base-content/45">
                    {m.key}
                  </div>
                  <div className="mt-1 text-xl font-extrabold text-primary">{m.value}</div>
                  <div className="text-[11px] text-base-content/55 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Animated bit-rate bars */}
            <div className="space-y-2">
              {['LATENCY_CORE', 'BIT_RATE_V3', 'THROUGHPUT'].map((label, i) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] font-mono text-base-content/50 mb-1">
                    <span>{label}</span>
                    <span>{[98, 87, 94][i]}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-base-300/60 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"
                      style={{ width: `${[98, 87, 94][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal + tabs */}
          <div className="terminal">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/15 bg-black/40">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-base-content/50">stack — zsh</span>
              <span className="ml-auto text-[10px] font-mono text-primary">● LIVE</span>
            </div>

            <div className="flex flex-wrap gap-1 px-4 pt-4 border-b border-primary/10">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`px-4 py-2 text-xs font-mono rounded-t-md transition-colors relative ${
                    active === t
                      ? 'text-primary bg-primary/10'
                      : 'text-base-content/55 hover:text-base-content'
                  }`}
                >
                  {t}
                  {active === t && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                  )}
                </button>
              ))}
            </div>

            <div className="relative p-6 min-h-[320px]">
              <div className="text-[11px] font-mono text-base-content/40 mb-3">
                <span className="text-primary">rafsan@system</span>:~$ ls --arsenal --category={active.toLowerCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {stack[active].map((item, idx) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-base-200/60 border border-primary/20 text-sm font-mono text-base-content/85 hover:border-primary/60 hover:text-primary transition-colors animate-fade-in"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-[10px] font-mono text-base-content/40 flex items-center justify-between border-t border-primary/10 pt-3">
                <span>SYSTEM: OPTIMIZED</span>
                <span>Core Encryption: AES-256</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
