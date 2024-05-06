const express = require("express");

const PORT = 3000;
const app = express();

// Logger
app.use((request, response, next) => {
  console.log(`Route: ${request.url} - Method: ${request.method}`);
  next();
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/profile", (request, response) => {
  response.send("Profile page");
});

app.get("/about", (request, response) => {
  response.send("About page");
});

// isAuthenticated
app.use((request, response, next) => {
  if (request.query.login === "mail@example.com") {
    next();
  } else {
    response.send("Not authorized");
  }
});

app.get("/dashboard", (request, response) => {
  response.send("Dashboard page");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server listening on PORT ${PORT}`);
