import { Shield, Eye, Sparkles, Landmark } from 'lucide-react';

const pillars = [
  {
    icon: <Shield size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Targeted, not restrictive',
    text: 'Senders know the value goes to food. Recipients still choose where they eat and what they buy.',
  },
  {
    icon: <Sparkles size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'AI that budgets, not chats',
    text: 'Recommendations built around a real balance, real vendor prices and real availability — explainable every time.',
  },
  {
    icon: <Eye size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Transparent by default',
    text: 'Balances, receipts, refunds and reconciliation are visible to senders, recipients and merchants alike.',
  },
  {
    icon: <Landmark size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Institution ready',
    text: 'Schools, employers and NGOs issue meal benefits with allocation rules, anomaly detection and auditable reporting.',
  },
];

const flow = [
  { label: 'Parent loads', value: '₦20,000', note: 'Funds into food wallet' },
  { label: 'Sends food credit', value: '₦15,000', note: 'To a university student' },
  { label: 'Redeemed at vendor', value: '₦3,200', note: 'QR scan · settled same day' },
];

const About = () => {
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
              Money is easy to send. Making sure it becomes{' '}
              <span style={{ color: 'rgb(0,131,208)' }}>food isn't</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
              A parent supports a student. An employer funds a meal allowance. An NGO finances food
              assistance. In each case the value is hard to target, monitor or reconcile — and vendors
              are left with cash and informal records. Nekstpei is the food-value infrastructure that
              closes that gap.
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
              <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-6">A single food-value flow</p>

              <div className="space-y-5">
                {flow.map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-[rgba(0,131,208,0.15)] transition-colors duration-500"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{tx.label}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{tx.note}</p>
                    </div>
                    <p className="text-sm font-bold" style={{ color: 'rgb(0,131,208)' }}>{tx.value}</p>
                  </div>
                ))}

                <div className="flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/[0.08]">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-500 font-medium">Every transfer recorded &amp; reconciled</span>
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
