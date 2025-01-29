const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../../Controller/TaskController/taskcontroller.js");
const { authenticateToken } = require("../../Middleware/auth/auth.js");

const router = express.Router();

router.use(authenticateToken);

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
