import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';

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
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
