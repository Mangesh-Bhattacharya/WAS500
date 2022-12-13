const books = require("../models/Books");

module.exports = {
    getallbooks: (req, res, next) => {
        books.find({}, (error, books) => {
            if (error) next(error);
            req.data = books;
            req.data.sort((a, b) => {
                return a.series - b.series;
            });
            next();
        })
    },

    getbook: (req, res, next) => {
        let parameters_booksid = req.parameters_books;
        books.find({ _id: parameters_booksid }, (books, error) => {
            if (error) {
                return next(error);
            }
            req.data = books;
            next();
        });
    },
    create_new_book: (req, res, next) => {
        let book_parameters = new books({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
        });
        book_parameters.save((saved, error) => {
            if (error) {
                return next(error);
            }
            res.locals.redirect = "/admin";
            next();
        })
    },
    redirect_View: (req, res, next) => {
        let redirect_Path = res.locals.redirect;
        if (redirect_Path) res.redirect(redirect_Path);
        else next();
    },
    update_book: (req, res, next) => {
        let parameters_booksid = req.params.id;
        books.findByIdAndUpdate(parameters_booksid,
            {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description
            },
            (error, _update_book) => {
                if (error) {
                    return next(error);
                }
                req.data = books;
                res.locals.redirect = "/admin";
                next();
            });
    },
    delete_book: (req, res, next) => {
        let parameter_bookid = req.params.id;
        books.findByIdAndRemove({ _id: parameter_bookid }, (error, _delete_book) => {
            if (error) {
                return next(error);
            }
            req.data = books;
            res.locals.redirect = "/admin";
            next();
        });
    }
};