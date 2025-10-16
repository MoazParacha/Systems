import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const GlobeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative globe-dropdown inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Globe + Arrow (Attached, No Background) */}
      <div className="flex items-center space-x-2 p-2 rounded-md cursor-pointer">
        <GlobeAltIcon className="w-5 h-5 text-gray-300 transition" />
        <span className="text-sm text-white">▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-1 w-40 bg-white text-black shadow-lg rounded-lg z-50 text-center"
        >
          <div className="py-3">
            <Link
              to="/Mea"
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              MEA
            </Link>
            <Link
              to="/Ksa"
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              KSA
            </Link>
            <Link
              to="/Apac"
              className="block text-sm font-semibold py-2 hover:text-orange-700"
            >
              APAC
            </Link>
            <Link
              to="/Global"
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
