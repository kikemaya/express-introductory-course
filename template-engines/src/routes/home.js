const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", (request, response) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "John",
      lastname: "Doe",
    },
    {
      id: 2,
      name: "Ryan",
      lastname: "Perez",
    },
    {
      id: 3,
      name: "Joe",
      lastname: "McMillan",
    },
  ];

  response.render("index", { title: "Index page", isActive, users });
});

router.get("/about", (request, response) => {
  const title = "About...";
  response.render("about", { title });
});

router.get("/dashboard", (request, response) => {
  response.render("dashboard");
});

router.get("/posts", async (request, response) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  response.render("posts", {
    posts: res.data
  });
});

module.exports = router;
