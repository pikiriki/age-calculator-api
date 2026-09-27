const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = new URL(req.url, "http://localhost:3000");

  const birthYearInput = url.searchParams.get("birthYear");
  const currentYearInput = url.searchParams.get("currentYear");

  console.log("Birth year input:", birthYearInput);
  console.log("Current year input:", currentYearInput);

  console.log("Birth year type:", typeof birthYearInput);
  console.log("Current year type:", typeof currentYearInput);

  const birthYear = Number(birthYearInput);
  const currentYear = Number(currentYearInput);

  console.log("Converted birth year type:", typeof birthYear);
  console.log("Converted current year type:", typeof currentYear);

  console.log("Converted birth year plus one:", birthYear + 1); 

  const differenceAge = currentYear - birthYear;
  const message = `Your age is ${differenceAge}`;

  res.end(message)
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});