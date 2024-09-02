let { tasks } = require("../dummyData");

const getTasks = (req, res) => {
   let response = [...tasks];
   const { title, limit } = req.query;

   if (title) {
      response = response.filter((t) => t.title.includes(title));
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
   res.status(200).json({ success: true, data: response });
};

const createTask = (req, res) => {
   const { title, description, expiration } = req.body;

   if (!title) {
      return res
         .status(400)
         .json({ sucess: false, msg: "Please provide a title" });
   }
   newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      expiration: expiration,
   };

   tasks.push(newTask);
   res.status(201).json({ sucess: true, task: newTask });
};

const getTaskById = (req, res) => {
   const idToFind = Number(req.params.taskID);
   const task = tasks.find((t) => t.id === idToFind);
   if (!task) {
      return res.status(404).send("Task does not exist");
   }
   return res.json(task);
};

const updateTask = (req, res) => {
   const idToFind = Number(req.params.taskID);
   const task = tasks.find((t) => t.id === idToFind);

   const { title, description, expiration } = req.body;

   if (!task) {
      return res.status(404).send("Task does not exist");
   }

   task.title = title;
   task.description = description;
   task.expiration = expiration;

   return res
      .status(200)
      .json({
         success: true,
         msg: `Task with id ${idToFind} had been updated`,
      });
};

const deleteTask = (req, res) => {
   const idToFind = Number(req.params.taskID);
   const task = tasks.find((t) => t.id === idToFind);

   if (!task) {
      return res.status(404).send("Task does not exist");
   }

   tasks = tasks.filter((task) => task.id !== idToFind);

   return res
      .status(200)
      .json({ sucess: true, msg: `Task with id ${idToFind} has been deleted` });
};

module.exports = {
   getTasks,
   createTask,
   getTaskById,
   updateTask,
   deleteTask,
};
