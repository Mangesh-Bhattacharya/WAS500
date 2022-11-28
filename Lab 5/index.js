const mongoose = require('mongoose');

const express = require('express'),
    app = express(),
    books = require('./models/Books.js'),
    booksController = require("./controllers/booksController"),
    errorController = require("./controllers/errorControllers"),
    layout = require("express-ejs-layouts");

app.set("ports", process.env.PORT || 3000);

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Mangesh_Bhattacharya:Srima1853@was500.kr0eikc.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use((req, res, next) => {
    console.log(`Request received: ${req.url}`);
    next();
});

app.get("/Lab 5/views/index.ejs", (req, res) => {
    res.render("index");
});
/*
app.get("../Lab 5/books.html", booksController.getAllBooks, (req, res) => {
    res.render("books", { books: req.data });
});

app.get()
app.post("/Bookslist/:books", booksController.getbook, (req, res) => {
    res.render("/Books-list", { info: req.data });
});
*/

app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);
app.use(errorController.logErrors);

app.listen(app.get("ports"), () => {
    console.log(`Server running at http://localhost:${app.get("ports")}`);
});