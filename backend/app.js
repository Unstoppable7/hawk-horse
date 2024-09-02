const express = require("express");
const app = express();
const taskRouter = require("./routes/task");

app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send("Hello World");
});

app.use("/api/v1/tasks", taskRouter);

app.all("*", (req, res) => {
   res.status(404).send("Resource not found");
});

const port = 3000;

const start = async () => {
   try {
      app.listen(port, console.log(`Server is listening on port ${port}...`));
   } catch (error) {
      console.log(error);
   }
};

start();
