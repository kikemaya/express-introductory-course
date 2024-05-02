const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.sendFile("./static/index.html", {
    root: __dirname,
  });
});

app.listen(PORT);

console.log(`Server listening on PORT ${PORT}`);
