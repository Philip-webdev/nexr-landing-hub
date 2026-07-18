import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="nexr-container">
        <div
          data-reveal="scale"
          className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,131,208,0.08),transparent_60%)]" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 text-balance leading-tight">
              Stop overpaying.<br />
              <span style={{ color: 'rgb(0,131,208)' }}>Start living.</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of students and families who already save on groceries every week.
              No fees. No stress. Just fair prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.nekstpei.com/#/welcome"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-3.5 group"
              >
                Get started free
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="btn-outline inline-flex items-center justify-center text-base px-8 py-3.5"
              >
                Read the whitepaper
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-6">
              Priced for humans. Built for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
