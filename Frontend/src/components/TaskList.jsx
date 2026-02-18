import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);

  if (!tasks.length) {
    return (
      <div className="bg-[#0f172a] border border-white/5 rounded-xl p-10 text-center">
        <p className="text-gray-400">
          No tasks yet. Add your first task.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {tasks.map((task, index) => {
          const completed = task.status === "completed";

          return (
            <motion.div
              key={task._id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="relative bg-[#0f172a]
                border border-white/5
                rounded-xl p-5
                flex flex-col md:flex-row
                md:items-center md:justify-between
                gap-4
                transition-all duration-300
                hover:border-indigo-400/40
                hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white">
                  {task.title}
                </h3>

                {task.description && (
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    {task.description}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-3">
                  {completed ? (
                    <FaCheckCircle className="text-green-400 text-sm" />
                  ) : (
                    <FaClock className="text-amber-400 text-sm" />
                  )}

                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full
                    ${
                      completed
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => onEdit(task)}
                  className="flex items-center gap-2 px-3 py-2
                  text-sm font-medium rounded-lg
                  text-indigo-400
                  bg-indigo-500/10
                  border border-indigo-500/20
                  hover:bg-indigo-500/20
                  transition"
                >
                  <FaEdit />
                  Edit
                </button>

                <button
                  onClick={() => setDeleteId(task._id)}
                  className="flex items-center gap-2 px-3 py-2
                  text-sm font-medium rounded-lg
                  text-red-400
                  bg-red-500/10
                  border border-red-500/20
                  hover:bg-red-500/20
                  transition"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ConfirmModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          onDelete(deleteId);
          setDeleteId(null);
        }}
      />
    </>
  );
};

export default TaskList;
