import { Wallet, Send, Store, QrCode, Sparkles, Building2, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/2348139305671';

const features = [
  {
    icon: <Wallet size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Food Wallet',
    description: 'Load funds and hold them as food credit. Balances, receipts and full transaction history in one place.',
    link: '#how-it-works',
  },
  {
    icon: <Send size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Food Transfer',
    description: 'Send food value, meal credits or approved food packages to a student, family member or beneficiary instantly.',
    link: '#how-it-works',
  },
  {
    icon: <Store size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Food Marketplace',
    description: 'Discover meals, groceries and verified vendors near you — with live prices, availability and redemption options.',
    link: '#how-it-works',
  },
  {
    icon: <QrCode size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'Vendor Portal',
    description: 'QR redemption, order management, settlement, analytics and promotions built for campus and grocery merchants.',
    link: '#how-it-works',
  },
  {
    icon: <Sparkles size={24} style={{ color: 'rgb(0,131,208)' }} />,
    title: 'AI Food Assistant',
    description: '“I have ₦10,000 for five days — what can I eat?” Budget-aware meal planning based on your balance and location.',
    link: '#how-it-works',
  },
  {
    icon: <Building2 size={24} style={{ color: '#25D366' }} />,
    title: 'Institutional Programs',
    description: 'Schools, employers and NGOs run targeted food-benefit programs with allocation controls and full reporting.',
    link: WHATSAPP_LINK,
    external: true,
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="nexr-container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Product modules</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            A digital layer between money and food
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Money is easy to send — food isn't. Nekstpei makes food value storable, transferable,
            redeemable and verifiable, so support meant for food actually becomes food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              data-reveal
              className={`stagger-${(i % 4) + 1} glass-card p-7 group card-magnetic flex flex-col`}
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
                {feature.external ? 'Talk to us' : 'Learn more'}
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
