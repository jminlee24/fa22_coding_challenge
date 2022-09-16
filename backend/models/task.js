const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
const taskSchema = new mongoose.Schema(
  {
    task: { type: String, require: true },
  },
  { collection: "FA22Coll" }
);

module.exports = mongoose.model("task", taskSchema);
