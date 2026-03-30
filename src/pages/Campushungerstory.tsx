import { Brain, TrendingDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

/* ── brand tokens (exact match to your codebase) ───────────────── */
const B = {
  greenDeep: "#0D1F0F",
  greenMid:  "#1A3A14",
  terra:     "#C8602A",
  cream:     "#FFFCF5",
  serif:     "'Playfair Display', Georgia, serif",
  sans:      "'Lato', sans-serif",
} as const;

/* ── types ──────────────────────────────────────────────────────── */
interface City {
  flag:       string;
  city:       string;
  campus:     string;
  stat:       string;
  statLabel:  string;
  color:      string;
  insight:    string;
}

interface CostItem {
  title: string;
  body:  string;
}

interface DiasporaItem {
  amount: string;
  lost:   string;
  pct:    string;
  route:  string;
  story:  string;
}

interface BarRow {
  label: string;
  val:   number;
  max:   number;
  col:   string;
}

interface GoalItem {
  n:     string;
  title: string;
  body:  string;
}

interface CounterProps {
  to:        number;
  prefix?:   string;
  suffix?:   string;
  decimals?: number;
}

/* ── intersection hook (mirrors your IntersectionObserver) ─────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLElement>, boolean] {
  const ref     = useRef<HTMLElement>(null);
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

/* ── animated number counter ───────────────────────────────────── */
function Counter({ to, prefix = "", suffix = "", decimals = 0 }: CounterProps): React.ReactElement {
  const [val, setVal]   = useState<number>(0);
  const [ref, inView]   = useInView(0.4);

  useEffect(() => {
    if (!inView) return;
    const dur   = 1800;
    const fps   = 60;
    const steps = dur / (1000 / fps);
    let i       = 0;
    const id    = setInterval(() => {
      i++;
      setVal(parseFloat((to * (i / steps)).toFixed(decimals)));
      if (i >= steps) { setVal(to); clearInterval(id); }
    }, 1000 / fps);
    return () => clearInterval(id);
  }, [inView, to, decimals]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}
      {val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ── reveal style helper (your section-animate pattern) ─────────── */
function revealStyle(inView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity:    inView ? 1 : 0,
    transform:  inView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.85s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.85s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
  };
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 1 — OPENING TITLE
══════════════════════════════════════════════════════════════════ */
function ChapterOpening(): React.ReactElement {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background:      'black',
        minHeight:       "100vh",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "6rem 2rem",
        textAlign:       "center",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      {/* ambient rings */}
      {([320, 520, 720] as number[]).map((s, i) => (
        <div
          key={i}
          style={{
            position:     "absolute",
            left:         "50%",
            top:          "50%",
            width:        s,
            height:       s,
            borderRadius: "50%",
            border:       `1px solid rgba(232,168,64,${0.06 - i * 0.015})`,
            transform:    "translate(-50%,-50%)",
            animation:    `pulse-ring ${4 + i}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 820 }}>
        <p
          style={{
            ...revealStyle(inView, 0),
            fontFamily:    "Sora",
            fontSize:      "0.7rem",
            fontWeight:    800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color:         "RGB(0,131,208)",
            marginBottom:  "1.5rem",
          }}
        >
        
        </p>

        <h1
          style={{
            ...revealStyle(inView, 0.1),
            fontFamily:    "Sora, san-yserif",
            fontWeight:    900,
            fontSize:      "clamp(3rem, 9vw, 6.5rem)",
            lineHeight:    1.02,
            letterSpacing: "-0.03em",
            color:         "#fff",
            marginBottom:  "1.5rem",
          }}
        >
          The Meal<br />
          <em style={{ color: "RGB(0,131,208)" }}>Nobody Talks About</em>
        </h1>

        <div
          style={{
            ...revealStyle(inView, 0.25),
            width:        40,
            height:       3,
            background:   `linear-gradient(90deg, black, ${"RGB(0,131,208)"})`,
            margin:       "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            ...revealStyle(inView, 0.3),
            fontFamily:   "Sora",
            fontWeight:   300,
            fontSize:     "clamp(1rem, 2vw, 1.25rem)",
            lineHeight:   1.85,
            color:        "rgba(255,255,255,0.6)",
            maxWidth:     600,
            margin:       "0 auto 3rem",
          }}
        >
          Across Africa and Europe, millions of university students begin every lecture with the same
          distraction — not a notification, not a daydream. Hunger.
        </p>

        {/* scroll cue */}
        <div
          style={{
            ...revealStyle(inView, 0.45),
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily:    "Sora",
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
              background: `linear-gradient(${"RGB(0,131,208)"}, transparent)`,
              animation:  "drip 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          from { transform: translate(-50%,-50%) scale(1); }
          to   { transform: translate(-50%,-50%) scale(1.04); }
        }
        @keyframes drip {
          0%,100% { opacity:0.3; transform:scaleY(1); }
          50%     { opacity:1;   transform:scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 2 — THE NUMBERS
══════════════════════════════════════════════════════════════════ */
function ChapterNumbers(): React.ReactElement {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: B.cream, padding: "7rem 2rem", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* section label */}
        <div
          style={{
            ...revealStyle(inView, 0),
            display:       "flex",
            alignItems:    "center",
            gap:           "1rem",
            marginBottom:  "4rem",
          }}
        >
          <div style={{ width: 3, height: 48, background: `linear-gradient(black, ${"RGB(0,131,208)"})` }} />
          <div>
            <p
              style={{
                fontFamily:    "Sora",
                fontSize:      "0.68rem",
                fontWeight:    800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:         "RGB(0,131,208)",
                marginBottom:  "0.3rem",
              }}
            >
              01
            </p>
            <h2
              style={{
                fontFamily:    "Sora, san-yserif",
                fontSize:      "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight:    900,
                color:         "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              The numbers are not abstract.
            </h2>
          </div>
        </div>

        {/* editorial stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem" }}>

          {/* big stat — left 6 cols */}
          <div
            style={{
              ...revealStyle(inView, 0.1),
              gridColumn:  "1 / 7",
              background:  "black",
              borderRadius: 20,
              padding:     "1rem",
              position:    "relative",
              height:'50%',
              overflow:    "hidden",
            }}
          >
            <div
              style={{
                position:     "absolute",
                bottom:       -40,
                right:        -40,
                width:        200,
                height:       200,
                borderRadius: "50%",
                background:   "rgba(232,168,64,0.07)",
              }}
            />
            <p
              style={{
                fontFamily:   "Sora, san-yserif",
                fontSize:     "clamp(4rem, 10vw, 6rem)",
                fontWeight:   900,
                color:        "RGB(0,131,208)",
                lineHeight:   1,
                marginBottom: "1rem",
              }}
            >
              <Counter to={73} suffix="% " />
            </p>
            <p
              style={{
                fontFamily:  "Sora",
                fontWeight:  300,
                fontSize:    "1.1rem",
                lineHeight:  1.1,
                color:       "rgba(255,255,255,0.65)",
                maxWidth:    300,
                marginBottom: '7px'
              }}
            >
              of African university students skip
              <strong style={{ color: "#fff", fontWeight: 700 }}> at least one meal </strong>per day during term.
            </p>
          </div>

          {/* stacked — right 6 cols */}
          <div style={{ gridColumn: "7 / 13", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                ...revealStyle(inView, 0.2),
                background:   "#fff",
                borderRadius: 20,
                padding:      "2.25rem",
                border:       "1px solid rgba(0,0,0,0.06)",
                boxShadow:    "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily:   "Sora, san-yserif",
                  fontSize:     "clamp(2.5rem, 6vw, 3.5rem)",
                  fontWeight:   900,
                  color:        "RGB(0,131,208)",
                  lineHeight:   1,
                  marginBottom: "0.6rem",
                }}
              >
                <Counter to={36} suffix="%" />
              </p>
              <p style={{ fontFamily: "Sora", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.65, color: "#555" }}>
                of European students report food insecurity during term time.
              </p>
            </div>

            <div
              style={{
                ...revealStyle(inView, 0.3),
                background:   "RGB(0,131,208)",
                borderRadius: 20,
                padding:      "2.25rem",
              }}
            >
              <p
                style={{
                  fontFamily:   "Sora, san-yserif",
                  fontSize:     "clamp(2rem, 5vw, 3rem)",
                  fontWeight:   900,
                  color:        "black",
                  lineHeight:   1,
                  marginBottom: "0.6rem",
                }}
              >
                1 in 3
              </p>
              <p style={{ fontFamily: "Sora", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.65, color: "black" }}>
                Nigerian students has gone a full day without eating this semester. Not just statistics but someone in your hall.
              </p>
            </div>
          </div>

          {/* full-width quote strip */}
          <div
            style={{
              ...revealStyle(inView, 0.35),
              gridColumn:   "1 / 13",
              background:   `linear-gradient(135deg,black,black)`,
              borderRadius: 20,
              padding:      "2.5rem 3rem",
              display:      "flex",
              alignItems:   "center",
              gap:          "2rem",
              borderLeft:   `6px solid ${"RGB(0,131,208)"}`,
            }}
          >
            <div
              style={{
                fontSize:   "3rem",
                lineHeight: 1,
                color:      "RGB(0,131,208)",
                fontFamily: "Sora, san-yserif",
                flexShrink: 0,
              }}
            >
              "
            </div>
            <div>
              <p
                style={{
                  fontFamily:   "Sora, san-yserif",
                  fontSize:     "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontStyle:    "italic",
                  color:        "#fff",
                  lineHeight:   1.5,
                  marginBottom: "0.75rem",
                }}
              >
                Food insecurity among students is not a lifestyle problem. It is a structural failure — of funding, of policy, of imagination.
              </p>
              <p
                style={{
                  fontFamily:    "Sora",
                  fontSize:      "0.8rem",
                  color:         "rgba(255,255,255,0.45)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
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
   CHAPTER 4 — THE INVISIBLE COST
══════════════════════════════════════════════════════════════════ */
const COSTS: CostItem[] = [
  {  title: "Academic performance drops 22%",       body: "Students eating fewer than two meals a day score, on average, 22 percentage points lower on assessments. Hunger is a cognitive tax." },
  { title: "Concentration window: 47 minutes",     body: "The average fasted student can focus for under an hour before cognitive fatigue sets in. A typical lecture is 90 minutes." },
  {  title: "1 in 5 considers dropping out",        body: "Not because of the coursework. Because they cannot afford both rent and food. Food insecurity is the silent dropout driver." },
  {  title: "Night-time eating is survival, not choice", body: "Many students eat only after 9pm — when off-campus food is cheaper. Sleep is sacrificed. The cycle deepens." },
];

const COST_QUOTES: string[] = [
  '"I sat through a three-hour exam having eaten a packet of biscuits the day before. I passed. Barely." — Emeka, UNN Year 3',
  '"My flatmates thought I was on a diet. I was just broke." — Sofia, UCL postgrad',
  '"I was averaging a first. Then I started skipping meals. Now I\'m just passing." — Ayo, UNILAG',
  '"I ace morning classes. Evening ones I barely remember." — Tendai, Makerere',
];

function ChapterCost(): React.ReactElement {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: B.cream, padding: "7rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ ...revealStyle(inView, 0), maxWidth: 640, marginBottom: "5rem" }}>
          <p
            style={{
              fontFamily:    "Sora",
              fontSize:      "0.68rem",
              fontWeight:    800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:         "RGB(0,131,208)",
              marginBottom:  "0.6rem",
            }}
          >
         02
          </p>
          <h2
            style={{
              fontFamily:    "Sora, serif",
              fontSize:      "clamp(1.8rem, 5vw, 3.2rem)",
              fontWeight:    900,
              color:         "#1A1A1A",
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
              marginBottom:  "1rem",
            }}
          >
            Hunger doesn't announce itself.<br />
            <em style={{ color: "RGB(0,131,208)" }}>It just shows up in your grades.</em>
          </h2>
          <p style={{ fontFamily: "Sora", fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.8 }}>
            The downstream effects of campus food insecurity are measurable, documented — and almost entirely ignored by institutional policy.
          </p>
        </div>

        {/* alternating editorial rows */}
        {COSTS.map((item: CostItem, i: number) => (
          <div
            key={i}
            style={{
              ...revealStyle(inView, 0.1 + i * 0.12),
              display:             "grid",
              gridTemplateColumns: i % 2 === 0 ? "80px 1fr 1fr" : "1fr 1fr 80px",
              gap:                 "2rem",
              alignItems:          "center",
              padding:             "2.5rem 0",
              borderBottom:        i < COSTS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
            }}
          >
            
            <div style={{ gridColumn: i % 2 === 0 ? "2" : "1" }}>
              <h3
                style={{
                  fontFamily:   "Sora, san-yserif",
                  fontSize:     "clamp(1.2rem, 3vw, 1.6rem)",
                  fontWeight:   800,
                  color:        "#1A1A1A",
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontFamily: "Sora", fontWeight: 300, fontSize: "0.97rem", color: "#666", lineHeight: 1.75 }}>
                {item.body}
              </p>
            </div>
            <div
              style={{
                gridColumn:     i % 2 === 0 ? "3" : "2",
                background:     i % 2 === 0 ? "black" : "#fff",
                border:         i % 2 !== 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderRadius:   16,
                padding:        "1.75rem",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Sora, san-yserif",
                  fontStyle:  "italic",
                  fontSize:   "clamp(0.9rem, 2vw, 1.1rem)",
                  lineHeight: 1.6,
                  color:      i % 2 === 0 ? "rgba(255,255,255,0.65)" : "#555",
                }}
              >
                {COST_QUOTES[i]}
              </p>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 5 — THE DIASPORA ANGLE
══════════════════════════════════════════════════════════════════ */
const DIASPORA_ITEMS: DiasporaItem[] = [
  {
    amount: "$25", lost: "$8.40", pct: "34%", route: "Lagos → Lyon",
    story: "Fatima's mother in Surulere sends €30 every month. By the time it arrives, €10 is gone to transfer fees. She doesn't tell her mum.",
  },
  {
    amount: "$50", lost: "$14.50", pct: "29%", route: "Accra → Edinburgh",
    story: "Kwame's dad works nights in Tema to send £50. The app shows 'processing' for three days. Kwame eats once on day two.",
  },
  {
    amount: "$100", lost: "$11.00", pct: "11%", route: "Nairobi → Berlin",
    story: "Wanjiru's aunt sends €100. The best rate she found after 40 minutes of searching. Still €11 lost. 'That's three lunches,' Wanjiru says.",
  },
];

function ChapterDiaspora(): React.ReactElement {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: `linear-gradient(160deg,black 0%, black 50%)`,
        padding:    "7rem 2rem",
        overflow:   "hidden",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        <div style={{ ...revealStyle(inView, 0), textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily:    "Sora",
              fontSize:      "0.68rem",
              fontWeight:    800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:         "RGB(0,131,208)",
              marginBottom:  "0.6rem",
            }}
          >
            03
          </p>
          <h2
            style={{
              fontFamily:    "Sora, san-yserif",
              fontSize:      "clamp(1.8rem, 5vw, 3.2rem)",
              fontWeight:    900,
              color:         "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Your mum would cook if she could.
          </h2>
          <div
            style={{
              width:        40,
              height:       3,
              background:   `linear-gradient(90deg, black, ${"RGB(0,131,208)"})`,
              margin:       "1.2rem auto 0",
            }}
          />
        </div>

        {/* three columns */}
        <div
          style={{
            ...revealStyle(inView, 0.1),
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap:                 "1.5rem",
            marginBottom:        "4rem",
          }}
        >
          {DIASPORA_ITEMS.map((item: DiasporaItem, i: number) => (
            <div
              key={i}
              style={{
                background:   "rgba(255,255,255,0.04)",
                border:       "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding:      "2rem",
                borderTop:    `3px solid black`,
              }}
            >
              <p
                style={{
                  fontFamily:    "Sora",
                  fontSize:      "0.7rem",
                  fontWeight:    800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color:         "rgba(255,255,255,0.3)",
                  marginBottom:  "1rem",
                }}
              >
                {item.route}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontFamily: "Sora", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.2rem" }}>Sent</p>
                  <p style={{ fontFamily: "Sora, san-yserif", fontSize: "1.8rem", fontWeight: 900, color: "#fff" }}>{item.amount}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "Sora", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.2rem" }}>Lost to fees</p>
                  <p style={{ fontFamily: "Sora, san-yserif", fontSize: "1.8rem", fontWeight: 900, color: "RGB(0,131,208)" }}>{item.lost}</p>
                </div>
              </div>
              {/* fee bar */}
              <div
                style={{
                  height:       6,
                  borderRadius: 999,
                  background:   "rgba(255,255,255,0.06)",
                  marginBottom: "1.25rem",
                  overflow:     "hidden",
                }}
              >
                <div
                  style={{
                    height:       "100%",
                    width:        item.pct,
                    background:   `linear-gradient(90deg, black, ${"RGB(0,131,208)"})`,
                    borderRadius: 999,
                    transition:   `width 1.2s ${i * 0.15}s`,
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily:  "Sora",
                  fontWeight:  300,
                  fontSize:    "0.88rem",
                  color:       "rgba(255,255,255,0.55)",
                  lineHeight:  1.7,
                  fontStyle:   "italic",
                }}
              >
                "{item.story}"
              </p>
            </div>
          ))}
        </div>

        {/* pull stat */}
        <div style={{ ...revealStyle(inView, 0.3), textAlign: "center" }}>
          <p
            style={{
              fontFamily:  "Sora, san-yserif",
              fontSize:    "clamp(1.2rem, 3vw, 1.7rem)",
              fontStyle:   "italic",
              color:       "rgba(255,255,255,0.6)",
              lineHeight:  1.6,
              maxWidth:    640,
              margin:      "0 auto",
            }}
          >
            Families sacrifice to send money. Remittance fees eat the meals. The student goes hungry anyway. This is the loop we're breaking.
          </p>
          <div
            style={{
              marginTop:     "1.5rem",
              display:       "inline-flex",
              alignItems:    "center",
              gap:           "0.5rem",
              color:         "RGB(0,131,208)",
              fontFamily:    "Sora",
              fontSize:      "0.78rem",
              fontWeight:    800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 20, height: 1, background: "RGB(0,131,208)" }} />
           we eliminate overhead costs and stress.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHAPTER 6 — SDG 2 & THE VISION
══════════════════════════════════════════════════════════════════ */
const GOALS: GoalItem[] = [
  { n: "01", title: "End student hunger by 2030",        body: "Target every campus in sub-Saharan Africa and Europe with affordable, accessible nutrition infrastructure." },
  { n: "02", title: "Zero transfer-fee food gifting",    body: "Families send meal credits, not money. No fees. No delays. Just food on the table." },
  { n: "03", title: "Community-owned food systems",      body: "Students pool, buy in bulk, share surplus." },
];

function ChapterVision(): React.ReactElement {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: B.cream, padding: "7rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* header split */}
        <div
          style={{
            ...revealStyle(inView, 0),
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "4rem",
            alignItems:          "end",
            marginBottom:        "5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:    "Sora",
                fontSize:      "0.68rem",
                fontWeight:    800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:         "RGB(0,131,208)",
                marginBottom:  "0.6rem",
              }}
            >
                The Way Forward
            </p>
            <h2
              style={{
                fontFamily:    "Sora, san-yserif",
                fontSize:      "clamp(2rem, 5vw, 3.5rem)",
                fontWeight:    900,
                color:         "#1A1A1A",
                letterSpacing: "-0.03em",
                lineHeight:    1.08,
              }}
            >
              Zero Hunger<br />is not a tagline.<br />
              <em style={{ color: "RGB(0,131,208)" }}>It's a deadline.</em>
            </h2>
          </div>
          <div>
            <div
              style={{
                width:        3,
                height:       60,
                background:   `linear-gradient(black, ${"RGB(0,131,208)"})`,
                marginBottom: "1.5rem",
              }}
            />
            <p style={{ fontFamily: "Sora", fontWeight: 300, fontSize: "1.05rem", color: "#555", lineHeight: 1.85 }}>
              UN SDG Goal 2 calls for Zero Hunger by 2030. Governments are behind. NGOs are stretched. The
              infrastructure has to come from the ground up — from campuses, families, and technology built
              specifically for this problem.
            </p>
            <p style={{ fontFamily: "Sora", fontWeight: 700, fontSize: "1rem", color: "#1A1A1A", marginTop: "1rem", lineHeight: 1.7 }}>
              That is what nekstpei is built to do.
            </p>
          </div>
        </div>

        {/* goal cards */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap:                 "1.25rem",
          }}
        >
          {GOALS.map((g: GoalItem, i: number) => (
            <div
              key={i}
              style={{
                ...revealStyle(inView, 0.1 + i * 0.1),
                background:   i === 0 ? "black" : "#fff",
                border:       i !== 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderRadius: 20,
                padding:      "2rem",
                boxShadow:    i !== 0 ? "0 4px 20px rgba(0,0,0,0.04)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily:    "Sora",
                  fontSize:      "0.65rem",
                  fontWeight:    900,
                  letterSpacing: "0.12em",
                  color:         i === 0 ? "RGB(0,131,208)" : "RGB(0,131,208)",
                  marginBottom:  "1rem",
                }}
              >
                {g.n}
              </p>
              <h3
                style={{
                  fontFamily:   "Sora, san-yserif",
                  fontSize:     "1.15rem",
                  fontWeight:   800,
                  color:        i === 0 ? "#fff" : "#1A1A1A",
                  marginBottom: "0.6rem",
                  lineHeight:   1.25,
                }}
              >
                {g.title}
              </h3>
              <p
                style={{
                  fontFamily: "Sora",
                  fontWeight: 300,
                  fontSize:   "0.88rem",
                  color:      i === 0 ? "rgba(255,255,255,0.55)" : "#777",
                  lineHeight: 1.7,
                }}
              >
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



const CampusHungerStory: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Lato:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
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