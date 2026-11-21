const LOGOS = [
  { src: '/dangote.jfif', alt: 'Dangote' },
  { src: '/nestle.jfif', alt: 'Nestlé' },
  { src: '/unilever.png', alt: 'Unilever' },
  { src: '/shoprite-removebg-preview.png', alt: 'Shoprite' },
  { src: '/olam.png', alt: 'Olam' },
  { src: '/honeywell.png', alt: 'Honeywell' },
  { src: '/danone.png', alt: 'Danone' },
  { src: '/goldenpenny.jfif', alt: 'Golden Penny' },
  { src: '/justrite-removebg-preview.png', alt: 'Justrite' },
  { src: '/oatly.png', alt: 'Oatly' },
];

const Partners = () => {
  return (
    <section className="relative py-14 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="nexr-container">
        <p
          data-reveal
          className="text-center text-[11px] font-medium tracking-[0.2em] uppercase text-[#8A8A8A] mb-9"
        >
          Powering Africa's food value chain
        </p>

        <div data-reveal="scale" className="partner-fade overflow-hidden">
          <div className="partner-track items-center">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 h-10 w-28 sm:w-32 flex items-center justify-center opacity-40 hover:opacity-90 transition-opacity duration-500 grayscale hover:grayscale-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-9 sm:max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
