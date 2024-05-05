const express = require("express");
const morgan = require("morgan");

const PORT = 3000;
const app = express();

const productsArray = [
  {
    id: 1,
    name: "Laptop",
    price: 19000,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (request, response) => {
  //.send method put our response text in the body tag
  response.send("Hello World!");
});

app.get("/products", (request, response) => {
  response.json(productsArray);
});

app.post("/products", (request, response) => {
  const newProduct = { ...request.body, id: productsArray.length + 1 };
  productsArray.push(newProduct);
  response.status(201).send(newProduct);
});

app.put("/products", (request, response) => {
  response.send("Updating products...");
});

app.delete("/products", (request, response) => {
  response.send("Deleting products...");
});

app.get("/products/:id", (request, response) => {
  console.log(request.params.id);
  const productFound = productsArray.find(
    (product) => product.id === parseInt(request.params.id)
  );
  if (!productFound) {
    return response.status(404).json({ message: "Product Not Found" });
  }
  console.log(productFound);
  response.json(productFound);
});

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
