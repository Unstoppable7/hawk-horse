const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.status(200).send("Hello World");
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
