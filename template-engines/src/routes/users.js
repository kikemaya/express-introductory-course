const { Router } = require("express");

const router = Router();

router.get("/UserName", (request, response) => {
  response.send("Username route");
});

router.get("/users", (request, response) => {
  response.render("users");
});

router.get("/profile", (request, response) => {
  console.log(request.body);
  response.send("Profile page");
});

module.exports = router;
