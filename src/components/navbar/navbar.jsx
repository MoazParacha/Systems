import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLogo from "./navLogo";
import ServicesDropdown from "./navLinks/ServicesDropdown";
import IndustriesDropdown from "./navLinks/IndustriesDropdown";
import InsightsDropdown from "./navLinks/InsightsDropdown";
import AboutDropdown from "./navLinks/AboutDropdown";
import InvestorsDropdown from "./navLinks/InvestorsDropdown";
import SearchIcon from "./SearchIcon";
import GlobeDropdown from "./GlobeDropdown";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black px-4 py-3 md:py-4 relative z-50 border-b border-white/10">
      <div className="mx-auto max-w-7xl flex ">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Toggle Button - only visible on mobile */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors md:hidden"
          >
            {/* Hamburger Icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo (always visible) */}
          <Link to="/" className="flex items-center ">
            <NavLogo />
          </Link>
        </div>

        {/* ---------------- DESKTOP NAV ---------------- */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 pl-13">
            <ServicesDropdown />
            <IndustriesDropdown />
            <InsightsDropdown />
            <AboutDropdown />
            <Link
              to="/Careers"
              className="text-white text-sm hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded pl-40 px-1"
            >
              Careers
            </Link>
            <InvestorsDropdown />
          </div>

          <div className="flex items-center gap-4 pl-2">
            <SearchIcon />
            <GlobeDropdown />
          </div>
        </div>

        {/* ---------------- MOBILE RIGHT ICONS ---------------- */}
        <div className="md:hidden flex items-center">
          <div className="pl-30 flex">
            <div className=""><SearchIcon /></div>
            <div><GlobeDropdown /></div>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <MobileMenu
        id="mobile-menu"
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;