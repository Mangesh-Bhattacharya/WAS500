const fs = require('fs');
const { GET } = require('http');
const { POST } = require('http');

const customReadFile = (fpath, res) => {
    fs.readFile(`./${fpath}`, (errors, data) => {
        if (errors) {
            console.log('Error locating the file ', fpath);
        }
        res.end(data);
    });
};

const httpStatus = require('http-status-codes');
html_Content_type = {
    "Content-Type": "text/html",
};

const rtr = {
    GET: {},
    POST: {},

};

exports.hdl = (req, res) => {
    try {
        rtr[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
        res.end('Content not found');
    }
};

exports.get = (url, action) => {
    rtr["GET"][url] = action;
};

exports.post = (url, action) => {
    rtr["POST"][url] = action;
};