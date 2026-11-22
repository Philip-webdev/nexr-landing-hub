import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div
          data-reveal="scale"
          className="relative rounded-3xl border border-white/[0.07] bg-[#0A0A0A]/70 backdrop-blur-sm overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,255,255,0.14),transparent_60%),radial-gradient(ellipse_at_80%_100%,rgba(23,192,139,0.12),transparent_60%)] pointer-events-none" />
          {/* Adinkra-inspired texture */}
          <div className="absolute inset-0 adinkra-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FFFFFF]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FFFFFF]/10 blur-3xl" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <span className="eyebrow">Join the ecosystem</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-6 mb-5 text-balance leading-tight" style={{ fontFamily: 'Orbitron' }}>
              Send food,<br />
              <span className="text-white">not just money.</span>
            </h2>

            <p className="text-[#BFBFBF] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of families and students who ensure their loved ones
              eat well. No transfer fees. No currency stress. Just food.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://thenextplate.xyz"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-3.5 group"
              >
                Get started with ₦1,000
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/2348139305671"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 text-base px-8 py-3.5"
              >
                <MessageCircle size={16} />
                Talk to us
              </a>
            </div>

            <p className="text-xs text-[#8A8A8A] mt-6">
              The agentic ecosystem for food vending. Built for Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
