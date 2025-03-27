
import React from 'react';
import { DollarSign, Link, BarChart3, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <DollarSign className="text-nexr-teal" size={32} />,
      title: "Stablecoins",
      description: "Our advanced stablecoin infrastructure ensures reliable value preservation backed by multiple asset classes.",
      delay: "animate-fade-in"
    },
    {
      id: 2,
      icon: <BarChart3 className="text-nexr-teal" size={32} />,
      title: "Cryptocurrency",
      description: "Cutting-edge blockchain technology powering next-generation digital assets with enhanced security and scalability.",
      delay: "animate-fade-in-delay-1"
    },
    {
      id: 3,
      icon: <Link className="text-nexr-teal" size={32} />,
      title: "RWA Tokenization",
      description: "Transform real-world assets into tradable digital tokens, creating new investment opportunities with tangible backing.",
      delay: "animate-fade-in-delay-2"
    }
  ];

  return (
    <section id="features" className="section-padding bg-nexr-off-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nexr-light-teal/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-nexr-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className="nexr-container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-nexr-dark-blue/5 mb-4 opacity-0 animate-fade-in">
            <p className="text-sm font-medium text-nexr-dark-blue">Core Technologies</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-nexr-dark-blue mb-6 opacity-0 animate-fade-in-delay-1">
            Bridging Digital Innovation with Real-World Value
          </h2>
          
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in-delay-2">
            Our ecosystem is built on three core pillars that work together to create a more inclusive, 
            stable, and accessible financial future.
          </p>
        </div>
        
        <div className="grid-feature">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-card opacity-0 ${feature.delay}`}>
              <div className="p-3 rounded-xl bg-nexr-teal/10 mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-nexr-dark-blue mb-3">{feature.title}</h3>
              
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <a href="#" className="mt-auto text-nexr-teal font-medium inline-flex items-center gap-2 group">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
