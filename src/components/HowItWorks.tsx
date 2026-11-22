import { Wallet, Send, QrCode, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
}

const steps: Step[] = [
  {
    num: '01',
    icon: Wallet,
    title: 'Fund your wallet',
    desc: 'Load food credits to your Nextplate wallet. Start with as little as ₦1,000.',
    accent: '#FFFFFF',
  },
  {
    num: '02',
    icon: Send,
    title: 'Send food value',
    desc: 'Transfer food credits to anyone, students, family, friends. No bank transfer stress.',
    accent: '#FFFFFF',
  },
  {
    num: '03',
    icon: QrCode,
    title: 'Redeem at vendors',
    desc: 'Scan a QR code at verified vendors. Agents route it, the vendor serves it.',
    accent: '#FFFFFF',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Eat well, track easily',
    desc: 'AI-powered budgeting plans the meals. Full transparency on every transaction.',
    accent: '#FFFFFF',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <span className="eyebrow">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-5 text-balance">
            Four steps to <span className="text-white">food freedom</span>
          </h2>
          <p className="text-[#BFBFBF] text-base leading-relaxed">
            From funding to eating, the whole flow is transparent, fast, and built
            for people who want to ensure their loved ones eat well.
          </p>
        </div>

        <div className="relative">
          {/* Connecting flow line */}
          <div className="hidden lg:block absolute top-[76px] left-[12%] right-[12%] h-px bg-gradient-to-r from-[#FFFFFF]/40 via-[#FFFFFF]/30 to-[#FFFFFF]/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  data-reveal
                  className={`stagger-${i + 1} relative p-6 rounded-2xl border border-white/[0.05] bg-[#0A0A0A]/60 backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-500 group`}
                >
                  {/* Step number */}
                  <div
                    className="text-5xl font-bold absolute top-4 right-5 select-none transition-colors duration-500"
                    style={{ color: 'rgba(255,255,255,0.04)', fontFamily: 'Orbitron' }}
                  >
                    {step.num}
                  </div>

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10 transition-shadow duration-500"
                    style={{
                      background: `${step.accent}14`,
                      border: `1px solid ${step.accent}44`,
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    }}
                  >
                    <Icon size={19} style={{ color: step.accent }} />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'Orbitron' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#BFBFBF] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
