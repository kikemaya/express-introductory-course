const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((request, response) => {
  /* This code snippet is creating a read stream using the `fs.createReadStream` method to read the
  contents of the file "./static/index.html". The `read` stream is then piping its contents to the
  `response` object, which sends the file contents back to the client that made the HTTP request.
  This allows the server to serve the contents of the index.html file to the client. */
  const read = fs.createReadStream("./static/index.html");
  read.pipe(response);
});

server.listen(PORT);
console.log(`Server listening on PORT ${PORT}`);
