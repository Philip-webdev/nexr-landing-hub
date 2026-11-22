import { ArrowRight } from 'lucide-react';
import AfricaMap from './AfricaMap';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="particle-grid" />

      {/* Africa — animated neon line-art backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="africa-mask w-[min(760px,92vw)] opacity-40 lg:opacity-50">
          <AfricaMap />
        </div>
      </div>

      {/* Subtle Adinkra-inspired texture, top right */}
      <div className="absolute -top-16 -right-16 w-[420px] h-[420px] adinkra-pattern opacity-[0.04] rotate-12 pointer-events-none" />

      <div className="nexr-container relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <h1 className="space-y-1">
            <span className="hero-line">
              <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                The agentic
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                <span className="brand-text">ecosystem</span> for
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                food vending.
              </span>
            </span>
          </h1>

          <p className="hero-fade text-sm sm:text-base text-[#CCCCCC] max-w-xl mx-auto leading-relaxed" style={{ animationDelay: '0.9s' }}>
            One network of wallets, vendors, and AI agents moving food
            from anyone to a plate, across Africa.
          </p>

          <div className="hero-fade flex flex-row flex-nowrap gap-2.5 sm:gap-3 pt-2 justify-center" style={{ animationDelay: '1.05s' }}>
            <a href="https://app.nekstpei.com/#/welcome" className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap px-5 sm:px-6 text-sm sm:text-[0.95rem]">
              Become a Citizen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://app.nekstpei.com/#/vendor" className="btn-outline flex items-center justify-center whitespace-nowrap px-5 sm:px-6 text-sm sm:text-[0.95rem]">
              Become a vendor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
