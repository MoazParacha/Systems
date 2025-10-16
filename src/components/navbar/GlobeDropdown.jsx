import { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const GlobeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown if click outside (for mobile UX)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".globe-dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Detect if it's touch device (mobile)
  const isTouchDevice =
    typeof window !== "undefined" &&
    "ontouchstart" in window;

  return (
    <div
      className="relative globe-dropdown inline-block"
      {...(!isTouchDevice && {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
      })}
    >
      {/* Globe + Arrow */}
      <div
        className="flex items-center space-x-2 p-2 rounded-md cursor-pointer select-none"
        onClick={() => {
          if (isTouchDevice) setIsOpen((prev) => !prev);
        }}
      >
        <GlobeAltIcon className="w-5 h-5 text-gray-300 transition" />
        <span className="text-sm text-white">▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white text-black shadow-lg rounded-lg z-50 text-center">
          <div className="py-3">
            <Link
              to="/Mea"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              MEA
            </Link>
            <Link
              to="/Ksa"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              KSA
            </Link>
            <Link
              to="/Apac"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              APAC
            </Link>
            <Link
              to="/Global"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              Global
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobeDropdown;
