import {
  Activity,
  CreditCard,
  Grid,
  UserPlus,
  Search,
  BellDot,
  Wallet,
  ClipboardList,
  Ticket,
  Bus,
  User,
  BaggageClaim,
  CloudFog,
  TrendingUp,
  Banknote,
  HeartIcon,
} from "lucide-react";
import "../index.css";
import { useState } from "react";

function Vendor() {
  const [activeTab, setActiveTab] = useState<
    "space" | "analytics" | "payments" | "registrations"
  >("space");

   const [active, setActive] = useState<string>("");

  const tabs = [
    { id: "hotel", label: "Hotels", color: "yellow" },
    { id: "event-centre", label: "Event Centre", color: "yellow" },
    { id: "mall", label: "Mall", color: "orange" },
    { id: "live-stream", label: "Live Stream", color: "gold" },
    { id: "cultural-map", label: "Cultural Map", color: "red" },
  ];
  const handleTabChange = (tab: typeof activeTab) => setActiveTab(tab);
  const [content, setContent] = useState('');

//   setContent(<div className='flex justify-between'>
// <div className="p-1"><h2>Hotels near the Event</h2>
// <ul style={{listStyle:'none'}}><li>IBD Intl</li>
// <li>Conference Hotel</li>
// <li>Moon Gate Hotel</li></ul></div><div><img src='/hotel_1795023.png' className='h-14 w-14 ml-100' alt='Hotel' /></div>
//   </div>)


  return (
    <div className="min-h-screen bg-white pt-4 font-[orbitron]">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-4">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold text-green-600">
          L<span className="text-red-500">í</span>
          s<span className="text-black">a</span>
          b<span className="text-red-500">í</span>
        </div>

     
        <div className="relative w-full mr-[50%] sm:w-96 ">
          <input
            className="w-[700px] mr-[50%] h-10 pl-10 pr-12 border border-green-600 focus:outline-none focus:ring-2 "
            placeholder="Search for anything..."
            type="text"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 text-gray-500" />
          
        <span className="absolute flex ml-[150%] left-[100%] top-1/2 -translate-y-1/2 p-2 rounded-full">
           <HeartIcon className="text-gray-500 w-7 h-7 mr-8 hover:text-[black]"/> <BellDot className="text-gray-500 w-7 h-7 hover:text-[black] " /> 
          </span>
          </div>
      </div>

      {/* BODY */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6 px-4">
      
        <div className="w-full lg:w-1/6 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-10">
          {/* Navigation */}
          <div className="flex lg:flex-col gap-4 xl:gap-10 space-y-4">
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("space")}
            >
              <Grid className="w-4 h-4 text-green-600" />
              <span>Space</span>
            </button>
             <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("space")}
            >
              <User className="w-4 h-4 text-green-600" />
              <span>Profile</span>
            </button>
             <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("space")}
            >
              <Ticket className="w-4 h-4 text-green-600" />
              <span>Ticketing</span>
            </button> 
             <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("space")}
            >
              <Bus className="w-4 h-4 text-green-600" />
              <span>Transport</span>
            </button>
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("analytics")}
            >
              <Activity className="w-4 h-4 text-green-600" />
              <span>Analytics</span>
            </button>
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("payments")}
            >
              <CreditCard className="w-4 h-4 text-green-600" />
              <span>Payments</span>
            </button>
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-[yellow]"
              onClick={() => handleTabChange("registrations")}
            >
              <UserPlus className="w-4 h-4 text-green-600" />
              <span>Registrations</span>
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className=" space-y-6 overflow-auto bg-[whitesmoke] p-6 rounded-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-black">
            Hi, Chief Olu!
          </h1>

          {/* TAB CONTENT */}
          {activeTab === "space" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
             
              <div
                style={{ backgroundImage: 'url("/lx4x_louo_211015.jpg")' }}
                className="bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-white relative"
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-2xl font-bold">
                    Space Allocation
                  </div>
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    <CloudFog />
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                style={{ backgroundImage: 'url("/4809393.jpg")' }}
                className="bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-white relative">
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-2xl font-bold">
                    Sales Analytics
                  </div>
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    <TrendingUp />
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                style={{ backgroundImage: 'url("/5205483.jpg")' }}
                className="bg-cover bg-center p-6 rounded-lg h-60 sm:h-80 text-white relative"
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-2xl font-bold">Payments</div>
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    <Wallet />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
             <div className="flex gap-4">
              <div
                style={{ backgroundImage: 'url("/lisabi back.png")' }}
                className="bg-cover bg-center p-6 bg-green-700 rounded-lg  h-40 sm:h-40 text-white relative"
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    1,250
                  </div>
                  <div  className = 'bg-white p-2 rounded-full' ><BaggageClaim style={{color:'black'}} /></div>
                  {/* <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    8%
                  </div> */}
                </div>
                <p className="relative text-sm mt-2">First timers</p>
              </div>

              <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-[yellow] bg-cover bg-center p-6 rounded-lg  h-40 sm:h-40 text-black font-bolder relative">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    5,700
                  </div>
                  <div className='bg-white p-2 rounded-full'><ClipboardList style={{ color: "black" }}/></div>
                </div>
                <p className="relative text-sm mt-2 text-black">
                  Total Registered
                </p>
              </div>

                <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-white font-bolder relative bg-orange-600">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                  NGN 150,000
                  </div><div className='bg-white p-2 rounded-full'> <Banknote style={{ color: "black" }} /></div> 
                </div>
                <p className="relative text-sm mt-2 text-white">
                  Total Recorded
                </p>
              </div>

              
            </div>
            <div className ='bg-[white] h-60 mt-10 rounded-sm'>
                <div className="flex gap-20  rounded-sm p-6 overflow-x-auto "> {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            onClick={() => setActive(tab.id)}
            className={`cursor-pointer pb-2 border-b-4 transition-all ${
              active === tab.id
                ? `border-${tab.color}-500 font-bold text-${tab.color}-600`
                : "border-transparent text-gray-600"
            }`}
          >
            {tab.label}
          </div>
        ))}</div>
        {content}
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="flex gap-4">
              <div
                style={{ backgroundImage: 'url("/lisabi back.png")' }}
                className="bg-cover bg-center p-6 bg-green-700 rounded-lg  h-40 sm:h-40 text-white relative"
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    And here too
                  </div>
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    8%
                  </div>
                </div>
                <p className="relative text-sm mt-2">Total Earn Spend</p>
              </div>

              <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-[yellow] bg-cover bg-center p-6 rounded-lg  h-40 sm:h-40 text-black font-bolder relative">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    Some text here
                  </div>
                </div>
                <p className="relative text-sm mt-2 text-black">
                  Total Recorded
                </p>
              </div>

                <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-green-700 relative bg-white">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    Some text here
                  </div>
                </div>
                <p className="relative text-sm mt-2 text-black">
                  Total Recorded
                </p>
              </div>
            </div>
          )}
          {activeTab === "registrations" && (
             <div className="flex gap-4">
              <div
                style={{ backgroundImage: 'url("/lisabi back.png")' }}
                className="bg-cover bg-center p-6 bg-green-700 rounded-lg  h-40 sm:h-40 text-white relative"
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    And here too
                  </div>
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    8%
                  </div>
                </div>
                <p className="relative text-sm mt-2">Total Earn Spend</p>
              </div>

              <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-[yellow] bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-black font-bolder relative">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    Some text here
                  </div>
                </div>
                <p className="relative text-sm mt-2 text-black">
                  Total Recorded
                </p>
              </div>

                <div style={{ backgroundImage: 'url("/lisabi back.png")' }} className="bg-cover bg-center p-6 rounded-lg h-40 sm:h-40 text-[yellow] relative bg-orange-600">
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-xl sm:text-3xl font-bolder">
                    Some text here
                  </div>
                </div>
                <p className="relative text-sm mt-2 text-white">
                  Total Recorded
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vendor;
