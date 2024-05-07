const express = require("express");
const morgan = require("morgan");

const path = require("path");

const app = express();

app.set("port", 3000);
app.set("appname", "Server app");

app.use(express.json());
app.use(morgan("dev"));

// TIP: First, we need to process routes and then, we can access to the public static files folder
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/note.txt", (request, response) => {
  response.send("This is not a file");
});

/* `app.use(express.static("public"));` is a middleware function in Express that serves static files
from the specified directory. In this case, it is serving static files from the "public" directory.
This means that any files in the "public" directory can be accessed directly by clients making
requests to the server.
app.use(express.static("public")); */

/* `app.use("/public", express.static("public"));` is a middleware function in Express that serves
static files from the specified directory "public" under the route path "/public". This means that
any files in the "public" directory can be accessed by clients making requests to the server using
the "/public" route path. For example, if there is a file named "example.jpg" in the "public"
directory, it can be accessed by making a request to "/public/example.jpg" on the server.

TIP: We can serve static files from multiple public folders*/
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((request, response) => {
  response.status(404).send("404 Page Not Found");
});

app.listen(app.get("port"));
console.log(`${app.get("appname")} listening on port ${app.get("port")}...`);
