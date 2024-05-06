const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

/* The code `app.all("/info", (request, response) => {
  response.send("Server info");
});` is setting up a route in the Express application that will respond to all HTTP methods (GET,
POST, PUT, DELETE, etc.) for the path "/info". When a request is made to the "/info" path, the
server will respond with the message "Server info". This means that regardless of the HTTP method
used in the request, the same response will be sent for the "/info" route. */
app.all("/info", (request, response) => {
  response.send("Server info");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server listening at PORT ${PORT}`);
