const express = require("express");
const app = express();
const { tasks } = require("./dummyData");

app.get("/", (req, res) => {
   res.status(200).send("Hello World");
});

app.get("/api/v1/tasks", (req, res) => {
   res.json(tasks);
});

app.get("/api/v1/tasks/:taskID", (req, res) => {
   const idToFind = Number(req.params.taskID);
   const task = tasks.find((t) => t.id === idToFind);
   if (!task) {
      return res.status(404).send("Task does not exist");
   }
   return res.json(task);
});

app.get("/api/v1/query", (req, res) => {
   let response = [...tasks];

   const { search, limit, regex } = req.query;
   if (search) {
      response = response.filter((t) => t.title.includes(search));
   }
   if (limit) {
      response = response.slice(0, Number(limit));
   }
   
   if (response.length < 1) {
      return res.status(200).json({
         sucess: true,
         message: "No tasks matched your search",
         data: [],
      });
   }
   res.status(200).json(response);
});

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
