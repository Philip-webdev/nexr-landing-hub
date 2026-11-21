import { Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <div className="nexr-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 group">
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'Orbitron' }}>
                Next
                <span className="ml-0.5 inline-block align-middle bg-white text-black px-2 py-0.5 transition-colors duration-500 group-hover:text-[#0083D0]">
                  plate
                </span>
              </span>
            </div>
            <p className="text-sm text-[#8A8A8A] mt-4 leading-relaxed max-w-xs">
              Send food, not just money. The agentic ecosystem connecting families,
              students, vendors, and institutions across Africa.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://x.com/nekstpei"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#BFBFBF] hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#BFBFBF] hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron' }}>Ecosystem</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'For Families', href: '#ecosystem' },
                { label: 'For Students', href: '#ecosystem' },
                { label: 'For Vendors', href: '#ecosystem' },
                { label: 'For Institutions', href: '#ecosystem' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron' }}>Product</h4>
            <ul className="space-y-2.5">
              {['Food Wallet', 'Food Transfer', 'Vendor Agents', 'AI Meal Planning', 'Institutional Dashboards'].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron' }}>Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Roadmap', 'Security', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A8A8A]">
            &copy; {new Date().getFullYear()} Nextplate. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-[#8A8A8A] hover:text-[#BFBFBF] transition-colors">Terms</a>
            <a href="#" className="text-xs text-[#8A8A8A] hover:text-[#BFBFBF] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
