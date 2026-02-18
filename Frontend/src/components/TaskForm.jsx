import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlusCircle, FaEdit } from "react-icons/fa";

const TaskForm = ({ onSave, editingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "pending",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSave(formData);

    setFormData({
      title: "",
      description: "",
      status: "pending",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#0f172a] border border-white/5 rounded-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        {editingTask ? (
          <FaEdit className="text-indigo-400" />
        ) : (
          <FaPlusCircle className="text-indigo-400" />
        )}

        <h2 className="text-lg font-medium text-white">
          {editingTask ? "Edit Task" : "Add New Task"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="text-xs uppercase tracking-wide text-gray-400">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg px-4 py-3
            bg-[#020617]
            border border-white/10
            text-gray-200 placeholder-gray-500
            focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400
            transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-xs uppercase tracking-wide text-gray-400">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Optional description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="mt-2 w-full rounded-lg px-4 py-3
            bg-[#020617]
            border border-white/10
            text-gray-200 placeholder-gray-500
            focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400
            resize-none transition"
          />
        </div>

        {/* Status */}
        <div>
          <label className="text-xs uppercase tracking-wide text-gray-400">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg px-4 py-3
            bg-[#020617]
            border border-white/10
            text-gray-200
            focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400
            transition"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2
          px-6 py-3 rounded-lg font-medium
          bg-gradient-to-r from-indigo-500 to-purple-500
          hover:from-indigo-400 hover:to-purple-400
          text-white
          shadow-lg shadow-indigo-500/20
          transition-all duration-300"
        >
          {editingTask ? <FaEdit /> : <FaPlusCircle />}
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </motion.div>
  );
};

export default TaskForm;
