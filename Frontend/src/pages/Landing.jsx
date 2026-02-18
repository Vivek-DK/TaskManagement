import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaLayerGroup
} from "react-icons/fa";


const Landing = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Manage tasks with
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                clarity and focus
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-lg">
              A modern task management dashboard designed for speed,
              simplicity, and productivity. Organize work efficiently and
              stay focused without distractions.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/login"
                className="px-6 py-3 rounded-lg font-medium
                bg-gradient-to-r from-indigo-500 to-purple-500
                hover:from-indigo-400 hover:to-purple-400
                shadow-lg shadow-indigo-500/20 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 rounded-lg font-medium
                border border-white/10
                hover:bg-white/5 transition"
              >
                Register
              </Link>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-8
              shadow-[0_0_40px_rgba(99,102,241,0.15)]">

              <h3 className="text-lg font-medium mb-8 text-white">
                Why use TaskFlow?
              </h3>

              <ul className="space-y-6">

                <li className="flex items-start gap-4">
                  <FaLayerGroup className="text-indigo-400 mt-1 text-lg" />
                  <div>
                    <p className="text-white font-medium">
                      Clean Interface
                    </p>
                    <p className="text-gray-400 text-sm">
                      Distraction-free workspace focused on productivity.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FaBolt className="text-purple-400 mt-1 text-lg" />
                  <div>
                    <p className="text-white font-medium">
                      Fast Performance
                    </p>
                    <p className="text-gray-400 text-sm">
                      Create and manage tasks instantly without delays.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FaRocket className="text-pink-400 mt-1 text-lg" />
                  <div>
                    <p className="text-white font-medium">
                      Real-time Filtering
                    </p>
                    <p className="text-gray-400 text-sm">
                      Search and organize tasks in real time.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FaShieldAlt className="text-green-400 mt-1 text-lg" />
                  <div>
                    <p className="text-white font-medium">
                      Secure Authentication
                    </p>
                    <p className="text-gray-400 text-sm">
                      JWT-based authentication for protected access.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FaCheckCircle className="text-teal-400 mt-1 text-lg" />
                  <div>
                    <p className="text-white font-medium">
                      Scalable Architecture
                    </p>
                    <p className="text-gray-400 text-sm">
                      Built using modern MERN stack principles.
                    </p>
                  </div>
                </li>

              </ul>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
