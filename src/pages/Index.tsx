import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const VENDORS = [
  { name: 'Campus Cafeterias', image: '/vendor-cafe.jpg', desc: 'Affordable campus meals' },
  { name: 'Local Restaurants', image: '/vendor-restaurant.jpg', desc: 'Quality home cooking' },
  { name: 'Grocery Stores', image: '/vendor-market.jpg', desc: 'Fresh market produce' },
];

const VendorCarousel = () => {
  return (
    <section className="relative pb-12 overflow-hidden" data-reveal>
      <div className="nexr-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Vendor Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted vendors, real food
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Every vendor in our network is selected for quality and affordability. From campus cafeterias to local markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VENDORS.map((vendor) => (
            <div
              key={vendor.name}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-white mb-1">{vendor.name}</h3>
                <p className="text-sm text-gray-300">{vendor.desc}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#06090f] overflow-hidden">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <VendorCarousel />
        <Stats />
        <Features />
        <HowItWorks />
        <About />
        <CTA />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/2348139305671"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        style={{ background: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;