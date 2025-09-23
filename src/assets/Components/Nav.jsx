import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center bg-slate-50 justify-between px-6 py-4  border border-b-gray-500">
      <Link className="!text-slate-900 font-bold text-xl bg-amber-300 p-4 text-decoration-none" to="/">
        The Lemich Clinic
      </Link>

      <ul className="flex gap-6">
        <li>
          <Link className="!text-slate-900 font-semibold hover:text-blue-600" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="!text-slate-900 font-semibold hover:text-blue-600" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="!text-slate-900 font-semibold hover:text-blue-600" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="!text-slate-900 font-semibold hover:text-blue-600" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
