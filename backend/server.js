const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./db");
const tasks = require("./routes/tasks");

connection();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
