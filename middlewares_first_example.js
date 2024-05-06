const express = require("express");

const PORT = 3000;
const app = express();

/* This code snippet is setting up a middleware function in an Express application. Middleware
functions in Express have access to the request object (req), the response object (res), and the
next function in the application’s request-response cycle. */
app.use((request, response, next) => {
  console.log(`The request was here before arriving to the endpoint content`);
  console.log(`Route: ${request.url} - Method: ${request.method}`);
  next(); // Call the next middleware function in the stack. If there are no more functions, end the request.
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/profile", (request, response) => {
  response.send("Profile page");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server listening on PORT ${PORT}`);
