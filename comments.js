// Create web server
// 1. Import modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// 2. Create web server
http.createServer((req, res) => {
    // 3. Parse request
    let pathname = url.parse(req.url).pathname;
    // 4. Route request
    if (pathname === '/') {
        pathname = '/index.html';
    }
    // 5. Read file
    let extname = path.extname(pathname);
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            // 6. Handle error
            console.log(err);
            // HTTP Status: 404 NOT FOUND
            // Content Type: text/html
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // 7. Write response
            // HTTP Status: 200 OK
            // Content Type: text/html
            res.writeHead(200, {'Content-Type': 'text/html'});
            // Write data
            res.write(data.toString());
        }
        // 8. End response
        res.end();
    });
}).listen(8080);

console.log('Server running at http://