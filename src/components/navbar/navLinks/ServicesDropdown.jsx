import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/img1.png";

const ServicesDropdown = ({ mobile = false, onNavigate }) => {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div>
        <button
          type="button"
          className="w-full text-left text-white text-sm py-2 px-2 rounded hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 flex items-center justify-between"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span>Services</span>
          <span className="ml-2 text-xl">{open ? "›" : "‹"}</span>
        </button>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}>
          <Link to="/Digital" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Digital</Link>
          <Link to="/DataAnalytics" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Data & Analytics</Link>
          <Link to="/Cloud" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Cloud</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-white flex items-center text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
        Services <span className="ml-2 text-sm mb-1">⌵</span>
      </button>

      <div className="hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40 h-150 overflow-y-auto"
      >
        <div className="pl-10 mb-15 flex">
          {/* Left Box */}
          <div className="bg-gray-300 w-100 min-h-screen pl-10 pt-10">
            <div className="text-2xl font-bold">SERVICES</div>
            <img src={img1} alt="img" className="w-80 h-auto mt-4" />
            <div className="mt-4 text-xl font-semibold">
              <p>Why data standards matter & why</p>
              <p>they’re important</p>
            </div>
            <div className="mt-6 text-orange-600 font-semibold hover:underline">
              <button>LEARN MORE →</button>
            </div>
          </div>

          {/* Right Links */}
          <div className="pl-20 pt-5">
            <div>
              <Link to="/Digital" className="text-2xl font-semibold hover:text-orange-700">
                Digital
              </Link>
              <div className="mt-3">
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Digital Consulting & Strate5
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Digital Commerce
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Business Applications
                </button>
              </div>
            </div>

            <div className="mt-5">
              <Link to="/DataAnalytics" className="text-2xl font-semibold hover:text-orange-700">
                Data & Analytics
              </Link>
              <div className="mt-3">
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Data Modernization 
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Advanced Analytics
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Connected Intelligence
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Data Management
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Generative AI
                </button>
              </div>
            </div>

            <div className="mt-5">
              <Link to="/Cloud" className="text-2xl font-semibold hover:text-orange-700">
                Cloud
              </Link>
              <div className="mt-3">
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Cloud Operations & Migration
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                 Cloud Application
                 Development & Integration
                </button>
                <button className="block mt-3 hover:text-orange-700 font-semibold">
                  Managed Services
                </button>
              </div>
            </div>
          </div>

          <div className="pr-6 pt-5">
            <div>
            <div className=" text-xl font-semibold hover:text-orange-700">
              <Link>Digital Infrastructure Services</Link>
            </div>
            <div className="mt-7 text-xl font-semibold hover:text-orange-700">
              <Link>Securi</Link>
            </div>
            <div className="mt-7 text-xl font-semibold hover:text-orange-700">
              <Link>Emerging Technologies</Link>
            </div>
            <div className="mt-7 text-xl font-semibold hover:text-orange-700">
              <Link>Business Process Services</Link>
            </div>
            </div>

            <div className="mt-4">
            <div className=" hover:underline hover:decoration-orange-700 hover:decoration-2 hover:underline-offset-4">
              <Link>Contact Center 
              <span className="">
                →
              </span>
              </Link>
            </div>
            <div className="mt-2 hover:underline hover:decoration-orange-700 hover:decoration-2 hover:underline-offset-4">
              <Link>Digital Marketing →</Link>
            </div>
            <div className="mt-2 hover:underline hover:decoration-orange-700 hover:decoration-2 hover:underline-offset-4">
              <Link>Finance & Accounting →</Link>
            </div>
            <div className="mt-2 hover:underline hover:decoration-orange-700 hover:decoration-2 hover:underline-offset-4">
              <Link>Staff Augmentation →</Link>
            </div>

            <div className="mt-2 hover:underline hover:decoration-orange-700 hover:decoration-2 hover:underline-offset-4">
              <Link>Legal Process Outsourcing</Link>
              <span className="transition-transform duration-500 ease-in-out transform group-hover:translate-x-1 group-hover:scale-125">
                →
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] bg-orange-700 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-in-out group-hover:h-[3px]"></span>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;