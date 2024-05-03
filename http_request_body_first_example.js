const express = require("express");

const PORT = 3000;
const app = express();

/* The line `app.use(express.text());` in the provided JavaScript code is setting up middleware in the
Express application to parse incoming request bodies as text. This middleware is used to handle
text-based request bodies, such as those sent in plain text format. It allows the application to
parse and work with text data sent in requests. */
app.use(express.text());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/user", (request, response) => {
  console.log(request.body);
  response.send("New user successfully created");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log("Server listening on PORT " + PORT);
