import { useState } from "react";
import {Link} from "react-router-dom";

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
          <span className="ml-2 text-xl">{open ? "›" : "‹"}</span>
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
        About <span className="ml-2 text-sm mb-1">⌵</span>
      </button>

      <div className="hidden md:block fixed left-0 top-16 w-full bg-white text-black shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40 h-85 "
      >

        <div className="flex">

          <div className="pl-30 pt-10">
            <div>
              <Link to="/Whoweare" className="text-xl font-semibold hover:text-orange-700 mt-5 block">Who we are</Link>
            </div>
            <div>
              <Link to="/Ouraccomplishments" className="text-xl font-semibold hover:text-orange-700 mt-5 block">Our accomplishments</Link>
            </div>
            <div>
              <Link to="/OurCommitmenttoESG" className="text-xl font-semibold hover:text-orange-700 mt-5 block">Our Commitment to ESG</Link>
            </div>
            <div>
              <Link to="/OurLeadership" className="text-xl font-semibold hover:text-orange-700 mt-5 block">Our Leadership</Link>
            </div>
            <div>
              <Link to="OurGlobalpresence" className="text-xl font-semibold hover:text-orange-700 mt-5 block">Our Global presence</Link>
            </div>
          </div>

          <div className="pt-10 pl-40">
            <Link className="text-xl font-semibold hover:text-orange-700 mt-5 block">Alliances</Link>
            <div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">Microsoft 
                  <span className="pl-2">→</span>
                </button>
              </div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">Temenos
                  <span className="pl-2">→</span>
                </button>
              </div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">IBM 
                  <span className="pl-2">→</span>
                </button>
              </div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">AWS 
                  <span className="pl-2">→</span>
                </button>
              </div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">SAP 
                  <span className="pl-2">→</span>
                </button>
              </div>
              <div>
                <button className="text-lg hover:text-orange-700 mt-2 block">Salesforce 
                  <span className="pl-2">→</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutDropdown;