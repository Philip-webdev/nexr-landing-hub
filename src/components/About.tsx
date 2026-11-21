import { Shield, Zap, Wallet, Eye, Utensils, QrCode } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
}

const pillars: Pillar[] = [
  {
    icon: Shield,
    title: 'Transparent food value',
    text: 'Every food credit is tracked. You see exactly where your money goes — from wallet to vendor to meal.',
    accent: '#FFFFFF',
  },
  {
    icon: Zap,
    title: 'Agentic by default',
    text: 'Agents handle routing, pricing, and reconciliation in the background — the ecosystem works even when you sleep.',
    accent: '#FFFFFF',
  },
  {
    icon: Eye,
    title: 'Parental visibility',
    text: 'Parents send food credits and see exactly what their children eat — on campus or across the globe.',
    accent: '#FFFFFF',
  },
  {
    icon: Wallet,
    title: 'Institutional programs',
    text: 'Universities, employers, and NGOs manage food-support programs with transparent reporting.',
    accent: '#FFFFFF',
  },
];

const FLOW = [
  { icon: '₦', title: 'Money', sub: 'Parent loads ₦20,000', accent: '#BFBFBF' },
  { icon: <Utensils size={18} />, title: 'Food Credit', sub: 'Sends ₦15,000 food value', accent: '#FFFFFF' },
  { icon: <QrCode size={18} />, title: 'Vendor Redemption', sub: 'Student scans QR at vendor', accent: '#FFFFFF' },
  { icon: '🍽', title: 'Physical Food', sub: 'Fresh meal delivered', accent: '#FFFFFF' },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div data-reveal>
            <span className="eyebrow">Why we exist</span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-5 leading-tight text-balance">
              A digital food-value layer{' '}
              <span className="text-white">for Africa</span>
            </h2>

            <p className="text-[#BFBFBF] text-base leading-relaxed mb-10 max-w-lg">
              Money is easy to transfer, but senders often cannot ensure that funds
              intended for food are used for food. Nextplate builds the agentic
              layer between money and physical food — designed in Africa, for
              Africa's scale.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="flex items-start gap-4" data-reveal>
                    <div
                      className={`stagger-${i + 1} flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center`}
                      style={{ background: `${pillar.accent}14`, border: `1px solid ${pillar.accent}33` }}
                    >
                      <Icon size={19} style={{ color: pillar.accent }} />
                    </div>
                    <div className={`stagger-${i + 1}`}>
                      <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'Orbitron' }}>
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-[#BFBFBF] leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Flow diagram */}
          <div data-reveal="right" className="relative">
            <div className="absolute -inset-6 adinkra-pattern opacity-[0.04] pointer-events-none rotate-6" />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0A0A0A]/70 backdrop-blur-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8A8A8A]">
                  The value flow
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#FFFFFF] bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 px-2.5 py-1 rounded-none">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#FFFFFF] animate-pulse" />
                  Live
                </span>
              </div>

              <div className="space-y-4">
                {FLOW.map((row, i) => (
                  <div key={i}>
                    <div
                      className="flex items-center gap-3 p-4 rounded-xl border transition-colors duration-500"
                      style={{
                        background: i === 1 ? `${row.accent}0D` : 'rgba(255,255,255,0.025)',
                        borderColor: i === 1 ? `${row.accent}33` : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: `${row.accent}18`, color: row.accent, border: `1px solid ${row.accent}33` }}
                      >
                        {row.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{row.title}</p>
                        <p className="text-xs text-[#BFBFBF]">{row.sub}</p>
                      </div>
                    </div>

                    {i < FLOW.length - 1 && <div className="flex justify-center py-1.5">
                      <div className="w-px h-3 bg-gradient-to-b from-[#FFFFFF]/40 to-[#FFFFFF]/40" />
                    </div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
