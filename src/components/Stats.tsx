import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, Users, Heart, Activity } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  suffix?: string;
  accent: string;
  fill: number;
}

const StatItem = ({ icon: Icon, value, label, suffix = '', accent, fill }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const animateCount = () => {
    const target = parseFloat(value);
    const isDecimal = value.includes('.');
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplayValue(isDecimal ? current.toFixed(1) : Math.floor(current).toString());

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <div ref={ref} className="text-left space-y-3.5">
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-1"
        style={{ background: `${accent}14`, border: `1px solid ${accent}33` }}
      >
        <Icon size={19} style={{ color: accent }} />
      </div>

      <div>
        <span
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: 'Orbitron', color: accent }}
        >
          {displayValue}
        </span>
        <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {suffix}
        </span>
      </div>

      <div className="stat-bar">
        <div
          className="stat-bar-fill"
          style={{ '--w': `${fill}%`, background: `linear-gradient(90deg, ${accent}, ${accent}55)` } as React.CSSProperties}
        />
      </div>

      <div className="text-sm text-[#BFBFBF] leading-snug">{label}</div>
    </div>
  );
};

const stats: StatItemProps[] = [
  {
    icon: Heart,
    value: '73',
    suffix: '%',
    label: 'of African students skip meals during term',
    accent: '#FFFFFF',
    fill: 73,
  },
  {
    icon: Users,
    value: '30.6',
    suffix: 'M',
    label: 'Nigerians facing food insecurity today',
    accent: '#FFFFFF',
    fill: 64,
  },
  {
    icon: TrendingUp,
    value: '1',
    suffix: ' in 3',
    label: 'Nigerian students went a full day without eating',
    accent: '#FFFFFF',
    fill: 33,
  },
  {
    icon: Activity,
    value: '100',
    suffix: '%',
    label: 'of food value tracked — from wallet to plate',
    accent: '#FFFFFF',
    fill: 100,
  },
];

const Stats = () => {
  return (
    <section className="section-padding relative">
      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
          <span className="eyebrow">The reality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4 text-balance">
            A continental problem,{' '}
            <span className="text-white">worth an ecosystem</span>
          </h2>
          <p className="text-[#BFBFBF] text-base leading-relaxed">
            Food insecurity across Africa isn't a messaging problem — it's a
            infrastructure problem. We're building the network that closes the gap.
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          data-reveal
        >
          {stats.map((stat, i) => (
            <div key={i} className={`stagger-${i + 1}`}>
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
