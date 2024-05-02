const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

/* This code snippet is setting up a route in the Express application for handling GET requests to the
"/myfile" endpoint. When a GET request is made to "/myfile", the server responds by sending the file
"js-logo.png" back to the client. The `sendFile` method is used to send files as a response. In this
case, the file "js-logo.png" is being sent from the current directory (`__dirname`) as the root
directory. */
app.get("/myfile", (request, response) => {
  response.sendFile("./js-logo.png", {
    root: __dirname,
  });
});

app.get("/user", (request, response) => {
  response.json({
    name: "John",
    lastName: "Doe",
    age: 21,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "Some street 123",
    },
  });
});

app.get("/isalive", (request, response) => {
  response.sendStatus(204);
});

app.listen(PORT);

console.log(`Server listening on PORT ${PORT}`);
