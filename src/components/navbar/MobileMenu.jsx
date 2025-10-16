import { Link } from "react-router-dom";
import ServicesDropdown from "./navLinks/ServicesDropdown";
import IndustriesDropdown from "./navLinks/IndustriesDropdown";
import InsightsDropdown from "./navLinks/InsightsDropdown";
import AboutDropdown from "./navLinks/AboutDropdown";
import InvestorsDropdown from "./navLinks/InvestorsDropdown";

const MobileMenu = ({ id, isOpen, onNavigate }) => {
  return (
    <div
      id={id}
      className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="px-4 pb-4 pt-2 border-t border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/70">
        <nav className="flex flex-col gap-3" role="menu" aria-label="Mobile navigation">
          {/* Core nav items: render dropdowns as simple entries or keep their own logic if responsive */}
          <div role="none">
            <ServicesDropdown mobile onNavigate={onNavigate} />
          </div>
          <div role="none">
            <IndustriesDropdown mobile onNavigate={onNavigate} />
          </div>
          <div role="none">
            <InsightsDropdown mobile onNavigate={onNavigate} />
          </div>
          <div role="none">
            <AboutDropdown mobile onNavigate={onNavigate} />
          </div>
          <Link
            to="/Careers"
            onClick={onNavigate}
            className="text-white text-sm py-2 px-2 rounded hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            role="menuitem"
          >
            Careers
          </Link>
          <div role="none">
            <InvestorsDropdown mobile onNavigate={onNavigate} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;


