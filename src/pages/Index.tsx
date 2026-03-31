import React, { useEffect } from 'react';
import '../index.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';
import CampusHungerStory from './Campushungerstory';

const PARTNERS = [
  {name: "Kelogg's", logo: '/download.png'},
  {name: 'Honeywell', logo:'/honeywell.png'},
  {name: 'Goldenpenny', logo:'/goldenpenny.jfif'},
  {name: 'Dufil', logo:'/dufil.jfif'},
  { name: "Unilever",       logo: "/unilever.png" },
    { name: "Danone",       logo: "/danone.png" },
  { name: "Nestle",  logo: "/nestle.jfif" },
  { name: "Oatly",  logo: "/oatly.png" },
  { name: "Clifbar",     logo: "/clifbar.png" },
  { name: "Dangote",          logo: "/dangote.jfif" },
  { name: "Olam",  logo: "olam.png" }
];

const PartnerCarousel = () => {
  // Duplicate for seamless loop
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <div className="w-full overflow-hidden bg-white border-y border-gray-100 py-5">
      <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-4">
        Trusted Partners
      </p>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 items-center"
          style={{
            animation: "scroll-left 22s linear infinite",
            width: "max-content",
          }}
        >
          {logos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center  transition-all duration-300 opacity-60 hover:opacity-100"
              style={{ minWidth: "100px" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-sm font-bold text-gray-500">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Intersection Observer for section animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <PartnerCarousel />
  <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <CampusHungerStory/>
        <Features />

        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
