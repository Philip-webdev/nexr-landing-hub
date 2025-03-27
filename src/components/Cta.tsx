
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section id="contact" className="section-padding bg-nexr-off-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-nexr-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-nexr-light-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className="nexr-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-nexr-teal/10 mb-6 opacity-0 animate-fade-in">
              <p className="text-sm font-medium text-nexr-teal">Join the revolution</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-nexr-dark-blue mb-6 opacity-0 animate-fade-in-delay-1">
              Ready to Transform Your Digital Asset Strategy?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
              Whether you're an institution looking to tokenize assets, a developer building on our platform,
              or an investor seeking stable returns, NEXR Blockchain provides the infrastructure for the future.
            </p>
            
            <form className="max-w-md mx-auto opacity-0 animate-fade-in-delay-3">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexr-teal/50"
                  required
                />
                <button
                  type="submit"
                  className="button-primary flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  Get Early Access <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Join our waitlist to be among the first to access the NEXR platform.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
