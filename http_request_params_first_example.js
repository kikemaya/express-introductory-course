const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/hello/:username", (request, response) => {
  // String
  console.log(typeof request.params.username);
  response.send(`Hello, ${request.params.username}!`);
});

app.get("/add/:x/:y", ({ params: { x, y } }, response) => {
  console.log(x);
  console.log(y);

  const sumResult = parseInt(x) + parseInt(y);
  response.send(`Result: ${sumResult}`);
});

app.get("/users/:username/photo", (request, response) => {
  if (request.params.username === "fazt") {
    response.sendFile("./js-logo.png", { root: __dirname });
  } else {
    response.send("There is no photo of this user...");
  }
});

app.get("/name/:name/age/:age", (request, response) => {
  const { name, age } = request.params;
  response.send(`El usuario ${name} tiene ${age} años de edad.`);
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server listening on PORT ${PORT}`);
