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
              Send food,<br />
              <span style={{ color: 'rgb(0,131,208)' }}>not just money.</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join the first campus pilot — as a student, a sponsoring parent, a food merchant,
              or an institution running a food-support program.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.nekstpei.com/#/welcome"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-3.5 group"
              >
                Get early access
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/2348139305671"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center text-base px-8 py-3.5"
              >
                Partner with us
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-6">
              Food value, made digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
