const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/hello/:username", (request, response) => {
  console.log(request.query);
  response.json(request.query);
});

app.get("/search", (request, response) => {
  if (request.query.q === "javascript books") {
    response.send("Javascript list of books");
  } else {
    response.send("Normal page");
  }
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found.");
});

app.listen(PORT);
console.log(`Server listening on PORT ${PORT}`);
