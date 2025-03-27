
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 animated-gradient opacity-100 -z-10"></div>
      <div className="absolute inset-0 circuit-pattern -z-10"></div>
      
      {/* Floating graphics */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-nexr-teal/20 rounded-full filter blur-3xl animate-float opacity-50"></div>
      
      {/* Main content */}
      <div className="nexr-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 opacity-0 animate-fade-in">
              <p className="text-sm font-medium">Revolutionizing Blockchain Technology</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1">
              The Future of <span className="text-gradient">Blockchain Assets</span> is Here
            </h1>
            
            <p className="text-lg md:text-xl opacity-0 animate-fade-in-delay-2">
              NEXR Blockchain is pioneering the bridge between digital assets and real-world value, 
              creating a more accessible and stable financial ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <a href="#contact" className="button-primary flex items-center justify-center gap-2 group">
                Get Started <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="button-outline flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Blockchain visualization */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 opacity-0 animate-fade-in-delay-2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 shadow-2xl overflow-hidden">
                <div className="circuit-pattern absolute inset-0 opacity-20"></div>
                <div className="relative h-full flex flex-col justify-between">
                  {/* Blockchain visualization elements */}
                  <div className="space-y-4">
                    <div className="h-16 rounded-xl bg-white/10 animate-pulse-slow"></div>
                    <div className="h-16 rounded-xl bg-white/10 animate-pulse-slow delay-150"></div>
                    <div className="h-16 rounded-xl bg-white/10 animate-pulse-slow delay-300"></div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="h-24 rounded-xl bg-gradient-to-r from-nexr-teal/40 to-nexr-light-teal/40 p-4">
                      <div className="h-full rounded-lg bg-white/10 flex items-center justify-center">
                        <p className="text-white font-mono text-sm">NEXR Blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-16 w-32 h-32 bg-nexr-teal/30 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute -bottom-8 left-1/3 w-48 h-48 bg-nexr-light-teal/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
