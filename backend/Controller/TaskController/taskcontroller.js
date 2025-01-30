const { TaskModel } = require("../../Models/index.js");
const {
  validateTask,
  validateTaskStatus,
} = require("../../Utils/Validate/validate.js");

const createTask = async (req, res) => {
  try {
    const { error } = validateTask(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        message: "All fields are required.",
        errors: error.details.map((err) => err.message),
      });
    }

    const { title, description, status } = req.body;
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized. User ID missing." });
    }
    const task = await TaskModel.create({
      title,
      description,
      status,
      userId: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

require("dotenv").config();

const getTasks = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized. User ID missing." });
    }

    const tasks = await TaskModel.findAll({ where: { UserId: req.user.id } });

    const taskStatuses = process.env.TASK_STATUSES.split(",");

    const categorizedTasks = taskStatuses.map((status) => ({
      id: status,
      title: status.replace("-", " "),
      tasks: [],
    }));

    tasks.forEach((task) => {
      const category = categorizedTasks.find((c) => c.id === task.status);
      if (category) {
        category.tasks.push({
          id: task.id,
          title: task.title,
          description: task.description,
        });
      }
    });

    res.json(categorizedTasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = await TaskModel.findOne({
      where: { id, UserId: req.user.id },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.update({ title, description, status });
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task", error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findOne({
      where: { id, userId: req.user.id },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.destroy();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { error } = validateTaskStatus(req.body);
    if (error) {
      return res.status(400).json({
        message: "Invalid status.",
        errors: error.details.map((err) => err.message),
      });
    }

    const { taskId, status } = req.body;

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized. User ID missing." });
    }

    const task = await TaskModel.findOne({ where: { id: taskId } });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    task.status = status;
    await task.save();

    res.status(200).json({
      message: "Task status updated successfully.",
      task,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task status", error: error.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask, updateStatus };
