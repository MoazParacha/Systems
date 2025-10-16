import { useState } from "react";

const AboutDropdown = ({ mobile = false }) => {
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
          <span>About</span>
          <span className="ml-2 text-sm">{open ? "▲" : "▼"}</span>
        </button>
        <div className={`pl-3 ${open ? "block" : "hidden"}`}> 
          {/* Add about links here when available */}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-white flex items-center text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
        About <span className="ml-2 text-sm">▼</span>
      </button>
      <div className="hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40">
      </div>
    </div>
  );
};

export default AboutDropdown;
