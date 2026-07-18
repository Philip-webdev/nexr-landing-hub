import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Search size={20} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Set your budget',
    desc: 'Tell us your weekly food budget. We\'ll find the best deals within it.',
  },
  {
    num: '02',
    icon: <ShoppingCart size={20} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Pick your groceries',
    desc: 'Browse verified vendors with real-time pricing. No surprises.',
  },
  {
    num: '03',
    icon: <Truck size={20} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Get it delivered',
    desc: 'Campus proxies deliver from market to your door. Fast, cheap, reliable.',
  },
  {
    num: '04',
    icon: <CheckCircle size={20} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Prices verified',
    desc: 'Every price is checked against live market data. Full transparency.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">How it works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            Four steps to smarter groceries
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From budget to delivery — the whole flow is transparent, fast, and built for people who've got better things to do than stress about food prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              data-reveal
              className={`stagger-${i + 1} relative p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[rgba(0,131,208,0.12)] transition-all duration-500 group`}
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-white/[0.04] absolute top-4 right-5 select-none group-hover:text-[rgba(0,131,208,0.08)] transition-colors duration-500">
                {step.num}
              </div>

              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-[rgba(0,131,208,0.2)] transition-colors duration-500">
                {step.icon}
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
