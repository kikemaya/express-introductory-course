const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

// Settings
app.set("case sensitive routing", true);
app.set("serverName", "Express course");
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.use((request, response) => {
  response.status(404).json({ statusCode: 404, message: "Page Not Found" });
});

app.listen(app.get("port"));
console.log(`${app.get("serverName")} listening on port ${app.get("port")}...`);
