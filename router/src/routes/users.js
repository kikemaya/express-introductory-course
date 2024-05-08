const { Router } = require("express");

const router = Router();

router.get("/UserName", (request, response) => {
  response.send("Username route");
});

router.get("/profile", (request, response) => {
  console.log(request.body);
  response.send("Profile route");
});

module.exports = router;
