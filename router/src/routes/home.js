const { Router } = require("express");

const router = Router();

router.all("/about", (request, response) => {
  response.send("About page");
});

router.get("/dashboard", (request, response) => {
  response.sendFile("Dashboard page");
});

module.exports = router;
