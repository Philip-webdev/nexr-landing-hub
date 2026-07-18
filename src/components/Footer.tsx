import { Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04] bg-[#06090f]">
      <div className="nexr-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'Sora' }}>
              nekst<span style={{ color: 'rgb(0,131,208)' }}>pei</span>
            </span>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-xs">
              Fair groceries, transparent prices, and food security — for the people who need it most.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://x.com/nekstpei"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-[rgba(0,131,208,0.2)] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-[rgba(0,131,208,0.2)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Smart Budgets', 'Price Tracker', 'Proxy Delivery', 'nekstpei Wallet'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {['Whitepaper', 'Security', 'Roadmap', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Whitepaper', 'Roadmap', 'Blog', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Trilliongrace Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
