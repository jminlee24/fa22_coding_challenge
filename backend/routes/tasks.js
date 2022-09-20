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

router.put("/update", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.body._id },
      { task: req.body.task },
      {
        new: true,
      }
    );
    console.log(task);
    res.send(task);
  } catch (error) {
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
    await Task.findOneAndDelete({ id: req.body._id });
    res.send("deleted successfully");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
