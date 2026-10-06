import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#06090f]">
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[rgb(0,131,208)]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[rgb(0,131,208)]/5 rounded-full blur-3xl" />

      <div className="nexr-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-7 text-center lg:text-left">
            <div className="space-y-1">
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                  Send food,
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                  <span style={{ color: 'rgb(0,131,208)' }}>not just money.</span>
                </span>
              </span>
            </div>

            <p className="hero-fade text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ animationDelay: '0.9s' }}>
              Buy food credits, send to anyone, redeem at verified vendors. 
              The smarter way to ensure your loved ones eat well.
            </p>

            <div className="hero-fade flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start" style={{ animationDelay: '1.05s' }}>
              <a href="https://app.nekstpei.com/#/welcome" className="btn-primary flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works" className="btn-outline flex items-center justify-center">
                See how it works
              </a>
            </div>

            <div className="hero-fade flex items-center gap-4 pt-4 text-xs text-gray-500 justify-center lg:justify-start" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-1.5">
                <Shield size={13} style={{ color: 'rgb(0,131,208)' }} />
                <span>Trusted by families</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <span>Student-first pricing</span>
            </div>
          </div>

          {/* Right: iPhone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-10 bg-[rgb(0,131,208)]/6 rounded-full blur-3xl" />

              {/* Phone */}
              <div className="relative w-[290px] sm:w-[310px]">
                {/* Side buttons — natural titanium */}
                <div className="absolute -left-[3px] top-[92px] w-[3px] h-[26px] bg-gradient-to-r from-[#6b6b6b] to-[#3a3a3a] rounded-l-sm" />
                <div className="absolute -left-[3px] top-[134px] w-[3px] h-[54px] bg-gradient-to-r from-[#6b6b6b] to-[#3a3a3a] rounded-l-sm" />
                <div className="absolute -left-[3px] top-[196px] w-[3px] h-[54px] bg-gradient-to-r from-[#6b6b6b] to-[#3a3a3a] rounded-l-sm" />
                <div className="absolute -right-[3px] top-[160px] w-[3px] h-[80px] bg-gradient-to-l from-[#6b6b6b] to-[#3a3a3a] rounded-r-sm" />

                {/* Titanium outer frame */}
                <div className="relative rounded-[54px] p-[3.5px] bg-gradient-to-b from-[#8a8a8a] via-[#4a4a4a] to-[#7a7a7a] shadow-[0_30px_80px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.05)]">
                  {/* Polished edge highlight */}
                  <div className="rounded-[52px] p-[1.5px] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]">
                    {/* Screen */}
                    <div className="relative rounded-[50px] overflow-hidden bg-black">
                      {/* Dynamic Island */}
                      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[104px] h-[32px] bg-black rounded-full z-20 shadow-[inset_0_0_4px_rgba(255,255,255,0.08)] flex items-center justify-end pr-[12px]">
                        <div className="w-[9px] h-[9px] rounded-full bg-[#0d1117] ring-1 ring-[#1a1f2e]" />
                      </div>

                      {/* App screenshot */}
                      <img
                        src="/nextplate.png"
                        alt="Nekstpei App"
                        className="w-full block"
                      />

                      {/* Glass reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-[50px]" />
                    </div>
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

export default Hero;