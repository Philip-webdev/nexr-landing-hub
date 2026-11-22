import { useState } from 'react';
import {
  HeartHandshake,
  GraduationCap,
  Store,
  Building2,
  Check,
  ArrowRight,
  Bot,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Utensils,
  QrCode,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TabId = 'families' | 'students' | 'vendors' | 'institutions';

interface TabDef {
  id: TabId;
  label: string;
  icon: LucideIcon;
  accent: string;
  headline: string;
  description: string;
  bullets: string[];
}

const TABS: TabDef[] = [
  {
    id: 'students',
    label: 'Students',
    icon: GraduationCap,
    accent: '#FFFFFF',
    headline: 'Eat well on any budget',
    description:
      'The AI planner turns a weekly budget into a realistic meal plan, then lets you redeem it at verified campus vendors.',
    bullets: [
      'AI meal plans starting from ₦1,000',
      'Weekly balance tracking that keeps you honest',
      'Redeem at verified vendors on and off campus',
    ],
  },
  {
    id: 'families',
    label: 'Families',
    icon: HeartHandshake,
    accent: '#FFFFFF',
    headline: 'Send with certainty',
    description:
      'Money is easy to send, certainty is not. Fund a wallet, send food value across any distance, and watch it turn into real meals.',
    bullets: [
      'Fund a wallet in seconds, from anywhere',
      'Send food value to anyone, in any city',
      'See exactly what it was spent on',
    ],
  },
  {
    id: 'vendors',
    label: 'Vendors',
    icon: Store,
    accent: '#FFFFFF',
    headline: 'Vendors that run themselves',
    description:
      'Autonomous agents price, route, and reconcile every order. Vendors get demand insight and instant settlement on redemption.',
    bullets: [
      'Agents price and route orders automatically',
      'Live sales insight, per stall and per day',
      'Instant settlement on every QR redemption',
    ],
  },
  {
    id: 'institutions',
    label: 'Institutions',
    icon: Building2,
    accent: '#FFFFFF',
    headline: 'Programs with proof',
    description:
      'Universities, employers, and NGOs run food-support programs with cohort dashboards and transparent reporting on every naira.',
    bullets: [
      'Dashboards for every cohort and campus',
      'Transparent reporting, wallet to plate',
      'Roll out to thousands in a single program',
    ],
  },
];

/* ---------- Tab visuals (conceptual data viz) ---------- */

const FlowVisual = () => (
  <div className="space-y-3">
    {[
      { label: 'Money', sub: 'Parent loads ₦20,000', icon: '₦', color: '#BFBFBF', delay: '0.05s' },
      { label: 'Food Credit', sub: 'Sends ₦15,000 food value', icon: <Utensils size={18} />, color: '#FFFFFF', delay: '0.15s' },
      { label: 'QR Redemption', sub: 'Student scans at vendor', icon: <QrCode size={18} />, color: '#FFFFFF', delay: '0.25s' },
      { label: 'Physical Food', sub: 'Fresh meal · verified', icon: '🍽', color: '#FFFFFF', delay: '0.35s' },
    ].map((row, i) => (
      <div key={i} className="row-in" style={{ animationDelay: row.delay }}>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: `${row.color}18`, color: row.color, border: `1px solid ${row.color}33` }}
          >
            {row.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">{row.label}</p>
            <p className="text-xs text-[#BFBFBF] truncate">{row.sub}</p>
          </div>
          {i === 3 && (
            <span className="flex items-center gap-1 text-[10px] font-semibold text-[#FFFFFF] bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 px-2 py-1 rounded-full flex-shrink-0">
              <Check size={10} /> Done
            </span>
          )}
        </div>
        {i < 3 && (
          <div className="flex justify-center py-1.5">
            <div className="w-px h-3.5 bg-gradient-to-b from-[#FFFFFF]/50 to-[#FFFFFF]/40" />
          </div>
        )}
      </div>
    ))}
  </div>
);

