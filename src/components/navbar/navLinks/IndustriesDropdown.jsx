import { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../../assets/img/img2.png";

const IndustriesDropdown = ({ mobile = false, onNavigate }) => {
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
          <span>Industries</span>
          <span className="ml-2 text-sm">{open ? "▲" : "▼"}</span>
        </button>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}>
          <Link to="/Communications" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Communications</Link>
          <Link to="/BankingFinancialServices" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Banking & Financial Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-white flex items-center text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
        Industries <span className="ml-2 text-sm">▼</span>
      </button>

      <div className="hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40 h-100 overflow-y-auto">
        <div className="flex">
          <div className="bg-gray-300 w-100 h-100 pl-10 pt-9">
            <div className="text-2xl font-bold">SERVICES</div>
            <img src={img2} className="w-80 h-auto mt-4" alt="img" />
          </div>

          <div className="pl-20 pt-10">
            <Link to="/Communications" className="text-2xl font-bold hover:text-orange-700">Communications</Link>
            <Link to="/BankingFinancialServices" className="text-2xl font-bold hover:text-orange-700 mt-5 block">
              Banking & Financial Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesDropdown;
