const { Router } = require("express");

const router = Router();

router.get("/", (request, response) => {
  response.send("Hello World!");
});

router.all("/about", (request, response) => {
  const title = "This page is written using express js";
  response.render("index", { title });
});

router.get("/dashboard", (request, response) => {
  response.send("Dashboard page");
});

module.exports = router;
