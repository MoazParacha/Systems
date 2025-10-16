import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchIcon = () => (
  <div className="border-l border-white-500">
    <button className="lg:pl-12 pt-2 rounded-full text-white hover:scale-120 transform transition-transform duration-200">
      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
    </button>
  </div>
);

export default SearchIcon;