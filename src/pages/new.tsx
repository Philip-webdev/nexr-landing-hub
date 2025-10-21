import { Activity, CreditCard, Grid, UserPlus, Search, BellDot, Wallet, CloudFog, TrendingUp } from 'lucide-react';
import '../index.css';
import { useState } from 'react';

function Vendor() {
  const [activeTab, setActiveTab] = useState<'space' | 'analytics' | 'payments' | 'registrations'>('space');
  const handleTabChange = (tab: typeof activeTab) => setActiveTab(tab);

  return (
    <div className="min-h-screen bg-white pt-4 font-[Lexend]">
      {/* ✅ Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold text-green-600">
          L<span className="text-red-500">í</span>s<span className="text-black">a</span>b<span className="text-red-500">í</span>
        </div>

        {/* Search + Bell */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
          <input
            placeholder="Search for anything..."
            className="w-full h-10 pl-10 pr-12 border border-gray-300 rounded-lg text-sm"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-black p-2 rounded-full">
            <BellDot className="text-yellow-100" />
          </span>
        </div>
      </div>

      {/* ✅ Layout wrapper */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6 px-4">
        {/* Sidebar */}
        <div className="flex lg:flex-col justify-around lg:justify-start lg:w-1/6 bg-yellow-50 rounded-lg p-4 gap-6">
          <div className="hidden lg:block bg-yellow-100 rounded-full w-20 h-20 mx-auto">
            <img src="/app_14278234.png" alt="profile" />
          </div>
          <button onClick={() => handleTabChange('space')} className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-green-600" /> <span>Space</span>
          </button>
          <button onClick={() => handleTabChange('analytics')} className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" /> <span>Analytics</span>
          </button>
          <button onClick={() => handleTabChange('payments')} className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-green-600" /> <span>Payments</span>
          </button>
          <button onClick={() => handleTabChange('registrations')} className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-green-600" /> <span>Registrations</span>
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-6 overflow-auto">
          <h1 className="text-2xl font-bold text-black">Hi, Chief Olu!</h1>

          {activeTab === 'space' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* ✅ Example card */}
              <div
                className="relative rounded-lg h-[300px] w-full p-6 text-white flex flex-col justify-end"
                style={{ backgroundImage: 'url("/lx4x_louo_211015.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-xl font-bold">Space Allocation</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    <CloudFog />
                  </span>
                </div>
              </div>

              {/* Drop in other cards like Sales, Payments here... */}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Your analytics cards */}
            </div>
          )}

          {activeTab === 'payments' && <div>Payments content</div>}
          {activeTab === 'registrations' && <div>Registrations content</div>}
        </div>
      </div>
    </div>
  );
}

export default Vendor;
