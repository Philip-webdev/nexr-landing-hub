import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon, value, label, suffix = '' }: StatItemProps) => {
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
    <div ref={ref} className="text-center space-y-3">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-2">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

const stats: StatItemProps[] = [
  {
    icon: <TrendingUp size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '73',
    suffix: '%',
    label: 'Students overspend on meals',
  },
  {
    icon: <Users size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '2.4',
    suffix: 'M',
    label: 'People facing food insecurity',
  },
  {
    icon: <Globe size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '36',
    suffix: '%',
    label: 'Average price markup on food',
  },
  {
    icon: <Clock size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '3',
    suffix: 'x',
    label: 'Faster delivery than alternatives',
  },
];

const Stats = () => {
  return (
    <section className="section-padding relative">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
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
