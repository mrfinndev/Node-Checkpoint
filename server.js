import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hello Node</h1>\n");
  }
});

server.listen(3000, () => console.log("server connected"));
