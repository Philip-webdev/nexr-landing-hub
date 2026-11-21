import { ArrowRight } from 'lucide-react';
import EcosystemVisual from './EcosystemVisual';
import AfricaMap from './AfricaMap';
import FlagWord from './FlagWord';

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
        <div className="africa-mask w-[min(720px,92vw)] opacity-35 lg:opacity-45 lg:translate-x-[16%]">
          <AfricaMap />
        </div>
      </div>

      {/* Subtle Adinkra-inspired texture, top right */}
      <div className="absolute -top-16 -right-16 w-[420px] h-[420px] adinkra-pattern opacity-[0.04] rotate-12 pointer-events-none" />

      <div className="nexr-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-7 text-center lg:text-left">
            <h1 className="space-y-1">
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                  The agentic
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                  <FlagWord>ecosystem</FlagWord> for
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.08] tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                  food vending.
                </span>
              </span>
            </h1>

            <p className="hero-fade text-sm sm:text-base text-[#CCCCCC] max-w-md mx-auto lg:mx-0 leading-relaxed" style={{ animationDelay: '0.9s' }}>
              One network of wallets, vendors, and AI agents — moving food
              from anyone to a plate, across Africa.
            </p>

            <div className="hero-fade flex flex-row flex-nowrap gap-2.5 sm:gap-3 pt-2 justify-center lg:justify-start" style={{ animationDelay: '1.05s' }}>
              <a href="https://app.nekstpei.com/#/welcome" className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap px-4 sm:px-6 text-sm sm:text-[0.95rem]">
                Get started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://app.nekstpei.com/#/vendor" className="btn-outline flex items-center justify-center whitespace-nowrap px-4 sm:px-6 text-sm sm:text-[0.95rem]">
                Become a vendor
              </a>
            </div>
          </div>

          {/* Right: Live ecosystem visual */}
          <div className="hero-fade flex justify-center lg:justify-end pt-4 lg:pt-0" style={{ animationDelay: '0.7s' }}>
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
