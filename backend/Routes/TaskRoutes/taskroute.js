const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  updateStatus,
} = require("../../Controller/TaskController/taskcontroller.js");
const {
  authenticateToken,
  authMiddleware,
} = require("../../Middleware/auth/auth.js");

const router = express.Router();

router.use(authenticateToken);

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.put("/:id", updateTask);
router.post("/update-status", authMiddleware, updateStatus);
router.delete("/:id", deleteTask);

module.exports = router;
