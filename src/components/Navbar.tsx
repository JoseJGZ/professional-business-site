import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-center text-white font-black">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            EasyLoan
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            to="/services"
            className="hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        <div>
          <Link
            to="/Contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
