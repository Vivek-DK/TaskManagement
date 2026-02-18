import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      await login(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b0f19] overflow-hidden text-white">

      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative bg-[#111827] border border-white/5 rounded-2xl p-8 w-full max-w-md"
      >
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">
          Welcome back
        </h2>

        <p className="text-center text-gray-400 mt-1 mb-6 text-sm">
          Login to continue managing your tasks
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 mb-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-xs uppercase tracking-wide text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg px-4 py-3
              bg-[#020617]
              border border-white/10
              text-gray-200 placeholder-gray-500
              focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400
              transition"
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg px-4 py-3
              bg-[#020617]
              border border-white/10
              text-gray-200 placeholder-gray-500
              focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400
              transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-medium
            bg-gradient-to-r from-indigo-500 to-purple-500
            hover:from-indigo-400 hover:to-purple-400
            shadow-lg shadow-indigo-500/20
            transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
