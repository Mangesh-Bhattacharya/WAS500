// connect to localhost:3000
const http = require('http');
const fs = require('fs');

const server = http.createServer((_req, res) => {
    console.log('request was made: ' + _req.url);
    if (/* Checking if the url is equal to index or if it is equal to nothing. */
        _req.url === '/index' || _req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/views/index.html').pipe(res);
    } else if (_req.url === '/books') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/views/books.html').pipe(res);
    } else if (_req.url === '/book1') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/views/book1.html').pipe(res);
    } else if (_req.url === '/book2') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/views/book2.html').pipe(res);
    } else if (_req.url === '/book3') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/views/book3.html').pipe(res);
        res.end();
    }
});

server.listen(3000, 'localhost');
console.log('Now listening to port 3000');