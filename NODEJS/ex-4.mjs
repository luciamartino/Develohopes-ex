import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log("Request received");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<!DOCTYPE html>
                <html>
                    <body>
                        <h1>This message is created with NODEJS and I think it's pretty cool</h1>
                    </body>
                </html>`);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
