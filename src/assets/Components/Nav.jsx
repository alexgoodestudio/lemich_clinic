import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "!text-slate-900 !no-underline font-semibold transition-colors hover:!text-slate-600";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/insurance", label: "Insurance" },
    { to: "/team", label: "Team" },
    { to: "/services", label: "Services" },
    { to: "/owners", label: "Owners" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-slate-50 border-b border-gray-300 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="!text-slate-900 font-bold text-xl bg-amber-300 px-4 py-4 !no-underline"
        >
          The Lemich Clinic
        </Link>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClasses}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
