import { Wallet, Send, Brain, Building2, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: <Wallet size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Food Value Wallet',
    description: 'Load food credits, track balances, and manage your food budget all in one place.',
  },
  {
    icon: <Send size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Send Food, Not Money',
    description: 'Transfer food credits to students, family, or friends. They get real meals.',
  },
  {
    icon: <Brain size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'AI Meal Planning',
    description: '"I have ₦10,000 for five days — what can I eat?" Our AI helps.',
  },
  {
    icon: <Building2 size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Institutional Programs',
    description: 'Universities and NGOs can manage food-support programs with dashboards.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            Food value, made digital
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            A complete food-value network — from wallet to vendor redemption. Built for students, families, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card p-7 group card-magnetic flex flex-col"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(30px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-[rgba(0,131,208,0.2)] transition-colors duration-500">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                {feature.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
                style={{ color: 'rgb(0,131,208)' }}
              >
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;