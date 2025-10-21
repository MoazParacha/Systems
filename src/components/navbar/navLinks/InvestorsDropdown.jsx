import { useState } from "react";
import { Link } from "react-router-dom";
import img4 from "../../../assets/img/img4.png";

const InvestorsDropdown = ({ mobile = false, onNavigate }) => {
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
          <span>Investors</span>
          <span className="ml-2 text-xl">{open ? "›" : "‹"}</span>  
        </button>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}> 
          <img src={img4} alt="img" className="w-80 h-auto mt-4" />
        </div>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}>
          <Link to="/InvestorRelations" onClick={onNavigate} className="block text-white/90 text-xl py-2 hover:text-white">Investor Relations</Link>
          <Link to="/FinancialReports" onClick={onNavigate} className="block text-white/90 text-xl py-2 hover:text-white">Financial Reports</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
          <button className="text-white flex items-center text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
          Investors <span className="ml-2 text-sm mb-1">⌵</span>
          </button>
    
          <div className="
            hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-300 z-40 h-150 overflow-y-auto"
          >
            <div className="pl-10 mb-15 flex">
              {/* Left Box */}
              <div className="bg-gray-300 w-100 min-h-screen pl-10 pt-10">
                <div className="text-2xl font-bold">Investors</div>
                <img src={img4} alt="img" className="h-70 pl-3 w-auto mt-4" />
                <div className="mt-4 text-xl font-semibold">
                  <p>Hasan Waleed Majal (Company</p>
                  <p>Secretary)</p>
                  <p>Investor_relations@systemsltd.com</p>
                  <p>Hasan.waleed@systemsltd.com</p>
                </div>
                <div className="mt-4 text-orange-600 font-semibold hover:underline">
                  <button>LEARN MORE →</button>
                </div>
              </div>
    
              {/* Right Links */}
              <div className="pl-20 flex">
                <div className="pt-10">
                  <div><Link className="text-xl font-semibold hover:text-orange-700">Investor Relations</Link></div>
                  <div><Link className="text-xl font-semibold hover:text-orange-700 mt-5 block">Governance</Link></div>
                  <div><Link className="text-xl font-semibold hover:text-orange-700 mt-5 block">Company profile</Link></div>
                  <div><Link className="text-xl font-semibold hover:text-orange-700 mt-5 block">Financial Reports</Link></div>
                </div>
                <div className="pt-10 pl-30">
                  <div><Link className="text-xl font-semibold hover:text-orange-700">Election of Board of directors</Link></div>
                  <div><Link className="text-xl font-semibold hover:text-orange-700 mt-5 block">Notices & Quick Links</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default InvestorsDropdown;
