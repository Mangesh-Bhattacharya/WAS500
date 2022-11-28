const books = require("../models/Books");

exports.getallbooks = (res, req, next) => {
    books.find({}, (books, error) => {
        if (error) {
            return next(error);
        }
        req.data = books;
        req.data.sort((m, b) => {
            return m.series - b.series;
        });
        next();
    });
};

exports.getbook = (res, req, next) => {
    let parameters_booksid = req.parameters_books;
    books.find({ _id: parameters_booksid }, (books, error) => {
        if (error) {
            return next(error);
        }
        req.data = books;
        next();
    });
};