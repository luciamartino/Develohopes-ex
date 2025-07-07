import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log("Request received");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const jsonResponseBody = JSON.stringify({ location: "Mars" });
    res.end(jsonResponseBody);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
