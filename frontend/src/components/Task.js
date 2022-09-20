import React, { useState, useEffect } from "react";
import { deleteTask, updateTask } from "../services/taskServices";

const Task = ({ task }) => {
  /*
  task = {task:<String:taskName>, _id:<ObjectID:uniqueID>}
  */

  const [taskName, setTaskName] = useState(task.task);
  const [updating, setUpdating] = useState(false);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  /* CREATE UPDATE OPERATION */
  const handleUpdate = (event) => {
    event.preventDefault();
    if (updating) {
      if (taskName === task.task || taskName.length < 1) {
        alert("No change detected!");
        return;
      }
      updateTask(task._id, taskName).then((res) => {
        alert("task updated!");
      });
    }
    setUpdating(!updating);
  };

  //CANCEL UPDATE OPERATION
  const handleCancel = (event) => {
    event.preventDefault();
    setUpdating(!updating);
    setTaskName(task.task);
  };
  /* CREATE DELETE OPERATION*/
  const handleDelete = (event) => {
    event.preventDefault();
    deleteTask(task._id).then((res) => {
      alert("task deleted!");
    });
  };

  return (
    <div className="pb-3 pt-1">
      {updating ? (
        <input
          className="text-center"
          type="text"
          placeholder="Type your task here!"
          maxLength={30}
          onChange={handleInputChange}
          value={taskName}
        ></input>
      ) : (
        <p className="text-center">{task.task}</p>
      )}
      <div className="centered">
        {updating ? (
          <button onClick={handleCancel}>CANCEL</button>
        ) : (
          <button onClick={handleDelete}>DELETE</button>
        )}
        <button onClick={handleUpdate}>UPDATE</button>
      </div>
    </div>
  );
};

export default Task;
