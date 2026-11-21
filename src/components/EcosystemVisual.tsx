import { Wallet, Bot, BrainCircuit, Building2, GraduationCap, HeartHandshake, CheckCircle2, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NodeDef {
  label: string;
  icon: LucideIcon;
  color: string;
  /** anchor position on the 100x100 svg stage */
  x: number;
  y: number;
  /** html chip position (percentages) */
  pos: string;
}

const NODES: NodeDef[] = [
  { label: 'Wallets', icon: Wallet, color: '#FFFFFF', x: 50, y: 10, pos: 'top-[0%] left-1/2 -translate-x-1/2' },
  { label: 'Vendor agents', icon: Bot, color: '#FFFFFF', x: 86, y: 32, pos: 'top-[24%] right-[-4%]' },
  { label: 'AI planner', icon: BrainCircuit, color: '#FFFFFF', x: 80, y: 76, pos: 'bottom-[16%] right-[-4%]' },
  { label: 'Institutions', icon: Building2, color: '#FFFFFF', x: 50, y: 92, pos: 'bottom-[-4%] left-1/2 -translate-x-1/2' },
  { label: 'Students', icon: GraduationCap, color: '#FFFFFF', x: 20, y: 76, pos: 'bottom-[16%] left-[-4%]' },
  { label: 'Families', icon: HeartHandshake, color: '#FFFFFF', x: 14, y: 32, pos: 'top-[24%] left-[-4%]' },
];

const EcosystemVisual = () => {
  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] aspect-square mx-auto lg:mx-0">
      {/* Ambient glow behind the network */}
      <div className="absolute inset-8 rounded-none bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_70%)] blur-2xl" />
      <div className="absolute inset-20 rounded-none bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-2xl" />

      {/* Orbit rings */}
      <div className="orbit-ring orbit-ring-1" />
      <div className="orbit-ring orbit-ring-2" />

      {/* Connection lines + travelling data pulses */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {NODES.map((node, i) => (
          <line
            key={`line-${i}`}
            className="flow-line"
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="0.5"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Travelling pulses — food value moving through the network */}
        <circle r="1.6" fill="#FFFFFF">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M50,50 L50,10" />
        </circle>
        <circle r="1.4" fill="#FFFFFF">
          <animateMotion dur="3.4s" begin="0.8s" repeatCount="indefinite" path="M50,50 L86,32" />
        </circle>
        <circle r="1.4" fill="#FFFFFF">
          <animateMotion dur="3.1s" begin="1.6s" repeatCount="indefinite" path="M50,50 L20,76" />
        </circle>
        <circle r="1.2" fill="#FFFFFF">
          <animateMotion dur="3.8s" begin="2.2s" repeatCount="indefinite" path="M50,50 L50,92" />
        </circle>
      </svg>

      {/* Core — glowing Nextplate chip logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <span className="pulse-ring" />
          <span className="pulse-ring" style={{ animationDelay: '1.2s' }} />
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A]/95 border border-white/25 backdrop-blur-xl shadow-[0_0_42px_rgba(255,255,255,0.45)]">
            <span className="text-base font-bold text-white tracking-tight" style={{ fontFamily: 'Orbitron' }}>
              Next
            </span>
            <span className="text-base font-bold bg-white text-black px-2 py-0.5" style={{ fontFamily: 'Orbitron' }}>
              plate
            </span>
          </div>
        </div>
      </div>

      {/* Ecosystem node chips */}
      {NODES.map((node, i) => {
        const Icon = node.icon;
        return (
          <div
            key={node.label}
            className={`absolute ${node.pos} float-soft`}
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <div className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-none bg-[#0A0A0A]/85 border border-white/10 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <span
                className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: `${node.color}1F`, border: `1px solid ${node.color}44` }}
              >
                <Icon size={13} style={{ color: node.color }} />
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-gray-300 whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating status cards */}
      <div className="absolute -top-1 sm:top-2 left-0 sm:left-2 float-soft" style={{ animationDelay: '1.1s' }}>
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0A0A0A]/90 border border-[#FFFFFF]/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <CheckCircle2 size={15} style={{ color: '#FFFFFF' }} className="flex-shrink-0" />
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-white">₦15,000 food credit sent</p>
            <p className="text-[9px] text-[#FFFFFF]">Redeemed · 2 min later</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 sm:bottom-2 right-0 sm:right-2 float-soft" style={{ animationDelay: '2.4s' }}>
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0A0A0A]/90 border border-white/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <span className="w-6 h-6 rounded-md bg-white flex items-center justify-center flex-shrink-0">
            <Zap size={12} fill="#000000" stroke="#000000" />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-white">Agent matched · 3 orders</p>
            <p className="text-[9px] text-[#FFFFFF]">Vendor fleet · live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemVisual;
