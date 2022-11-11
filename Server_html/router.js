var http = req('http');
var fs = req('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + 'Server_html/views/index.html').pipe(res);
    } else if (req.url === '/books') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + 'Server_html/views/books.html').pipe(res);
    } else if (req.url === '/book1') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + 'Server_html/views/book1.html').pipe(res);
    } else if (req.url === '/book2') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + 'Server_html/views/book2.html').pipe(res);
    } else if (req.url === '/book3') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + 'Server_html/views/book3.html').pipe(res);
    }
});

server.listen(3000, 'localhost');
console.log('Now listening to port 3000');
