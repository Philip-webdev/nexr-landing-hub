import '../index.css';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Nextthree from './threeD';

const Hero = () => {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
     
    const checkScreenSize = () => {
      setShowModel(window.innerWidth >= 1024);  
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden" 
      style={{ fontFamily: 'Orbitron' }}
    >
      
      <div className="absolute inset-0 animated-gradient opacity-100 -z-10"></div>
      
      
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-nexr-teal/20 rounded-full filter blur-3xl animate-float opacity-50"></div>
      
      
      <div className="nexr-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 opacity-0 animate-fade-in">
              <p className="text-sm font-medium">Nextgen On Campus</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1">
              The Future of <span className="text-[RGB(0,131,208)]">Transparent Trade</span> is Here
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl opacity-0 animate-fade-in-delay-2">
              nekstpei is creating a block-verse for truthful buyers and sellers for more accessible and stable food security system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <a 
                href="https://app.nekstpei.com" 
                className="button-primary flex items-center justify-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#features" 
                className="button-outline flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
           
          {showModel && (
            <div className="hidden lg:block w-full h-[600px] relative">
              <div className="absolute inset-0">
                <Nextthree />
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;