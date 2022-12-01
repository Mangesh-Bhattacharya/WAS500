const books = require("../models/Books");

module.exports.getallbooks = (req, res, next) => {
    books.find({}, (error, books) => {
        if (error) next(error);
        req.data = books;
        console.log(books);
        next();
    });
};

module.exports.getbook = (req, res, next) => {
    let parameters_booksid = req.parameters_books;
    books.find({ _id: parameters_booksid }, (books, error) => {
        if (error) {
            return next(error);
        }
        req.data = books;
        next();
    });
};