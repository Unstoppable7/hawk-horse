const express = require("express");
const router = express.Router();

const {getTasks, createTask, getTaskById, updateTask, deleteTask} = require("../controllers/task");

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:taskID", getTaskById);
router.patch("/:taskID", updateTask);
router.delete("/:taskID", deleteTask);

module.exports = router;