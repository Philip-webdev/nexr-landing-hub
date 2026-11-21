import { useEffect, useState, type ReactNode } from 'react';

/**
 * FlagWord — cycles a word's colour through the flags of African nations,
 * one flag at a time ("batch by batch"), cross-fading between each.
 * Each batch paints the word with that country's flag colours.
 */
const FLAGS: { name: string; colors: string[] }[] = [
  { name: 'Nigeria', colors: ['#008751', '#FFFFFF', '#008751'] },
  { name: 'Ghana', colors: ['#CE1126', '#FCD116', '#006B3F'] },
  { name: 'Ethiopia', colors: ['#078930', '#FCDD09', '#DA121A'] },
  { name: 'Kenya', colors: ['#000000', '#BB0000', '#006600'] },
  { name: 'Senegal', colors: ['#00853F', '#FDEF42', '#E31B23'] },
  { name: 'South Africa', colors: ['#E03C31', '#FFB81C', '#007749'] },
  { name: 'Egypt', colors: ['#CE1126', '#FFFFFF', '#000000'] },
  { name: 'Morocco', colors: ['#C1272D', '#006233'] },
];

const gradientOf = (colors: string[]) => `linear-gradient(90deg, ${colors.join(', ')})`;

const FlagWord = ({ children }: { children: ReactNode }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % FLAGS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid flag-word">
      {FLAGS.map((f, i) => (
        <span
          key={f.name}
          aria-hidden={i !== idx}
          className="flag-layer col-start-1 row-start-1"
          style={{
            backgroundImage: gradientOf(f.colors),
            opacity: i === idx ? 1 : 0,
          }}
        >
          {children}
        </span>
      ))}
    </span>
  );
};

export default FlagWord;
