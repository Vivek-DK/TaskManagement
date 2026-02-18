import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) {
        const { data } = await API.put(
          `/tasks/${editingTask._id}`,
          taskData
        );

        setTasks((prev) =>
          prev.map((t) =>
            t._id === data._id ? data : t
          )
        );

        setEditingTask(null);
      } else {
        const { data } = await API.post("/tasks", taskData);
        setTasks((prev) => [data, ...prev]);
      }
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

 
  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };


  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || task.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0b0f19] text-gray-200 overflow-x-hidden"
    > 
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-semibold">
            Welcome back, <span className="text-indigo-400">{user?.name}</span>
          </h1>
          <p className="text-gray-400 mt-1">
            Manage your tasks with clarity and focus.
          </p>
        </motion.div>

        {/* Floating Search Bar */}
        <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 mb-8 glow">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-lg px-4 py-3 text-black focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 transition"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Form - Primary */}
          <div className="lg:col-span-1">
            <div className="bg-[#111827] border border-white/10 rounded-xl p-6 glow">
              <TaskForm
                onSave={handleSaveTask}
                editingTask={editingTask}
              />
            </div>
          </div>

          {/* Tasks - Secondary */}
          <div className="lg:col-span-2">
            <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
              {loading ? (
                <p className="text-gray-400">Loading tasks...</p>
              ) : (
                <TaskList
                  tasks={filteredTasks}
                  onEdit={setEditingTask}
                  onDelete={handleDeleteTask}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>

  );
};

export default Dashboard;



