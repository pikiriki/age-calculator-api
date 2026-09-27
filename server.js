const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = new URL(req.url, "http://localhost:3000");

  const birthYearInput = url.searchParams.get("birthYear");
  const currentYearInput = url.searchParams.get("currentYear");

  console.log("Birth year input:", birthYearInput);
  console.log("Current year input:", currentYearInput);

  res.end("Hello Backend");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});