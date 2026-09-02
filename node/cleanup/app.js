const http = require("http");
const routes = require("./routes");

// routes.anotherFunction();
// const server = http.createServer(routes);
routes.testFunction();
const server = http.createServer(routes.handler);

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is listening on the port 5000");
});
