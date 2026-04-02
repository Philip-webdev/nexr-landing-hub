import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   BRAND TOKENS  — single source of truth
   ───────────────────────────────────────────────────────────────── */
const B = {
  cream: "#FFFCF5",
  black: "#000000",
  blue:  "rgb(0,131,208)",
  blueA: (a: number) => `rgba(0,131,208,${a})`,
  sans:  "'Sora', sans-serif",
} as const;

/* ─────────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────────── */
interface CostItem    { title: string; body: string; }
interface GoalItem    { n: string; title: string; body: string; }
interface CounterProps{ to: number; suffix?: string; decimals?: number; }
interface MealPkg     { icon: React.ReactNode; name: string; desc: string; }
interface GiftCard    { from: string; fFlag: string; to: string; tFlag: string; campus: string; meal: string; msg: string; }
interface FlowStep    { icon: React.ReactNode; label: string; detail: string; }

/* ─────────────────────────────────────────────────────────────────
   HOOKS
   ───────────────────────────────────────────────────────────────── */
function useWinW(): number {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

function useInView(threshold = 0.12): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, v];
}

/* ─────────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────────── */
const fade = (v: boolean, d = 0): React.CSSProperties => ({
  opacity:    v ? 1 : 0,
  transform:  v ? "translateY(0)" : "translateY(28px)",
  transition: `opacity .8s ${d}s cubic-bezier(.16,1,.3,1), transform .8s ${d}s cubic-bezier(.16,1,.3,1)`,
});

