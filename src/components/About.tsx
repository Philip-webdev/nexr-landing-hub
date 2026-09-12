import { Shield, Zap, Wallet, Eye } from 'lucide-react';

const pillars = [
  {
    icon: <Shield size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Transparent food value',
    text: 'Every food credit is tracked. You see exactly where your money goes — from wallet to vendor to meal.',
  },
  {
    icon: <Zap size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'AI-powered budgeting',
    text: '"I have ₦10,000 for five days — what can I eat?" Our AI considers your budget, location, and preferences.',
  },
  {
    icon: <Eye size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Parental visibility',
    text: 'Parents can send food credits and see exactly what their children eat — whether on campus or across the globe.',
  },
  {
    icon: <Wallet size={22} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Institutional programs',
    text: 'Universities, employers, and NGOs can manage food-support programs with transparent reporting.',
  },
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
              Food value,{' '}
              <span style={{ color: 'rgb(0,131,208)' }}>made digital</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
              Money is easy to transfer, but senders often cannot ensure that funds intended for food are used for food. 
              Nekstpei creates a digital food-value layer between money and physical food.
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

          {/* Right: Flow diagram */}
          <div data-reveal="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(0,131,208)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: 'rgb(0,131,208)' }}>₦</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Money</p>
                    <p className="text-xs text-gray-500">Parent loads ₦20,000</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-4 bg-[rgb(0,131,208)]/30" />
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-[rgb(0,131,208)]/5 border border-[rgb(0,131,208)]/20">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(0,131,208)]/20 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: 'rgb(0,131,208)' }}>F</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Food Credit</p>
                    <p className="text-xs text-gray-500">Sends ₦15,000 food value</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-4 bg-[rgb(0,131,208)]/30" />
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(0,131,208)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: 'rgb(0,131,208)' }}>QR</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Vendor Redemption</p>
                    <p className="text-xs text-gray-500">Student scans QR at vendor</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-4 bg-[rgb(0,131,208)]/30" />
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(0,131,208)]/10 flex items-center justify-center">
                    <span className="text-sm">🍽</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Physical Food</p>
                    <p className="text-xs text-gray-500">Fresh meal delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;