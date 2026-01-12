import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
            E-L
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            EasyLoan
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-12 text-lg font-medium text-slate-600">
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

        <Link
          to="/contact"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-sm"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
