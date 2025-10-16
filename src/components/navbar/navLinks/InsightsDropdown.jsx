import { useState } from "react";
import { Link } from "react-router-dom";
import img3 from "../../../assets/img/img3.png";

const InsightsDropdown = ({ mobile = false, onNavigate }) => {
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
          <span>Insights</span>
          <span className="ml-2 text-sm">{open ? "▲" : "▼"}</span>
        </button>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}>
          <Link to="/Blogs" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Blogs</Link>
          <Link to="/Newsroom" onClick={onNavigate} className="block text-white/90 text-sm py-2 hover:text-white">Newsroom</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-white flex items-center text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
        Insights <span className="ml-2 text-sm">▼</span>
      </button>

      <div className="hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40">
        <div className="flex">
          <div className="bg-gray-300 w-100 h-100 pl-10 pt-9">
            <div className="text-2xl font-bold">SERVICES</div>
            <img src={img3} alt="img" className="w-80 h-auto mt-4" />
          </div>

          <div className="pl-20 pt-10">
            <Link to="/Blogs" className="text-2xl font-bold hover:text-orange-700">Blogs</Link>
            <Link to="/Newsroom" className="text-2xl font-bold hover:text-orange-700 mt-5 block">Newsroom</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsDropdown;
