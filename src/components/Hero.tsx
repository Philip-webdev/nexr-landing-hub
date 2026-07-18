import { ArrowRight, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import Nextthree from './threeD';

const slides = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

const Hero = () => {
  const [showModel, setShowModel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const check = () => setShowModel(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Slideshow background */}
      <div className="hero-slideshow">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'hero-slide-active' : ''}`}
          >
            <img src={src} alt="" className="hero-slide-img" />
          </div>
        ))}
      </div>

      {/* Dark overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06090f] via-[#06090f]/85 to-[#06090f]/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-transparent to-[#06090f]/40 z-[1]" />

      {/* Content */}
      <div className="nexr-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-7">
            <div className="space-y-1">
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                  Smarter groceries.
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                  <span style={{ color: 'rgb(0,131,208)' }}>Fairer prices.</span>
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                  Zero stress.
                </span>
              </span>
            </div>

            <p className="hero-fade text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed" style={{ animationDelay: '0.9s' }}>
              Budget-friendly groceries for students, families, and anyone tired of overpaying.
              Transparent, stress-free food security.
            </p>

            <div className="hero-fade flex flex-col sm:flex-row gap-3 pt-2" style={{ animationDelay: '1.05s' }}>
              <a href="https://app.nekstpei.com/#/welcome" className="btn-primary flex items-center justify-center gap-2 group">
                Start saving
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="btn-outline flex items-center justify-center">
                See how it works
              </a>
            </div>

            <div className="hero-fade flex items-center gap-4 pt-4 text-xs text-gray-500" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-1.5">
                <Shield size={13} style={{ color: 'rgb(0,131,208)' }} />
                <span>Trusted by families</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <span>Student-first pricing</span>
            </div>
          </div>

      
          {/* {showModel && (
            <div className="hidden lg:block w-full h-[580px] relative">
              <div className="absolute inset-0">
                <Nextthree />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
