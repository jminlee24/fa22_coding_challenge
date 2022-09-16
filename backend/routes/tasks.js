const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task({ task: req.body.task });
    task.save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */

router.put("/insert", async (req, res) => {
  try {
    await Task.create({ taskString: req.body });
    res.statusCode(200);
  } catch (error) {
    res.statusCode(400);
    res.send(error);
  }
});

/* CREATE 'DELETE' REQUEST */

router.delete("/delete", async (req, res) => {
  /*
  req.body = {id : <id>}
  req.body.id = id
  id is the id of the deleted item
  */
  try {
    await Task.deleteOne({ _id: req.body.id });
    res.statusCode(204);
    res.send("deleted successfully");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
