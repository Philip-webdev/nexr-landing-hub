
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
    <section id="about" className="section-padding relative overflow-hidden bg-black text-white">
      {/* Background pattern with transparency */}
      <div className="absolute inset-0 circuit-pattern opacity-10 -z-0"></div>
      
      <div className="nexr-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 opacity-0 animate-fade-in">
              <p className="text-sm font-medium">Our Mission</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1">
              Bridging the Gap Between Traditional Finance and Web3
            </h2>
            
            <p className="text-lg mb-8 opacity-0 animate-fade-in-delay-2">
              NekstPei Blockchain is pioneering the next generation of financial infrastructure, 
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
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in">
            <div className="glass-card p-4 backdrop-blur-lg bg-white/5 border border-white/20">
              <div className="aspect-square rounded-xl bg-black/30 p-2 relative overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-5"></div>
                
                {/* Visualization elements */}
                <div className="relative h-full flex flex-col justify-center items-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-display text-lg font-bold mb-1 text-white">NekstPei</h3>
                      <p className="text-xs text-white/70">Blockchain</p>
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-white/10"></div>
                  <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-white/10"></div>
                  <div className="absolute top-0 left-1/2 w-px h-1/3 bg-gradient-to-b from-transparent to-white/10"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-1/3 bg-gradient-to-t from-transparent to-white/10"></div>
                  
                  {/* Corner elements */}
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium">
                    Stable
                  </div>
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium">
                    Crypto
                  </div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium text-center">
                    RWA
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium">
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
