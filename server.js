const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = new URL(req.url, "http://localhost:3000");

  const birthYearInput = url.searchParams.get("birthYear");
  const currentYearInput = url.searchParams.get("currentYear");

  if (
    birthYearInput === null ||
    currentYearInput === null ||
    birthYearInput === "" ||
    currentYearInput === ""
  ) {
    res.end("Please provide both birthYear and currentYear.");
    return;
  }

  const birthYear = Number(birthYearInput);
  const currentYear = Number(currentYearInput);

  

  const differenceAge = currentYear - birthYear;
  const message = `Your age is ${differenceAge}`;

  res.end(message)
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});