const Eye = ({ n, light = false }: { n: string; light?: boolean }) => (
  <p style={{ fontFamily: B.sans, fontSize: ".65rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: B.blue, marginBottom: ".5rem", opacity: light ? .85 : 1 }}>{n}</p>
);

function Counter({ to, suffix = "", decimals = 0 }: CounterProps) {
  const [val, setVal] = useState(0);
  const [ref, v] = useInView(.4);
  useEffect(() => {
    if (!v) return;
    const steps = 108; let i = 0;
    const id = setInterval(() => {
      i++;
      setVal(parseFloat((to * i / steps).toFixed(decimals)));
      if (i >= steps) { setVal(to); clearInterval(id); }
    }, 1800 / steps);
    return () => clearInterval(id);
  }, [v, to, decimals]);
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

/* ─────────────────────────────────────────────────────────────────
   GLOBAL CSS
   ───────────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { overflow-x: hidden; }

    @keyframes pulse-ring {
      from { transform: translate(-50%,-50%) scale(1);    opacity: 1;  }
      to   { transform: translate(-50%,-50%) scale(1.05); opacity: .5; }
    }
    @keyframes drip {
      0%,100% { opacity: .3; transform: scaleY(1);   }
      50%     { opacity: 1;  transform: scaleY(1.15); }
    }
    @keyframes ping {
      0%   { transform: scale(1);   opacity: 1; }
      100% { transform: scale(2.4); opacity: 0; }
    }
    @keyframes dot-pulse {
      0%,100% { box-shadow: 0 0 0 0   rgba(0,131,208,.5); }
      50%     { box-shadow: 0 0 0 8px rgba(0,131,208,0);  }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    /* layout */
    .sp  { padding: 7rem 2rem; }
    .hp  { padding: 6rem 2rem; }
    .inn { max-width: 1100px; margin: 0 auto; }

    /* diaspora gift grid */
    .gift-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }

    /* meal packages */
    .pkg-grid  { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }

    /* 4-step flow */
    .flow-grid { display: grid; grid-template-columns: repeat(4,1fr); position: relative; }
    .flow-grid::before {
      content: ''; position: absolute;
      top: 27px; left: 10%; right: 10%; height: 2px;
      background: linear-gradient(90deg, rgb(0,131,208), rgba(0,131,208,.1));
      z-index: 0;
    }

    /* goals */
    .goals-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }

    /* vision split */
    .vis-split { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: end; margin-bottom: 5rem; }

    /* pkg hover */
    .pkg-card { transition: border-color .3s, background .3s; cursor: default; }
    .pkg-card:hover { border-color: rgba(0,131,208,.4) !important; background: rgba(0,131,208,.06) !important; }

    /* flip card preserve */
    .flip-scene  { perspective: 1000px; cursor: pointer; }
    .flip-inner  { position: relative; transform-style: preserve-3d; transition: transform .65s cubic-bezier(.16,1,.3,1); }
    .flip-front,
    .flip-back   { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 20px; }
    .flip-back   { transform: rotateY(180deg); }
    .flipped     { transform: rotateY(180deg); }

    /* responsive */
    @media (max-width: 900px) {
      .gift-grid { grid-template-columns: 1fr; }
      .pkg-grid  { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 768px) {
      .sp  { padding: 4rem 1.25rem; }
      .hp  { padding: 4rem 1.25rem; }
      .flow-grid { grid-template-columns: 1fr 1fr; }
      .flow-grid::before { display: none; }
      .goals-grid { grid-template-columns: 1fr; }
      .vis-split  { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem; }
      .amb-ring   { display: none; }
    }
    @media (max-width: 480px) {
      .pkg-grid  { grid-template-columns: 1fr; }
      .flow-grid { grid-template-columns: 1fr; }
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════
   CH 1  OPENING
═══════════════════════════════════════════════════════════════════ */
function ChapterOpening() {
  const [ref, v] = useInView(.05);
  const mob = useWinW() < 768;
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="hp"
      style={{ background: B.black, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>

      {[320, 520, 720].map((s, i) => (
        <div key={i} className="amb-ring" style={{ position: "absolute", left: "50%", top: "50%", width: s, height: s, borderRadius: "50%", border: `1px solid ${B.blueA(.07 - i * .015)}`, animation: `pulse-ring ${4 + i}s ease-in-out infinite alternate` }} />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 820, width: "100%" }}>
        {/* brand pill */}
        <div style={{ ...fade(v, 0), display: "inline-flex", alignItems: "center", gap: ".5rem", background: B.blueA(.1), border: `1px solid ${B.blueA(.2)}`, borderRadius: 999, padding: ".35rem 1rem", marginBottom: "2rem" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: B.blue, animation: "dot-pulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: B.sans, fontSize: ".68rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: B.blue }}>nekstpei</span>
        </div>

        <h1 style={{ ...fade(v, .1), fontFamily: B.sans, fontWeight: 900, fontSize: mob ? "clamp(2.4rem,11vw,3.5rem)" : "clamp(3rem,9vw,6.5rem)", lineHeight: 1.02, letterSpacing: "-.03em", color: "#fff", marginBottom: "1.5rem" }}>
          The Meal<br /><em style={{ color: B.blue }}>Nobody Talks About</em>
        </h1>

        <div style={{ ...fade(v, .25), width: 40, height: 3, background: `linear-gradient(90deg,${B.black},${B.blue})`, margin: "0 auto 1.5rem" }} />

        <p style={{ ...fade(v, .3), fontFamily: B.sans, fontWeight: 300, fontSize: mob ? "1rem" : "clamp(1rem,2vw,1.25rem)", lineHeight: 1.85, color: "rgba(255,255,255,.6)", maxWidth: 600, margin: "0 auto 3rem", padding: "0 .5rem" }}>
          Across Africa and Europe, millions of university students begin every lecture with the same distraction — not a notification, not a daydream. Hunger.
        </p>

        <div style={{ ...fade(v, .45), display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem" }}>
          <p style={{ fontFamily: B.sans, fontSize: ".68rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.25)" }}>Scroll to explore</p>
          <div style={{ width: 1, height: 48, background: `linear-gradient(${B.blue},transparent)`, animation: "drip 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CH 2  THE NUMBERS
═══════════════════════════════════════════════════════════════════ */
function ChapterNumbers() {
  const [ref, v] = useInView(.1);
  const mob = useWinW() < 768;
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="sp" style={{ background: B.cream, overflow: "hidden" }}>
      <div className="inn">
        <div style={{ ...fade(v, 0), display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ width: 3, height: 48, background: `linear-gradient(${B.black},${B.blue})`, flexShrink: 0 }} />
          <div>
            <Eye n="01" />
            <h2 style={{ fontFamily: B.sans, fontSize: mob ? "1.5rem" : "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-.02em", lineHeight: 1.2 }}>
              The numbers are not abstract.
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(12,1fr)", gap: "1.5rem" }}>
          {/* big stat */}
          <div style={{ ...fade(v, .1), gridColumn: mob ? "1" : "1 / 7", background: B.black, borderRadius: 20, padding: mob ? "2rem 1.5rem" : "2.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: B.blueA(.07) }} />
            <p style={{ fontFamily: B.sans, fontSize: mob ? "clamp(3.5rem,16vw,5rem)" : "clamp(4rem,10vw,6rem)", fontWeight: 900, color: B.blue, lineHeight: 1, marginBottom: "1rem" }}>
              <Counter to={73} suffix="%" />
            </p>
            <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: mob ? ".95rem" : "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 300 }}>
              of African university students skip <strong style={{ color: "#fff", fontWeight: 700 }}>at least one meal</strong> per day during term.
            </p>
          </div>

          {/* right stack */}
          <div style={{ gridColumn: mob ? "1" : "7 / 13", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ ...fade(v, .2), background: "#fff", borderRadius: 20, padding: mob ? "1.5rem" : "2.25rem", border: "1px solid rgba(0,0,0,.06)", boxShadow: "0 4px 24px rgba(0,0,0,.04)" }}>
              <p style={{ fontFamily: B.sans, fontSize: mob ? "2.5rem" : "clamp(2.5rem,6vw,3.5rem)", fontWeight: 900, color: B.blue, lineHeight: 1, marginBottom: ".6rem" }}>
                <Counter to={36} suffix="%" />
              </p>
              <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: ".95rem", lineHeight: 1.65, color: "#555" }}>of European students report food insecurity during term time.</p>
            </div>
            <div style={{ ...fade(v, .3), background: B.blue, borderRadius: 20, padding: mob ? "1.5rem" : "2.25rem" }}>
              <p style={{ fontFamily: B.sans, fontSize: mob ? "2rem" : "clamp(2rem,5vw,3rem)", fontWeight: 900, color: B.black, lineHeight: 1, marginBottom: ".6rem" }}>1 in 3</p>
              <p style={{ fontFamily: B.sans, fontWeight: 700, fontSize: ".95rem", lineHeight: 1.65, color: B.black }}>
                Nigerian students has gone a full day without eating this semester. Not a statistic — someone in your hall.
              </p>
            </div>
          </div>

          {/* quote strip */}
          <div style={{ ...fade(v, .35), gridColumn: "1 / -1", background: B.black, borderRadius: 20, padding: mob ? "1.75rem 1.5rem" : "2.5rem 3rem", display: "flex", alignItems: "flex-start", gap: "1.5rem", borderLeft: `6px solid ${B.blue}` }}>
            <div style={{ fontSize: mob ? "2.5rem" : "3rem", lineHeight: 1, color: B.blue, fontFamily: B.sans, flexShrink: 0 }}>"</div>
            <div>
              <p style={{ fontFamily: B.sans, fontSize: mob ? "1rem" : "clamp(1.1rem,2.5vw,1.5rem)", fontStyle: "italic", color: "#fff", lineHeight: 1.5, marginBottom: ".75rem" }}>
                Food insecurity among students is not a lifestyle problem. It is a structural failure — of funding, of policy, of imagination.
              </p>
              <p style={{ fontFamily: B.sans, fontSize: ".8rem", color: "rgba(255,255,255,.45)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                — World Food Programme Campus Report, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CH 3  THE INVISIBLE COST
═══════════════════════════════════════════════════════════════════ */
const COSTS: CostItem[] = [
  { title: "Academic performance drops 22%",            body: "Students eating fewer than two meals a day score, on average, 22 percentage points lower on assessments. Hunger is a cognitive tax." },
  { title: "Concentration window: 47 minutes",          body: "The average fasted student can focus for under an hour before cognitive fatigue sets in. A typical lecture is 90 minutes." },
  { title: "1 in 5 considers dropping out",             body: "Not because of the coursework — because they cannot afford both rent and food. Food insecurity is the silent dropout driver." },
  { title: "Night-time eating is survival, not choice", body: "Many students eat only after 9 pm — when off-campus food is cheaper. Sleep is sacrificed. The cycle deepens." },
];
const COST_QUOTES = [
  '"I sat through a three-hour exam having eaten a packet of biscuits the day before. I passed. Barely." — Emeka, UNN Year 3',
  '"My flatmates thought I was on a diet. I was just broke." — Sofia, UCL postgrad',
  '"I was averaging a first. Then I started skipping meals. Now I\'m just passing." — Ayo, UNILAG',
  '"I ace morning classes. Evening ones I barely remember." — Tendai, Makerere',
];

function ChapterCost() {
  const [ref, v] = useInView(.1);
  const mob = useWinW() < 768;
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="sp" style={{ background: B.cream }}>
      <div className="inn">
        <div style={{ ...fade(v, 0), maxWidth: 640, marginBottom: mob ? "3rem" : "5rem" }}>
          <Eye n="02" />
          <h2 style={{ fontFamily: B.sans, fontSize: mob ? "1.8rem" : "clamp(1.8rem,5vw,3.2rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-.02em", lineHeight: 1.1, marginBottom: "1rem" }}>
            Hunger doesn't announce itself.<br /><em style={{ color: B.blue }}>It just shows up in your grades.</em>
          </h2>
          <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.8 }}>
            The downstream effects of campus food insecurity are measurable, documented — and almost entirely ignored by institutional policy.
          </p>
        </div>

        {COSTS.map((item, i) => (
          <div key={i} style={{ ...fade(v, .1 + i * .1), padding: mob ? "1.75rem 0" : "2.5rem 0", borderBottom: i < COSTS.length - 1 ? "1px solid rgba(0,0,0,.06)" : "none" }}>
            {mob ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ fontFamily: B.sans, fontSize: "1.2rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: ".95rem", color: "#666", lineHeight: 1.75 }}>{item.body}</p>
                <div style={{ background: i % 2 === 0 ? B.black : "#fff", border: i % 2 !== 0 ? "1px solid rgba(0,0,0,.07)" : "none", borderRadius: 16, padding: "1.25rem" }}>
                  <p style={{ fontFamily: B.sans, fontStyle: "italic", fontSize: ".9rem", lineHeight: 1.6, color: i % 2 === 0 ? "rgba(255,255,255,.65)" : "#555" }}>{COST_QUOTES[i]}</p>
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <h3 style={{ fontFamily: B.sans, fontSize: "clamp(1.2rem,3vw,1.6rem)", fontWeight: 800, color: "#1A1A1A", marginBottom: ".6rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: ".97rem", color: "#666", lineHeight: 1.75 }}>{item.body}</p>
                </div>
                <div style={{ order: i % 2 === 0 ? 2 : 1, background: i % 2 === 0 ? B.black : "#fff", border: i % 2 !== 0 ? "1px solid rgba(0,0,0,.07)" : "none", borderRadius: 16, padding: "1.75rem" }}>
                  <p style={{ fontFamily: B.sans, fontStyle: "italic", fontSize: "clamp(.9rem,2vw,1.05rem)", lineHeight: 1.65, color: i % 2 === 0 ? "rgba(255,255,255,.65)" : "#555" }}>{COST_QUOTES[i]}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CH 4  DIASPORA MEAL GIFTING  ← completely rewritten
   Story: select a food package → send it like a gift card
          → nekstpei processes → meal delivered on campus
═══════════════════════════════════════════════════════════════════ */

/* ── Step SVG icons — 22px, stroke-based, currentColor ── */
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18"/>
    <circle cx="19" cy="6" r="3" fill="currentColor" stroke="none" opacity=".25"/>
  </svg>
);
const IconGift = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="14" rx="2"/>
    <path d="M12 8V22"/>
    <path d="M3 13h18"/>
    <path d="M8 8c0-2.2 1.8-4 4-4"/>
    <path d="M16 8c0-2.2-1.8-4-4-4"/>
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconTruck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 5v4h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

/* ── Meal package icons — 22px, slightly filled style ── */
const IconSun = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <rect x="7" y="13" width="3" height="3" rx=".5" fill="currentColor" stroke="none"/>
    <rect x="14" y="13" width="3" height="3" rx=".5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="12" y1="6" x2="16" y2="6"/>
    <line x1="12" y1="10" x2="16" y2="10"/>
  </svg>
);
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const FLOW_STEPS: FlowStep[] = [
  { icon: <IconMenu />,  label: "Select a meal package",   detail: "Browse curated, vendor-verified meal packages — daily plans, weekly nourish packs, study-season bundles — all priced in local campus currency." },
  { icon: <IconGift />,  label: "Send it like a gift card", detail: "Choose your recipient, write a personal message and send. No bank transfer, no currency headache — nekstpei bridges the gap for you." },
  { icon: <IconZap />,   label: "nekstpei processes it",   detail: "We coordinate directly with the verified campus vendor. The meal is confirmed, freshly prepared and queued for delivery — zero middlemen." },
  { icon: <IconTruck />, label: "Meal delivered on campus", detail: "Your person gets a notification, picks up or receives their meal at the hall. You get a delivery confirmation. They ate today — because of you." },
];

const MEAL_PKGS: MealPkg[] = [
  { icon: <IconSun />,      name: "Daily Essentials",   desc: "3 balanced meals for the day"     },
  { icon: <IconCalendar />, name: "Weekly Nourish",     desc: "7 days of nutritious campus meals"  },
  { icon: <IconBook />,     name: "Study Fuel Pack",    desc: "5 protein-rich focus meals"  },
  { icon: <IconHeart />,    name: "Surprise Meal Gift", desc: "One warm meal, sent with love"  },
];

const GIFT_CARDS: GiftCard[] = [
  { from: "Funmi (Mum)", fFlag: "🇬🇧", to: "Tolu",    tFlag: "🇳🇬", campus: "University of Lagos",   meal: "Weekly Nourish Pack — 7 days",  msg: "I can't cook from London. But I can make sure you eat. Every single day." },
  { from: "Uncle Kofi",  fFlag: "🇺🇸", to: "Ama",     tFlag: "🇬🇭", campus: "KNUST, Kumasi",           meal: "Study Fuel Pack — 5 meals",     msg: "Exam season? I've got your food covered. Now go get that first class." },
  { from: "Wanjiru's Aunt", fFlag: "🇬🇧", to: "Wanjiru", tFlag: "🇰🇪", campus: "University of Nairobi", meal: "Daily Essentials — today",       msg: "Three meals today. That's all I wanted to give you. No fees, no delay." },
];

/* individual flip card */
function FlipGiftCard({ card, v, d }: { card: GiftCard; v: boolean; d: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ ...fade(v, d) }} className="flip-scene" onClick={() => setFlipped(f => !f)}>
      <div className={`flip-inner${flipped ? " flipped" : ""}`} style={{ height: 290 }}>

        {/* ── FRONT ── */}
        <div className="flip-front" style={{
          background: "linear-gradient(135deg,#080808 0%,#101010 60%,#0c1820 100%)",
          border: `1px solid ${B.blueA(.22)}`,
          boxShadow: `0 24px 60px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.03)`,
          padding: "1.75rem",
          overflow: "hidden",
        }}>
          {/* shimmer top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${B.blue},transparent)`, backgroundSize: "200% auto", animation: "shimmer 3.5s linear infinite" }} />

          {/* header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.4rem" }}>
            <div>
              <p style={{ fontFamily: B.sans, fontSize: ".58rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: B.blue, marginBottom: ".25rem" }}>nekstpei meal gift</p>
              <p style={{ fontFamily: B.sans, fontWeight: 700, fontSize: ".92rem", color: "#fff", lineHeight: 1.3 }}>{card.meal}</p>
            </div>
            <div style={{ background: B.blueA(.12), borderRadius: 8, padding: ".55rem", display: "flex", alignItems: "center", justifyContent: "center", color: B.blue }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="14" rx="2"/>
                <path d="M12 8V22"/><path d="M3 13h18"/>
                <path d="M8 8c0-2.2 1.8-4 4-4"/><path d="M16 8c0-2.2-1.8-4-4-4"/>
              </svg>
            </div>
          </div>

          {/* route arrow */}
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: "1.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".35rem" }}>
              <span style={{ fontSize: "1rem" }}>{card.fFlag}</span>
              <span style={{ fontFamily: B.sans, fontSize: ".78rem", fontWeight: 600, color: "rgba(255,255,255,.65)" }}>{card.from}</span>
            </div>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${B.blueA(.6)},${B.blueA(.1)})`, position: "relative" }}>
              <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: 5, height: 5, borderRadius: "50%", background: B.blue }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".35rem" }}>
              <span style={{ fontFamily: B.sans, fontSize: ".78rem", fontWeight: 600, color: "rgba(255,255,255,.65)" }}>{card.to}</span>
              <span style={{ fontSize: "1rem" }}>{card.tFlag}</span>
            </div>
          </div>

          {/* campus */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "1rem" }}>
            <p style={{ fontFamily: B.sans, fontSize: ".62rem", color: "rgba(255,255,255,.28)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".2rem" }}>Delivered to</p>
            <p style={{ fontFamily: B.sans, fontSize: ".85rem", fontWeight: 600, color: "rgba(255,255,255,.62)" }}>{card.campus}</p>
          </div>

          <p style={{ position: "absolute", bottom: ".85rem", right: "1.1rem", fontFamily: B.sans, fontSize: ".56rem", color: "rgba(255,255,255,.16)", letterSpacing: ".08em" }}>TAP TO READ MESSAGE</p>
        </div>

        {/* ── BACK ── */}
        <div className="flip-back" style={{ background: B.blue, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontFamily: B.sans, fontSize: "2.5rem", color: "rgba(0,0,0,.18)", lineHeight: 1, marginBottom: ".6rem" }}>"</p>
          <p style={{ fontFamily: B.sans, fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: B.black, lineHeight: 1.75, marginBottom: "1.5rem" }}>{card.msg}</p>
          <p style={{ fontFamily: B.sans, fontSize: ".72rem", fontWeight: 700, color: "rgba(0,0,0,.45)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {card.from} {card.fFlag}</p>
          <p style={{ position: "absolute", bottom: ".85rem", right: "1.1rem", fontFamily: B.sans, fontSize: ".56rem", color: "rgba(0,0,0,.25)", letterSpacing: ".08em" }}>TAP TO FLIP BACK</p>
        </div>
      </div>
    </div>
  );
}

function ChapterDiaspora() {
  const [ref, v] = useInView(.06);
  const [activeStep, setStep] = useState(0);
  const mob = useWinW() < 768;

  // auto-cycle steps while in view
  useEffect(() => {
    if (!v) return;
    const id = setInterval(() => setStep(s => (s + 1) % FLOW_STEPS.length), 2800);
    return () => clearInterval(id);
  }, [v]);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="sp"
      style={{ background: "linear-gradient(160deg,#000 0%,#060c14 100%)", overflow: "hidden" }}>
      <div className="inn">

        {/* ── SECTION HEADER ── */}
        <div style={{ ...fade(v, 0), maxWidth: 700, marginBottom: mob ? "3rem" : "5rem" }}>
          <Eye n="03 — The Gift That Feeds" light />
          <h2 style={{ fontFamily: B.sans, fontWeight: 900, fontSize: mob ? "2rem" : "clamp(2rem,5vw,3.5rem)", color: "#fff", letterSpacing: "-.03em", lineHeight: 1.05, marginBottom: "1.2rem" }}>
            Your mum would cook<br />if she could.<br /><em style={{ color: B.blue }}>Now she can.</em>
          </h2>
          <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: mob ? ".95rem" : "1.05rem", color: "rgba(255,255,255,.5)", lineHeight: 1.85, maxWidth: 580 }}>
            A parent in London. A student in Lagos. nekstpei lets anyone send not money — but an actual meal, to an actual campus, on an actual day. No transfer stress. No guessing if it arrived. Just food.
          </p>
        </div>

        {/* ── STEP FLOW ── */}
        <div style={{ ...fade(v, .1), marginBottom: mob ? "3.5rem" : "5rem" }}>
          <p style={{ fontFamily: B.sans, fontSize: ".62rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.22)", marginBottom: "1.5rem" }}>
            How the gift works
          </p>

          <div className="flow-grid">
            {FLOW_STEPS.map((s, i) => (
              <div key={i} onClick={() => setStep(i)}
                style={{ position: "relative", zIndex: 1, padding: mob ? "0 .6rem 2rem" : "0 1.5rem 2rem", cursor: "pointer", textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.2rem",
                  color: activeStep === i ? "#fff" : B.blue,
                  background: activeStep === i ? B.blue : B.blueA(.04),
                  border: `2px solid ${activeStep === i ? B.blue : B.blueA(.08)}`,
                  boxShadow: activeStep === i ? `0 0 0 6px ${B.blueA(.15)}` : "none",
                  transition: "all .4s", position: "relative",
                }}>
                  {s.icon}
                  {activeStep === i && (
                    <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: `2px solid ${B.blue}`, animation: "ping 1.6s ease-out infinite", opacity: .4 }} />
                  )}
                </div>
                <p style={{ fontFamily: B.sans, fontSize: mob ? ".75rem" : ".82rem", fontWeight: 700, color: activeStep === i ? "#fff" : "rgba(255,255,255,.32)", transition: "color .3s", lineHeight: 1.35 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* detail panel */}
          <div style={{ background: B.blueA(.07), border: `1px solid ${B.blueA(.18)}`, borderRadius: 16, padding: mob ? "1.2rem" : "1.5rem 2.25rem", marginTop: ".5rem" }}>
            <p style={{ fontFamily: B.sans, fontSize: mob ? ".88rem" : "1rem", fontWeight: 300, color: "rgba(255,255,255,.65)", lineHeight: 1.75, textAlign: "center" }}>
              <span style={{ color: B.blue, fontWeight: 700 }}>Step {activeStep + 1}: </span>
              {FLOW_STEPS[activeStep].detail}
            </p>
          </div>
        </div>

     
        {/* <div style={{ ...fade(v, .15), marginBottom: mob ? "3.5rem" : "5rem" }}>
          <p style={{ fontFamily: B.sans, fontSize: ".62rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.22)", marginBottom: "1.5rem" }}>
            Available gift packages
          </p>
          <div className="pkg-grid">
            {MEAL_PKGS.map((pkg, i) => (
              <div key={i} className="pkg-card"
                style={{ background: B.blueA(.03), border: `1px solid rgba(255,255,255,.07)`, borderRadius: 16, padding: mob ? "1.25rem" : "1.5rem", position: "relative", overflow: "hidden" }}>
             
                <div style={{ position: "absolute", top: ".75rem", right: ".75rem", background: B.blueA(.18), borderRadius: 999, padding: ".18rem .55rem" }}>
                  <span style={{ fontFamily: B.sans, fontSize: ".56rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: B.blue }}></span>
                </div>
                <div style={{ color: B.blue, marginBottom: ".85rem", display: "flex" }}>{pkg.icon}</div>
                <p style={{ fontFamily: B.sans, fontWeight: 800, fontSize: ".9rem", color: "#fff", marginBottom: ".3rem" }}>{pkg.name}</p>
                <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: ".78rem", color: "rgba(255,255,255,.4)", lineHeight: 1.5, marginBottom: "1rem" }}>{pkg.desc}</p>
                <p style={{ fontFamily: B.sans, fontWeight: 900, fontSize: "1.15rem", color: B.blue }}></p>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── FLIP GIFT CARDS ── */}
        <div style={{ ...fade(v, .2) }}>
          <p style={{ fontFamily: B.sans, fontSize: ".62rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.22)", marginBottom: ".4rem" }}>
            Real stories, real meals
          </p>
          <p style={{ fontFamily: B.sans, fontSize: mob ? ".82rem" : ".88rem", fontWeight: 300, color: "rgba(255,255,255,.28)", marginBottom: "1.75rem" }}>
            Tap a card to read the message behind it
          </p>
          <div className="gift-grid">
            {GIFT_CARDS.map((c, i) => (
              <FlipGiftCard key={i} card={c} v={v} d={.25 + i * .1} />
            ))}
          </div>
        </div>

        {/* ── PULL CLOSER ── */}
        <div style={{ ...fade(v, .5), textAlign: "center", marginTop: mob ? "3rem" : "4.5rem", paddingTop: mob ? "2rem" : "3rem", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <p style={{ fontFamily: B.sans, fontSize: mob ? "1rem" : "clamp(1.15rem,2.5vw,1.55rem)", fontStyle: "italic", color: "rgba(255,255,255,.48)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 1.5rem" }}>
            Not a money transfer. Not a voucher. A meal — chosen, confirmed, and delivered.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", background: B.blueA(.1), border: `1px solid ${B.blueA(.2)}`, borderRadius: 999, padding: ".5rem 1.25rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: B.blue, animation: "dot-pulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: B.sans, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: B.blue }}>
              Zero transfer fees on all meal gifts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CH 5  VISION
═══════════════════════════════════════════════════════════════════ */
const GOALS: GoalItem[] = [
  { n: "01", title: "End student hunger by 2030",   body: "Target every campus in sub-Saharan Africa and Europe with affordable, accessible nutrition infrastructure." },
  { n: "02", title: "Zero-fee meal gifting",         body: "Families send meal packages, not money. No fees, no delays, no currency anxiety. Just food on the table." },
  { n: "03", title: "Community-owned food systems",  body: "Students pool orders, buy in bulk, and share surplus — driving prices down and quality up across every campus." },
];

function ChapterVision() {
  const [ref, v] = useInView(.1);
  const mob = useWinW() < 768;
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="sp" style={{ background: B.cream }}>
      <div className="inn">
        <div className="vis-split" style={{ ...fade(v, 0) }}>
          <div>
            <Eye n="The Way Forward" />
            <h2 style={{ fontFamily: B.sans, fontSize: mob ? "2rem" : "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-.03em", lineHeight: 1.08 }}>
              Zero Hunger<br />is not a tagline.<br /><em style={{ color: B.blue }}>It's a deadline.</em>
            </h2>
          </div>
          <div>
            <div style={{ width: 3, height: 60, background: `linear-gradient(${B.black},${B.blue})`, marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.85, marginBottom: "1rem" }}>
              UN SDG Goal 2 calls for Zero Hunger by 2030. Governments are behind. NGOs are stretched. The infrastructure has to come from the ground up — from campuses, families, and technology built specifically for this problem.
            </p>
            <p style={{ fontFamily: B.sans, fontWeight: 700, fontSize: "1rem", color: "#1A1A1A", lineHeight: 1.7 }}>
              That is what <span style={{ color: B.blue }}>nekstpei</span> is built to do.
            </p>
          </div>
        </div>

        <div className="goals-grid">
          {GOALS.map((g, i) => (
            <div key={i} style={{ ...fade(v, .1 + i * .1), background: i === 0 ? B.black : "#fff", border: i !== 0 ? "1px solid rgba(0,0,0,.07)" : "none", borderRadius: 20, padding: mob ? "1.5rem" : "2rem", boxShadow: i !== 0 ? "0 4px 20px rgba(0,0,0,.04)" : "none" }}>
              <p style={{ fontFamily: B.sans, fontSize: ".65rem", fontWeight: 900, letterSpacing: ".12em", color: B.blue, marginBottom: "1rem" }}>{g.n}</p>
              <h3 style={{ fontFamily: B.sans, fontSize: "1.15rem", fontWeight: 800, color: i === 0 ? "#fff" : "#1A1A1A", marginBottom: ".6rem", lineHeight: 1.25 }}>{g.title}</h3>
              <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: ".88rem", color: i === 0 ? "rgba(255,255,255,.55)" : "#777", lineHeight: 1.7 }}>{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════════ */
const CampusHungerStory: React.FC = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700;800;900&display=swap" rel="stylesheet" />
    <GlobalStyles />
    <div style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      <ChapterOpening />
      <ChapterNumbers />
      <ChapterCost />
      <ChapterDiaspora />
      <ChapterVision />
    </div>
  </>
);

export default CampusHungerStory;