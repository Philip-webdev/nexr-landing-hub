import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Ecosystem from '@/components/Ecosystem';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const VENDORS = [
  { name: 'Campus Cafeterias', image: '/vendor-cafe.jpg', desc: 'Affordable campus meals', accent: '#FFFFFF' },
  { name: 'Local Restaurants', image: '/vendor-restaurant.jpg', desc: 'Quality home cooking', accent: '#FFFFFF' },
  { name: 'Grocery Stores', image: '/vendor-market.jpg', desc: 'Fresh market produce', accent: '#FFFFFF' },
];

const VendorCarousel = () => {
  return (
    <section id="vendors" className="relative pb-6 overflow-hidden" data-reveal>
      <div className="nexr-container">
        <div className="text-center mb-12">
          <span className="eyebrow">Vendor network</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            Trusted vendors, <span className="text-white">real food</span>
          </h2>
          <p className="text-[#BFBFBF] text-base max-w-xl mx-auto">
            Every vendor in our network is selected for quality and affordability.
            From campus cafeterias to local markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VENDORS.map((vendor) => (
            <div
              key={vendor.name}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.06] transition-all duration-500 hover:border-transparent"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 2px ${vendor.accent}66` }} />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-8 h-0.5 rounded-full mb-3 transition-all duration-500 group-hover:w-12"
                  style={{ background: `linear-gradient(90deg, ${vendor.accent}, transparent)` }} />
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Orbitron' }}>
                  {vendor.name}
                </h3>
                <p className="text-sm text-[#BFBFBF]">{vendor.desc}</p>
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
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="ambient-bg" />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Stats />
        <Features />
        <Ecosystem />
        <HowItWorks />
        <VendorCarousel />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
