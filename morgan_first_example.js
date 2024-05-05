const express = require("express");
const morgan = require("morgan");

const PORT = 3000;
const app = express();

app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log("Server listening on PORT " + PORT);
