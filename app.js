const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
        <head>
            <title>Student Project</title>
        </head>
        <body>
            <h1>Welcome to My Docker Project</h1>
            <h2>Student Information</h2>
            <p><b>Name:</b> Jaskirat Kaur</p>
            <p><b>Roll No:</b> 13</p>
            <p><b>Section:</b> 223PO</p>
            <p><b>University:</b> Lovely Professional University</p>
            <p>This project is running inside Docker Container</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});