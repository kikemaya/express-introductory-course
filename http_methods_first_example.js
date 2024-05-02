const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  //.send method put our response text in the body tag
  response.send("Hello World!");
});

app.get("/products", (request, response) => {
  response.send("Product list");
});

app.post("/products", (request, response) => {
  response.status(201).send("Product successfully created!");
});

app.put("/products", (request, response) => {
  response.send("Product information successfully updated!");
});

app.delete("/products", (request, response) => {
  response.send("Product successfully deleted!");
});

app.patch("/products", (request, response) => {
  response.send("Product datum successfully updated!");
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
