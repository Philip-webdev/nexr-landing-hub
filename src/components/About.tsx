
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const advantages = [
    "Institutional-grade security protocols",
    "Transparent and audited smart contracts",
    "Interoperability with major blockchain networks",
    "Regulatory-compliant infrastructure",
    "Unparalleled liquidity mechanisms"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-hero text-white bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern -z-0"></div>
      
      <div className="nexr-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 opacity-0 animate-fade-in">
              <p className="text-sm font-medium">Our Mission</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1">
              Bridging the Gap Between Traditional Finance and Web3
            </h2>
            
            <p className="text-lg mb-8 opacity-0 animate-fade-in-delay-2">
              NEXR Blockchain is pioneering the next generation of financial infrastructure, 
              creating a seamless bridge between traditional assets and the digital economy. 
              Our technology enables the transformation of real-world assets into secure, 
              tradable digital tokens while maintaining stability through our advanced stablecoin protocols.
            </p>
            
            <div className="space-y-3 opacity-0 animate-fade-in-delay-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-nexr-teal mt-1 flex-shrink-0" />
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visualization */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in">
            <div className="glass-card p-6 backdrop-blur-lg bg-white/5 border border-white/20">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-nexr-teal/20 to-nexr-blue/20 p-6 relative overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-30"></div>
                
                {/* Visualization elements */}
                <div className="relative h-full flex flex-col justify-center items-center">
                  <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center animate-pulse-slow">
                    <div className="text-center">
                      <h3 className="font-display text-2xl font-bold mb-1">NEXR</h3>
                      <p className="text-sm text-white/70">Blockchain</p>
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                  <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-white/30"></div>
                  <div className="absolute top-0 left-1/2 w-px h-1/3 bg-gradient-to-b from-transparent to-white/30"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-1/3 bg-gradient-to-t from-transparent to-white/30"></div>
                  
                  {/* Corner elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-nexr-light-teal/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-medium">
                    Stable
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-nexr-light-teal/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-medium">
                    Crypto
                  </div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-nexr-light-teal/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-medium text-center">
                    RWA
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-nexr-light-teal/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-medium">
                    Assets
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
