import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Vendors', href: '#vendors' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="nexr-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'Orbitron' }}>
            Next
            <span className="ml-0.5 inline-block align-middle bg-white text-black px-2 py-0.5 transition-colors duration-500 group-hover:text-[#0083D0]">
              plate
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#BFBFBF] hover:text-white transition-colors duration-300 link-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.nekstpei.com/#/welcome"
            className="btn-primary text-sm"
          >
            Become a Citizen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/[0.06]">
          <div className="nexr-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#BFBFBF] hover:text-white hover:bg-white/[0.03] transition-all px-4 py-3 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.nekstpei.com/#/welcome"
              className="btn-primary text-sm text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Become a Citizen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
