const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const rtr = require("./rtr.js")

const customReadFile = (fpath, res) => {
    fs.readFile(`./${fpath}`, (errors, data) => {
        if (errors) {
            console.log('Error locating the file ', fpath);
        }
        res.end(data);
    });
};

rtr.get('/styles.css', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('public/css/styles.css', res);
});

rtr.get('/', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('views/index.html', res);
    console.log('Your Request for index.html recieved', url);
    var url = req.url;
});

rtr.get('/books.html', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('views/books.html', res);
    console.log('Your Request for book2.html recieved', url);
    var url = req.url;
});

rtr.get('/book1.html', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('views/book1.html', res);
    console.log('Your Request for book1.html recieved', url);
    var url = req.url;
});

rtr.get('/book2.html', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('views/book2.html', res);
    console.log('Your Request for book2.html recieved', url);
    var url = req.url;
});

rtr.get('/book3.html', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK);
    customReadFile('views/book3.html', res);
    console.log('Your Request for book3.html recieved', url);
    var url = req.url;
});

const app = http.createServer(rtr.handle);
app.listen(3000, 'localhost');
console.log(`Now listening to port: ${port}`);
app.on('request', (req, res) => {
    console.log(`Request received for url: ${req.url}`);
});