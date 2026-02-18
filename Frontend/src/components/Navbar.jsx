import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-indigo-400"
      : "text-gray-400 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#0b0f19]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-lg font-semibold tracking-tight
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          TaskFlow
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className={`text-sm font-medium transition ${isActive("/")}`}
          >
            Home
          </button>

          {/* Dashboard (only if logged in) */}
          {user && (
            <button
              onClick={() => navigate("/dashboard")}
              className={`text-sm font-medium transition ${isActive("/dashboard")}`}
            >
              Dashboard
            </button>
          )}

          {/* Profile section */}
          {user && (
            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <FaUserCircle size={20} className="opacity-80" />
                <span className="hidden sm:block text-sm">
                  {user?.name}
                </span>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-36 rounded-lg
                bg-[#111827] border border-white/10 shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2
                    text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
