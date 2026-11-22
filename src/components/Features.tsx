import { Bot, Wallet, Send, Brain, QrCode, Building2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  tag?: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: 'Agentic vendor network',
    description:
      'Autonomous agents handle pricing, routing, and restocking for every vendor in the network — so meals scale without the manual overhead.',
    accent: '#FFFFFF',
    tag: 'Core',
  },
  {
    icon: Wallet,
    title: 'Food value wallet',
    description:
      'Load food credits, track balances, and manage your food budget all in one place — transparent from the first naira.',
    accent: '#FFFFFF',
  },
  {
    icon: Send,
    title: 'Send food, not money',
    description:
      'Transfer food credits to students, family, or friends. They get real meals — never diverted cash.',
    accent: '#FFFFFF',
  },
  {
    icon: Brain,
    title: 'AI meal planning',
    description:
      '"I have ₦10,000 for five days — what can I eat?" Our AI answers instantly, based on budget, location, and taste.',
    accent: '#FFFFFF',
    tag: 'AI',
  },
  {
    icon: QrCode,
    title: 'Verified redemption',
    description:
      'Scan-to-pay at verified vendors with live confirmation. Every credit is traceable from wallet to plate.',
    accent: '#FFFFFF',
  },
  {
    icon: Building2,
    title: 'Institutional programs',
    description:
      'Universities, employers, and NGOs run food-support programs with dashboards, reporting, and full accountability.',
    accent: '#FFFFFF',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section-padding relative" ref={sectionRef}>
      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <span className="eyebrow">Core capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-5 text-balance">
            One ecosystem, <span className="text-white">every moving part</span>
          </h2>
          <p className="text-[#BFBFBF] text-base leading-relaxed">
            From wallet to vendor to plate — a complete food-value network powered
            by agents, AI, and verified redemption. Built for students, families,
            and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="glass-card p-7 group card-magnetic flex flex-col"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(30px)',
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${feature.accent}14`, border: `1px solid ${feature.accent}33` }}
                  >
                    <Icon size={22} style={{ color: feature.accent }} />
                  </div>
                  {feature.tag && (
                    <span
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                      style={{ color: feature.accent, background: `${feature.accent}14`, border: `1px solid ${feature.accent}33` }}
                    >
                      {feature.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Orbitron' }}>
                  {feature.title}
                </h3>

                <p className="text-sm text-[#BFBFBF] leading-relaxed mb-5 flex-1">
                  {feature.description}
                </p>

                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
                  style={{ color: feature.accent }}
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
