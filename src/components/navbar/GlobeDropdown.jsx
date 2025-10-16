import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const GlobeDropdown = () => (
  <div className="flex items-center space-x-2">
    <button className="p-2 rounded-full transform transition-transform duration-200 hover:scale-110">
      <GlobeAltIcon className="w-5 h-5 text-gray-300 hover:text-white" />
    </button>

    <div className="relative group">
      <span className="text-sm text-white pb-5 cursor-pointer">▼</span>
      <div className="fixed w-40 bg-white h-45 text-black shadow-lg rounded-lg
        absolute transform -translate-x-1/2 text-center
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 z-40">
        <div className="pt-4">
          <Link to="/Mea" className="block text-xl font-semibold hover:text-orange-700">MEA</Link>
          <Link to="/Ksa" className="block text-xl font-semibold hover:text-orange-700 mt-3">KSA</Link>
          <Link to="/Apac" className="block text-xl font-semibold hover:text-orange-700 mt-3">APAC</Link>
          <Link to="/Global" className="block text-xl font-semibold hover:text-orange-700 mt-3">Global</Link>
        </div>
      </div>
    </div>
  </div>
);

export default GlobeDropdown;
