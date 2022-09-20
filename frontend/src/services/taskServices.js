import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl + "/create", { task });
}

/* CREATE 'PUT' FUNCTIONS */
export function updateTask(_id, task) {
  return axios.put(apiUrl + "/update", { _id, task });
}
/* CREATE 'DELETE' FUNCTIONS */
export function deleteTask(_id) {
  return axios.delete(apiUrl + "/delete", { _id });
}
