const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.end("Hello Backend")
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});