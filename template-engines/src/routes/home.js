const { Router } = require("express");

const router = Router();

router.get("/", (request, response) => {
  let isActive = true
  
  const users = [
    {
      id: 1,
      name: "John",
      lastname: "Doe"
    },
    {
      id: 2,
      name: "Ryan",
      lastname: "Perez"
    },
    {
      id: 3,
      name: "Joe",
      lastname: "McMillan"
    },
  ]

  response.render("index", { title: "Index page", isActive, users });
});

router.get("/about", (request, response) => {
  const title = "About...";
  response.render("about", { title });
});

router.get("/dashboard", (request, response) => {
  response.render("dashboard");
});

module.exports = router;
