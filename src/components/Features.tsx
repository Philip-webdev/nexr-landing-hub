import { ShoppingCart, MessageCircle, Truck, Zap, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/2348139305671';

const features = [
  {
    icon: <ShoppingCart size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Smart Grocery Budgets',
    description: 'Set your weekly food budget. We find the cheapest, freshest options near you — no more overspending on basics.',
    link: '#',
  },
  {
    icon: <MessageCircle size={24} style={{ color: '#25D366' }} />,
    title: 'Quick Shop via WhatsApp',
    description: 'Send your grocery list on WhatsApp and we\'ll handle the rest. Fast, personal, zero app downloads required.',
    link: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: <Zap size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Real-Time Price Tracking',
    description: 'Watch prices drop across verified vendors. No hidden markups, no surprises — just honest pricing you can trust.',
    link: '#',
  },
  {
    icon: <Truck size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Campus Proxy Delivery',
    description: 'From market to your hostel door. Peer-powered delivery network built for students who can\'t leave lecture.',
    link: '#',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            Built for how you actually shop
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            No fluff. No hidden fees. Just the tools students and families need to eat well without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              data-reveal
              className={`stagger-${i + 1} glass-card p-7 group card-magnetic flex flex-col`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-[rgba(0,131,208,0.2)] transition-colors duration-500">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                {feature.description}
              </p>

              <a
                href={feature.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
                style={{ color: feature.external ? '#25D366' : 'rgb(0,131,208)' }}
                {...(feature.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {feature.external ? 'Chat now' : 'Learn more'}
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
