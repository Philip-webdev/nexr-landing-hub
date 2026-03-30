import React, { useEffect, useRef, useState } from "react";

/* ── brand tokens ───────────────────────────────────────────────── */
const B = {
  greenDeep: "#0D1F0F",
  greenMid:  "#1A3A14",
  terra:     "#C8602A",
  cream:     "#FFFCF5",
  blue:      "RGB(0,131,208)",
  serif:     "'Playfair Display', Georgia, serif",
  sans:      "'Sora', sans-serif",
} as const;

/* ── types ──────────────────────────────────────────────────────── */
interface CostItem    { title: string; body: string; }
interface DiasporaItem { amount: string; lost: string; pct: string; route: string; story: string; }
interface GoalItem    { n: string; title: string; body: string; }
interface CounterProps { to: number; prefix?: string; suffix?: string; decimals?: number; }

/* ── window width hook ──────────────────────────────────────────── */
function useWindowWidth(): number {
  const [w, setW] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return w;
}

/* ── intersection hook ──────────────────────────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── animated counter ───────────────────────────────────────────── */
function Counter({ to, prefix = "", suffix = "", decimals = 0 }: CounterProps): React.ReactElement {
  const [val, setVal] = useState<number>(0);
  const [ref, inView] = useInView(0.4);
  useEffect(() => {
    if (!inView) return;
    const dur = 1800, fps = 60, steps = dur / (1000 / fps);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVal(parseFloat((to * (i / steps)).toFixed(decimals)));
      if (i >= steps) { setVal(to); clearInterval(id); }
    }, 1000 / fps);
    return () => clearInterval(id);
  }, [inView, to, decimals]);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}

/* ── reveal style ───────────────────────────────────────────────── */
function revealStyle(inView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity:    inView ? 1 : 0,
    transform:  inView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.85s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.85s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
  };
}

