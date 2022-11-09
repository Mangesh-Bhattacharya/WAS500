// connect to localhost:3000
const http = require('http');
const hostname = 'localhost'
const fs = require('fs');
const port = 3000;

const server = http.createServer((_req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    });
});

// import css file into index.js server
const css = fs.readFileSync('styles.css', 'utf8');



server.listen(port, function (error) {
    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('Server running on port: ' + port);
    }
});
