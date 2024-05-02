const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  //.send method put our response text in the body tag
  response.send("Hello World!");
});

app.get("/about", (request, response) => {
  response.send("About...");
});

app.get("/weather", (request, response) => {
  response.send("The current weather is nice");
});

/* The `app.use` method in the provided code snippet is setting up a middleware function that will be
executed for any request that does not match any of the defined routes (i.e., for any route that is
not "/" or "/about" or "/weather"). */
app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
