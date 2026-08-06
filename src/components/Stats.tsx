import { useEffect, useRef, useState } from 'react';
import { Store, Users, Repeat, Wallet } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem = ({ icon, value, label, suffix = '', prefix = '' }: StatItemProps) => {
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
    const target = parseFloat(value.replace(/,/g, ''));
    const isDecimal = value.includes('.');
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplayValue(
        isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()
      );

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
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

const stats: StatItemProps[] = [
  {
    icon: <Store size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '50',
    suffix: '+',
    label: 'Active merchants targeted in year one',
  },
  {
    icon: <Users size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '5,000',
    label: 'Monthly active users by year-end',
  },
  {
    icon: <Wallet size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '25',
    prefix: '₦',
    suffix: 'M',
    label: 'Monthly food-value volume goal',
  },
  {
    icon: <Repeat size={20} style={{ color: 'rgb(0,131,208)' }} />,
    value: '1',
    suffix: '–2',
    label: 'Pilot campus communities at launch',
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

        <p className="text-center text-xs text-gray-600 mt-10">
          Illustrative year-one pilot targets from the Nekstpei business plan — not audited forecasts.
        </p>
      </div>
    </section>
  );
};

export default Stats;