/* ══════════════════════════════════════════════════════════════════
   GLOBAL STYLES (injected once)
══════════════════════════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { overflow-x: hidden; }

    @keyframes pulse-ring {
      from { transform: translate(-50%,-50%) scale(1); }
      to   { transform: translate(-50%,-50%) scale(1.04); }
    }
    @keyframes drip {
      0%,100% { opacity:0.3; transform:scaleY(1); }
      50%     { opacity:1;   transform:scaleY(1.2); }
    }
    @keyframes badge-float {
      0%,100% { transform:translateY(0) rotate(-1deg); }
      50%     { transform:translateY(-8px) rotate(-1deg); }
    }

    /* Responsive utility classes */
    .grid-12 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.5rem;
    }
    .col-6  { grid-column: span 6; }
    .col-12 { grid-column: span 12; }

    @media (max-width: 768px) {
      .grid-12 { grid-template-columns: 1fr; gap: 1rem; }
      .col-6, .col-12 { grid-column: span 1; }
    }

    /* Diaspora grid */
    .diaspora-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    @media (max-width: 900px) {
      .diaspora-grid { grid-template-columns: 1fr; }
    }

    /* Goal cards grid */
    .goals-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 768px) {
      .goals-grid { grid-template-columns: 1fr; }
    }

    /* Vision header */
    .vision-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: end;
      margin-bottom: 5rem;
    }
    @media (max-width: 768px) {
      .vision-header {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 3rem;
      }
    }

    /* Cost rows */
    .cost-row-even { display: grid; grid-template-columns: 80px 1fr 1fr; gap: 2rem; align-items: center; }
    .cost-row-odd  { display: grid; grid-template-columns: 1fr 1fr 80px; gap: 2rem; align-items: center; }
    .cost-num-even { grid-column: 1; }
    .cost-text-even { grid-column: 2; }
    .cost-quote-even { grid-column: 3; }
    .cost-text-odd  { grid-column: 1; }
    .cost-quote-odd { grid-column: 2; }
    .cost-num-odd   { grid-column: 3; }

    @media (max-width: 768px) {
      .cost-row-even, .cost-row-odd {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .cost-num-even, .cost-text-even, .cost-quote-even,
      .cost-num-odd,  .cost-text-odd,  .cost-quote-odd {
        grid-column: 1;
      }
      .cost-num-even, .cost-num-odd { display: none; }
    }

    /* Section padding */
    .section-pad { padding: 7rem 2rem; }
    @media (max-width: 768px) { .section-pad { padding: 4rem 1.25rem; } }

    /* Hero section */
    .hero-pad { padding: 6rem 2rem; }
    @media (max-width: 768px) { .hero-pad { padding: 4rem 1.25rem; } }

    /* Numbers stat row */
    .numbers-stat-right {
      display: flex; flex-direction: column; gap: 1.5rem;
    }

    /* Orbs hidden on mobile to avoid overflow */
    @media (max-width: 600px) {
      .ambient-ring { display: none; }
    }
  `}</style>
);

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 1 — OPENING TITLE
══════════════════════════════════════════════════════════════════ */
function ChapterOpening(): React.ReactElement {
  const [ref, inView] = useInView(0.1);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="hero-pad"
      style={{
        background:     "black",
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        textAlign:      "center",
        position:       "relative",
        overflow:       "hidden",
      }}
    >
      {/* ambient rings — hidden on mobile via CSS */}
      {([320, 520, 720] as number[]).map((s, i) => (
        <div
          key={i}
          className="ambient-ring"
          style={{
            position:     "absolute",
            left:         "50%",
            top:          "50%",
            width:        s,
            height:       s,
            borderRadius: "50%",
            border:       `1px solid rgba(0,131,208,${0.08 - i * 0.02})`,
            transform:    "translate(-50%,-50%)",
            animation:    `pulse-ring ${4 + i}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 820, width: "100%" }}>
        <h1
          style={{
            ...revealStyle(inView, 0.1),
            fontFamily:    B.sans,
            fontWeight:    900,
            fontSize:      isMobile ? "clamp(2.4rem, 11vw, 3.5rem)" : "clamp(3rem, 9vw, 6.5rem)",
            lineHeight:    1.02,
            letterSpacing: "-0.03em",
            color:         "#fff",
            marginBottom:  "1.5rem",
          }}
        >
          The Meal<br />
          <em style={{ color: B.blue }}>Nobody Talks About</em>
        </h1>

        <div
          style={{
            ...revealStyle(inView, 0.25),
            width:      40,
            height:     3,
            background: `linear-gradient(90deg, black, ${B.blue})`,
            margin:     "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            ...revealStyle(inView, 0.3),
            fontFamily:  B.sans,
            fontWeight:  300,
            fontSize:    isMobile ? "1rem" : "clamp(1rem, 2vw, 1.25rem)",
            lineHeight:  1.85,
            color:       "rgba(255,255,255,0.6)",
            maxWidth:    600,
            margin:      "0 auto 3rem",
            padding:     "0 0.5rem",
          }}
        >
          Across Africa and Europe, millions of university students begin every lecture
          with the same distraction — not a notification, not a daydream. Hunger.
        </p>

        <div
          style={{
            ...revealStyle(inView, 0.45),
            display:       "flex",
            flexDirection: "column",
            alignItems:    "center",
            gap:           "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily:    B.sans,
              fontSize:      "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.25)",
            }}
          >
            Scroll to explore
          </p>
          <div
            style={{
              width:      1,
              height:     48,
              background: `linear-gradient(${B.blue}, transparent)`,
              animation:  "drip 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 2 — THE NUMBERS
══════════════════════════════════════════════════════════════════ */
function ChapterNumbers(): React.ReactElement {
  const [ref, inView] = useInView(0.1);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: B.cream, overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* section label */}
        <div style={{ ...revealStyle(inView, 0), display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ width: 3, height: 48, background: `linear-gradient(black, ${B.blue})`, flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: B.sans, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: B.blue, marginBottom: "0.3rem" }}>01</p>
            <h2 style={{ fontFamily: B.sans, fontSize: isMobile ? "1.5rem" : "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              The numbers are not abstract.
            </h2>
          </div>
        </div>

        {/* stat grid — switches to single column on mobile */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
            gap:                 "1.5rem",
          }}
        >
          {/* big stat */}
          <div
            style={{
              ...revealStyle(inView, 0.1),
              gridColumn:   isMobile ? "1" : "1 / 7",
              background:   "black",
              borderRadius: 20,
              padding:      isMobile ? "2rem 1.5rem" : "2.5rem",
              position:     "relative",
              overflow:     "hidden",
            }}
          >
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(0,131,208,0.07)" }} />
            <p style={{ fontFamily: B.sans, fontSize: isMobile ? "clamp(3.5rem, 16vw, 5rem)" : "clamp(4rem, 10vw, 6rem)", fontWeight: 900, color: B.blue, lineHeight: 1, marginBottom: "1rem" }}>
              <Counter to={73} suffix="%" />
            </p>
            <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: isMobile ? "0.95rem" : "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.65)", maxWidth: 300, marginBottom: 7 }}>
              of African university students skip
              <strong style={{ color: "#fff", fontWeight: 700 }}> at least one meal </strong>per day during term.
            </p>
          </div>

          {/* right stacked cards */}
          <div
            style={{
              gridColumn: isMobile ? "1" : "7 / 13",
              display:    "flex",
              flexDirection: "column",
              gap:        "1.5rem",
            }}
          >
            <div
              style={{
                ...revealStyle(inView, 0.2),
                background:   "#fff",
                borderRadius: 20,
                padding:      isMobile ? "1.5rem" : "2.25rem",
                border:       "1px solid rgba(0,0,0,0.06)",
                boxShadow:    "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              <p style={{ fontFamily: B.sans, fontSize: isMobile ? "2.5rem" : "clamp(2.5rem, 6vw, 3.5rem)", fontWeight: 900, color: B.blue, lineHeight: 1, marginBottom: "0.6rem" }}>
                <Counter to={36} suffix="%" />
              </p>
              <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.65, color: "#555" }}>
                of European students report food insecurity during term time.
              </p>
            </div>

            <div
              style={{
                ...revealStyle(inView, 0.3),
                background:   B.blue,
                borderRadius: 20,
                padding:      isMobile ? "1.5rem" : "2.25rem",
              }}
            >
              <p style={{ fontFamily: B.sans, fontSize: isMobile ? "2rem" : "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "black", lineHeight: 1, marginBottom: "0.6rem" }}>
                1 in 3
              </p>
              <p style={{ fontFamily: B.sans, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.65, color: "black" }}>
                Nigerian students has gone a full day without eating this semester. Not just statistics — someone in your hall.
              </p>
            </div>
          </div>

          {/* full-width quote strip */}
          <div
            style={{
              ...revealStyle(inView, 0.35),
              gridColumn:   "1 / -1",
              background:   "black",
              borderRadius: 20,
              padding:      isMobile ? "1.75rem 1.5rem" : "2.5rem 3rem",
              display:      "flex",
              alignItems:   "flex-start",
              gap:          "1.5rem",
              borderLeft:   `6px solid ${B.blue}`,
            }}
          >
            <div style={{ fontSize: isMobile ? "2.5rem" : "3rem", lineHeight: 1, color: B.blue, fontFamily: B.sans, flexShrink: 0 }}>"</div>
            <div>
              <p style={{ fontFamily: B.sans, fontSize: isMobile ? "1rem" : "clamp(1.1rem, 2.5vw, 1.5rem)", fontStyle: "italic", color: "#fff", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                Food insecurity among students is not a lifestyle problem. It is a structural failure — of funding, of policy, of imagination.
              </p>
              <p style={{ fontFamily: B.sans, fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                — World Food Programme Campus Report, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 3 — THE INVISIBLE COST
══════════════════════════════════════════════════════════════════ */
const COSTS: CostItem[] = [
  { title: "Academic performance drops 22%",            body: "Students eating fewer than two meals a day score, on average, 22 percentage points lower on assessments. Hunger is a cognitive tax." },
  { title: "Concentration window: 47 minutes",          body: "The average fasted student can focus for under an hour before cognitive fatigue sets in. A typical lecture is 90 minutes." },
  { title: "1 in 5 considers dropping out",             body: "Not because of the coursework — because they cannot afford both rent and food. Food insecurity is the silent dropout driver." },
  { title: "Night-time eating is survival, not choice", body: "Many students eat only after 9pm — when off-campus food is cheaper. Sleep is sacrificed. The cycle deepens." },
];
const COST_QUOTES: string[] = [
  '"I sat through a three-hour exam having eaten a packet of biscuits the day before. I passed. Barely." — Emeka, UNN Year 3',
  '"My flatmates thought I was on a diet. I was just broke." — Sofia, UCL postgrad',
  '"I was averaging a first. Then I started skipping meals. Now I\'m just passing." — Ayo, UNILAG',
  '"I ace morning classes. Evening ones I barely remember." — Tendai, Makerere',
];

function ChapterCost(): React.ReactElement {
  const [ref, inView] = useInView(0.1);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-pad" style={{ background: B.cream }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ ...revealStyle(inView, 0), maxWidth: 640, marginBottom: isMobile ? "3rem" : "5rem" }}>
          <p style={{ fontFamily: B.sans, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: B.blue, marginBottom: "0.6rem" }}>02</p>
          <h2 style={{ fontFamily: B.sans, fontSize: isMobile ? "1.8rem" : "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1rem" }}>
            Hunger doesn't announce itself.<br />
            <em style={{ color: B.blue }}>It just shows up in your grades.</em>
          </h2>
          <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.8 }}>
            The downstream effects of campus food insecurity are measurable, documented — and almost entirely ignored by institutional policy.
          </p>
        </div>

        {COSTS.map((item: CostItem, i: number) => (
          <div
            key={i}
            style={{
              ...revealStyle(inView, 0.1 + i * 0.12),
              padding:      isMobile ? "1.75rem 0" : "2.5rem 0",
              borderBottom: i < COSTS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
            }}
          >
            {isMobile ? (
              /* Mobile: stacked layout */
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ fontFamily: B.sans, fontSize: "1.2rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "0.95rem", color: "#666", lineHeight: 1.75 }}>{item.body}</p>
                <div style={{ background: i % 2 === 0 ? "black" : "#fff", border: i % 2 !== 0 ? "1px solid rgba(0,0,0,0.07)" : "none", borderRadius: 16, padding: "1.25rem" }}>
                  <p style={{ fontFamily: B.sans, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6, color: i % 2 === 0 ? "rgba(255,255,255,0.65)" : "#555" }}>
                    {COST_QUOTES[i]}
                  </p>
                </div>
              </div>
            ) : (
              /* Desktop: alternating layout */
              <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "80px 1fr 1fr" : "1fr 1fr 80px", gap: "2rem", alignItems: "center" }}>
                <div style={{ gridColumn: i % 2 === 0 ? "2" : "1" }}>
                  <h3 style={{ fontFamily: B.sans, fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "#1A1A1A", marginBottom: "0.6rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "0.97rem", color: "#666", lineHeight: 1.75 }}>{item.body}</p>
                </div>
                <div style={{ gridColumn: i % 2 === 0 ? "3" : "2", background: i % 2 === 0 ? "black" : "#fff", border: i % 2 !== 0 ? "1px solid rgba(0,0,0,0.07)" : "none", borderRadius: 16, padding: "1.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontFamily: B.sans, fontStyle: "italic", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.6, color: i % 2 === 0 ? "rgba(255,255,255,0.65)" : "#555" }}>
                    {COST_QUOTES[i]}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 4 — THE DIASPORA ANGLE
══════════════════════════════════════════════════════════════════ */
const DIASPORA_ITEMS: DiasporaItem[] = [
  { amount: "$25",  lost: "$8.40",  pct: "34%", route: "Lagos → Lyon",     story: "Fatima's mother in Surulere sends €30 every month. By the time it arrives, €10 is gone to transfer fees. She doesn't tell her mum." },
  { amount: "$50",  lost: "$14.50", pct: "29%", route: "Accra → Edinburgh", story: "Kwame's dad works nights in Tema to send £50. The app shows 'processing' for three days. Kwame eats once on day two." },
  { amount: "$100", lost: "$11.00", pct: "11%", route: "Nairobi → Berlin",  story: "Wanjiru's aunt sends €100. The best rate she found after 40 minutes of searching. Still €11 lost. 'That's three lunches,' Wanjiru says." },
];

function ChapterDiaspora(): React.ReactElement {
  const [ref, inView] = useInView(0.1);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "linear-gradient(160deg,black 0%, black 50%)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        <div style={{ ...revealStyle(inView, 0), textAlign: "center", marginBottom: isMobile ? "2.5rem" : "4rem" }}>
          <p style={{ fontFamily: B.sans, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: B.blue, marginBottom: "0.6rem" }}>03</p>
          <h2 style={{ fontFamily: B.sans, fontSize: isMobile ? "1.8rem" : "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
            Your mum would cook if she could.
          </h2>
          <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, black, ${B.blue})`, margin: "1.2rem auto 0" }} />
        </div>

        {/* Cards — responsive via CSS class */}
        <div
          className="diaspora-grid"
          style={{ ...revealStyle(inView, 0.1), marginBottom: isMobile ? "2.5rem" : "4rem" }}
        >
          {DIASPORA_ITEMS.map((item: DiasporaItem, i: number) => (
            <div
              key={i}
              style={{
                background:   "rgba(255,255,255,0.04)",
                border:       "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding:      isMobile ? "1.5rem" : "2rem",
                borderTop:    `3px solid ${B.blue}`,
              }}
            >
              <p style={{ fontFamily: B.sans, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                {item.route}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontFamily: B.sans, fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.2rem" }}>Sent</p>
                  <p style={{ fontFamily: B.sans, fontSize: "1.8rem", fontWeight: 900, color: "#fff" }}>{item.amount}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: B.sans, fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.2rem" }}>Lost to fees</p>
                  <p style={{ fontFamily: B.sans, fontSize: "1.8rem", fontWeight: 900, color: B.blue }}>{item.lost}</p>
                </div>
              </div>
              <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.06)", marginBottom: "1.25rem", overflow: "hidden" }}>
                <div style={{ height: "100%", width: inView ? item.pct : "0%", background: `linear-gradient(90deg, black, ${B.blue})`, borderRadius: 999, transition: `width 1.2s ${i * 0.15}s` }} />
              </div>
              <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontStyle: "italic" }}>
                "{item.story}"
              </p>
            </div>
          ))}
        </div>

        {/* pull stat */}
        <div style={{ ...revealStyle(inView, 0.3), textAlign: "center" }}>
          <p style={{ fontFamily: B.sans, fontSize: isMobile ? "1rem" : "clamp(1.2rem, 3vw, 1.7rem)", fontStyle: "italic", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
            Families sacrifice to send money. Remittance fees eat the meals. The student goes hungry anyway. This is the loop we're breaking.
          </p>
          <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: B.blue, fontFamily: B.sans, fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ width: 20, height: 1, background: B.blue }} />
            We eliminate overhead costs and stress.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 5 — SDG 2 & THE VISION
══════════════════════════════════════════════════════════════════ */
const GOALS: GoalItem[] = [
  { n: "01", title: "End student hunger by 2030",     body: "Target every campus in sub-Saharan Africa and Europe with affordable, accessible nutrition infrastructure." },
  { n: "02", title: "Zero transfer-fee food gifting", body: "Families send meal credits, not money. No fees. No delays. Just food on the table." },
  { n: "03", title: "Community-owned food systems",   body: "Students pool, buy in bulk, share surplus." },
];

function ChapterVision(): React.ReactElement {
  const [ref, inView] = useInView(0.1);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-pad" style={{ background: B.cream }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* header split — responsive via CSS class */}
        <div className="vision-header" style={{ ...revealStyle(inView, 0) }}>
          <div>
            <p style={{ fontFamily: B.sans, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: B.blue, marginBottom: "0.6rem" }}>
              The Way Forward
            </p>
            <h2 style={{ fontFamily: B.sans, fontSize: isMobile ? "2rem" : "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.08 }}>
              Zero Hunger<br />is not a tagline.<br />
              <em style={{ color: B.blue }}>It's a deadline.</em>
            </h2>
          </div>
          <div>
            <div style={{ width: 3, height: 60, background: `linear-gradient(black, ${B.blue})`, marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.85 }}>
              UN SDG Goal 2 calls for Zero Hunger by 2030. Governments are behind. NGOs are stretched. The
              infrastructure has to come from the ground up — from campuses, families, and technology built
              specifically for this problem.
            </p>
            <p style={{ fontFamily: B.sans, fontWeight: 700, fontSize: "1rem", color: "#1A1A1A", marginTop: "1rem", lineHeight: 1.7 }}>
              That is what CampusFeed is built to do.
            </p>
          </div>
        </div>

        {/* goal cards — responsive via CSS class */}
        <div className="goals-grid">
          {GOALS.map((g: GoalItem, i: number) => (
            <div
              key={i}
              style={{
                ...revealStyle(inView, 0.1 + i * 0.1),
                background:   i === 0 ? "black" : "#fff",
                border:       i !== 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderRadius: 20,
                padding:      isMobile ? "1.5rem" : "2rem",
                boxShadow:    i !== 0 ? "0 4px 20px rgba(0,0,0,0.04)" : "none",
              }}
            >
              <p style={{ fontFamily: B.sans, fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.12em", color: B.blue, marginBottom: "1rem" }}>{g.n}</p>
              <h3 style={{ fontFamily: B.sans, fontSize: "1.15rem", fontWeight: 800, color: i === 0 ? "#fff" : "#1A1A1A", marginBottom: "0.6rem", lineHeight: 1.25 }}>
                {g.title}
              </h3>
              <p style={{ fontFamily: B.sans, fontWeight: 300, fontSize: "0.88rem", color: i === 0 ? "rgba(255,255,255,0.55)" : "#777", lineHeight: 1.7 }}>
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ROOT COMPONENT
══════════════════════════════════════════════════════════════════ */
const CampusHungerStory: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&display=swap"
        rel="stylesheet"
      />
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
};

export default CampusHungerStory;