import { Shield, Zap, Wallet, Eye } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const pillars = [
  {
    icon: <Shield size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Fair, transparent pricing',
    text: 'Every transaction is recorded on an immutable ledger. You see exactly what things cost — and what they should cost.',
  },
  {
    icon: <Zap size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Budget-first design',
    text: 'Students, families, individuals — everyone gets tools built around their actual food budget, not some algorithm\'s guess.',
  },
  {
    icon: <Eye size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Parental monitoring',
    text: 'Parents can track their children\'s meals and nutrition in real time — whether they\'re on campus or across the globe.',
  },
  {
    icon: <Wallet size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Food security infrastructure',
    text: 'The backbone of a system where access to quality food isn\'t a privilege. Community-driven, always transparent, always fair.',
  },
];

const About = () => {
  const { convert } = useCurrency();

  const priceItems = [
    { item: 'Rice (5kg)', oldUsd: 12.40, nowUsd: 9.60, save: '23%' },
    { item: 'Eggs (dozen)', oldUsd: 4.80, nowUsd: 3.50, save: '27%' },
    { item: 'Cooking oil (3L)', oldUsd: 8.90, nowUsd: 7.10, save: '20%' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div data-reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
              <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Why we exist</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight text-balance">
              Food shouldn't be a financial{' '}
              <span style={{ color: 'rgb(0,131,208)' }}>stress test</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
              We watched students skip meals. Families stretch budgets thin. And middlemen take their cut
              without adding a cent of value. Nekstpei exists because the system was broken — and technology
              gives us the tools to fix it.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-4" data-reveal>
                  <div className={`stagger-${i + 1} flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center`}>
                    {pillar.icon}
                  </div>
                  <div className={`stagger-${i + 1}`}>
                    <h4 className="text-sm font-semibold text-white mb-1">{pillar.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div data-reveal="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8">
              <div className="space-y-5">
                {priceItems.map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-[rgba(0,131,208,0.15)] transition-colors duration-500"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{tx.item}</p>
                      <p className="text-xs text-gray-600 line-through mt-0.5">{convert(tx.oldUsd)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold" style={{ color: 'rgb(0,131,208)' }}>{convert(tx.nowUsd)}</p>
                      <p className="text-xs text-green-500/80 mt-0.5">Save {tx.save}</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/[0.08]">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-500 font-medium">Prices verified in real time</span>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,131,208,0.06),transparent_70%)] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
