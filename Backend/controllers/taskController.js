const Task = require("../models/Task");


/*
   @desc    Get all tasks of logged-in user
   @route   GET /api/tasks
   @access  Private
*/
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};


/*
   @desc    Create new task
   @route   POST /api/tasks
   @access  Private
*/
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      res.status(400);
      throw new Error("Title is required");
    }

    const task = await Task.create({
      title,
      description,
      status,
      user: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {
    next(error);
  }
};


/*
   @desc    Update task
   @route   PUT /api/tasks/:id
   @access  Private
*/
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    // Ownership check
    if (task.user.toString() !== req.user.id.toString()) {
      res.status(403);
      throw new Error("Not authorized");
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {
    next(error);
  }
};


/*
   @desc    Delete task
   @route   DELETE /api/tasks/:id
   @access  Private
*/
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    // Ownership check
    if (task.user.toString() !== req.user.id.toString()) {
      res.status(403);
      throw new Error("Not authorized");
    }

    await task.deleteOne();

    res.json({ message: "Task deleted successfully" });

  } catch (error) {
    next(error);
  }
};
