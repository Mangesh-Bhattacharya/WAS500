const http = require('http');
const fs = require('fs');

const server = http.createServer((_req, res) => {
    console.log('request was made: ' + _req.url);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('Server_html/views/index.html').pipe(res)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('Server_html/views/books.html').pipe(res)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('Server_html/views/book1.html').pipe(res)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('Server_html/views/book2.html').pipe(res)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('Server_html/views/book3.html').pipe(res)
});

server.listen(3000, 'localhost');
console.log('Now listening to port 3000');

