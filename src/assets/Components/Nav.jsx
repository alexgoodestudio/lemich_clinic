import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 border-b border-gray-300 px-6 py-4">
      <div className="flex items-center justify-between">
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
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/insurance"
            >
              Insurance
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/team"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/services"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/owners"
            >
              Owners
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
                      <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/insurance"
              onClick={() => setIsOpen(false)}
            >
              Insurance
            </Link>
          </li>
          <li></li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/team"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 !no-underline font-semibold !hover:text-slate-600"
              to="/services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="!text-slate-900 font-semibold !hover:text-slate-600"
              to="/owners"
              onClick={() => setIsOpen(false)}
            >
              Owners
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-900 font-semibold hover:text-blue-600"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
