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

          {/* Right: App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Soft glow behind */}
              <div className="absolute -inset-6 bg-[rgb(0,131,208)]/6 rounded-3xl blur-2xl" />

              {/* Browser-style frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex-1 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] text-gray-500 truncate">
                    app.nekstpei.com
                  </div>
                </div>

                {/* Screenshot */}
                <img
                  src="/nextplate.png"
                  alt="Nekstpei App"
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;