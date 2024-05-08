const path = require("path");

const express = require("express");
const morgan = require("morgan");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

/* The code snippet is setting configuration options for the Express application using the `app.set()`
method. Here's what each line is doing: */
app.set("case sensitive routing", true);
app.set("appName", "Express server");
app.set("port", 3000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

// Routing
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`${app.get("appName")} listening on port ${app.get("port")}...`);