const BudgetVisual = () => {
  const days = [
    { d: 'Mon', h: 55 },
    { d: 'Tue', h: 78 },
    { d: 'Wed', h: 62 },
    { d: 'Thu', h: 88 },
    { d: 'Fri', h: 70 },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-[#BFBFBF]">Weekly food budget</p>
          <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron' }}>
            ₦10,000 <span className="text-sm font-medium text-[#BFBFBF]">· 5 days</span>
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#FFFFFF] bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 px-3 py-1.5 rounded-full">
          <Sparkles size={12} /> AI plan ready
        </span>
      </div>

      <div className="flex items-end gap-3 h-36 px-1">
        {days.map((day, i) => (
          <div key={day.d} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <div
              className="bar-grow w-full rounded-t-lg"
              style={{
                height: `${day.h}%`,
                background: 'linear-gradient(180deg, #00B4D8, #0083D0)',
                animationDelay: `${0.15 + i * 0.1}s`,
                boxShadow: '0 0 16px rgba(255,255,255,0.25)',
              }}
            />
            <span className="text-[10px] text-[#8A8A8A]">{day.d}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-[#BFBFBF] bg-white/[0.03] border border-white/[0.05] rounded-lg px-3 py-2.5">
        <Check size={13} className="text-[#FFFFFF] flex-shrink-0" />
        Plan covers 3 meals a day, no day left hungry.
      </div>
    </div>
  );
};

const AgentVisual = () => (
  <div className="space-y-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-[#BFBFBF]">Orders today</p>
        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron' }}>
          48 <span className="text-sm font-medium text-[#FFFFFF]">+18% ↗</span>
        </p>
      </div>
      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#FFFFFF] bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 px-3 py-1.5 rounded-full">
        <Bot size={12} /> Agents live
      </span>
    </div>

    <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4">
      <svg viewBox="0 0 240 70" className="w-full h-16" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,55 L30,48 L60,52 L90,38 L120,42 L150,28 L180,32 L210,18 L240,12 L240,70 L0,70 Z"
          fill="url(#sparkFill)"
        />
        <path
          className="line-draw"
          d="M0,55 L30,48 L60,52 L90,38 L120,42 L150,28 L180,32 L210,18 L240,12"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    <div className="space-y-2">
      {[
        { order: 'Jollof rice ×2 · Stall A4', status: 'Matched', color: '#FFFFFF' },
        { order: 'Bean & plantain · Market', status: 'Routed', color: '#FFFFFF' },
        { order: 'Efo riro ×1 · Campus cafe', status: 'Settled', color: '#FFFFFF' },
      ].map((row, i) => (
        <div
          key={i}
          className="row-in flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
          style={{ animationDelay: `${0.15 + i * 0.12}s` }}
        >
          <span className="text-xs text-gray-300 truncate">{row.order}</span>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ color: row.color, background: `${row.color}14`, border: `1px solid ${row.color}33` }}
          >
            {row.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ProgramVisual = () => {
  const dash = 2 * Math.PI * 44;
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-6">
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
            <circle
              className="donut-sweep"
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={dash}
              strokeDashoffset={dash * 0.15}
              style={{ filter: 'drop-shadow(0 0 6px rgba(124,92,224,0.5))' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron' }}>85%</span>
            <span className="text-[9px] text-[#BFBFBF] uppercase tracking-wider">utilized</span>
          </div>
        </div>

        <div className="flex-1 space-y-2.5">
          {[
            { label: 'Cohort A · 1,200 students', pct: '92%', color: '#FFFFFF' },
            { label: 'Cohort B · 850 students', pct: '78%', color: '#FFFFFF' },
            { label: 'Cohort C · 640 students', pct: '85%', color: '#FFFFFF' },
          ].map((row, i) => (
            <div key={i} className="row-in" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#BFBFBF]">{row.label}</span>
                <span className="text-white font-semibold">{row.pct}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: row.pct,
                    background: `linear-gradient(90deg, ${row.color}, ${row.color}66)`,
                    animation: 'barGrow 0.9s ease-out',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-3.5">
          <div className="flex items-center gap-1.5 text-[#FFFFFF] mb-1">
            <TrendingUp size={13} />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Report</span>
          </div>
          <p className="text-xs text-[#BFBFBF]">Live, exportable, auditable</p>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-3.5">
          <div className="flex items-center gap-1.5 text-[#FFFFFF] mb-1">
            <ShieldCheck size={13} />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Proof</span>
          </div>
          <p className="text-xs text-[#BFBFBF]">Every naira, wallet to plate</p>
        </div>
      </div>
    </div>
  );
};

const VISUALS: Record<TabId, () => JSX.Element> = {
  families: FlowVisual,
  students: BudgetVisual,
  vendors: AgentVisual,
  institutions: ProgramVisual,
};

/* ---------- Section ---------- */

const Ecosystem = () => {
  const [active, setActive] = useState<TabId>('students');
  const tab = TABS.find((t) => t.id === active)!;
  const Visual = VISUALS[active];
  const TabIcon = tab.icon;

  return (
    <section id="ecosystem" className="section-padding relative overflow-hidden">
      <div className="section-divider mb-16" />

      {/* Faint pattern backdrop */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] adinkra-pattern opacity-[0.04] pointer-events-none" />

      <div className="nexr-container relative">
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <span className="eyebrow">The ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-5 text-balance">
            One network. Every role.{' '}
            <span className="text-white">Intelligent by design.</span>
          </h2>
          <p className="text-[#BFBFBF] text-base leading-relaxed">
            Four perspectives, one food-value layer. Toggle through the ecosystem
            to see how every participant wins.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12" data-reveal>
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white shadow-[0_6px_20px_rgba(0,131,208,0.35)]' : 'text-[#BFBFBF] hover:text-white'
                  }`}
                  style={
                    isActive
                      ? { background: '#0083D0' }
                      : undefined
                  }
                >
                  <Icon size={15} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div key={active} className="panel-in grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy side */}
          <div>
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
              style={{ background: `${tab.accent}14`, border: `1px solid ${tab.accent}33` }}
            >
              <TabIcon size={22} style={{ color: tab.accent }} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'Orbitron' }}>
              {tab.headline}
            </h3>

            <p className="text-[#BFBFBF] text-base leading-relaxed mb-7">{tab.description}</p>

            <ul className="space-y-3.5 mb-8">
              {tab.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${tab.accent}1F`, border: `1px solid ${tab.accent}55` }}
                  >
                    <Check size={11} style={{ color: tab.accent }} />
                  </span>
                  <span className="text-sm text-gray-300 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <a href="https://app.nekstpei.com/#/welcome" className="btn-primary inline-flex items-center gap-2 group">
              Get started as {tab.label.toLowerCase().replace(/s$/, '')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Visual side */}
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 adinkra-pattern opacity-[0.03] pointer-events-none" />
            <div className="relative">
              <Visual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
