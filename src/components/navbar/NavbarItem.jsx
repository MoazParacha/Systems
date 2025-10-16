import { Link } from "react-router-dom";

const baseClasses =
  "text-white text-sm hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1";

const NavbarItem = ({ to, children, onClick, className = "" }) => {
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default NavbarItem;


