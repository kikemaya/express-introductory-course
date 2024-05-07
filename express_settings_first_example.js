const express = require("express");
const morgan = require("morgan");

const app = express();

// TIP: Try to put the express settings before middlewares.
// Settings
/* The line `app.set("appName", "Express Course");` is setting a configuration setting for the Express
application. In this case, it is setting the value of the configuration key "appName" to "Express
Course". This allows you to store custom settings or values within the Express application object
for later use. */
app.set("appName", "Express Course");
app.set("port", 3000);
/* The line `app.set("case sensitive routing", true);` is setting a configuration option for the
Express application to enable case-sensitive routing. When this option is set to `true`, Express
will consider route paths as case-sensitive. This means that routes defined with different casing,
such as "/Username" and "/username", will be treated as distinct routes. */
app.set("case sensitive routing", true);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("Hello World!");
});

// Respect case sensitive
app.get("/UserName", (request, response) => {
  response.send("username route");
});

// Default error handling in case of trying to access a wrong route.
app.use((request, response) => {
  response.status(404).send("404 Page Not Found.");
});

app.listen(app.get("port"));
console.log(
  `Server ${app.get("appName")} listening on PORT ${app.get("port")}`
);
