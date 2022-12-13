const mongoose = require('mongoose');
const db = mongoose.connection;
const express = require('express'),
    app = express(),
    books = require('./models/Books'),
    booksController = require("./controllers/booksController"),
    errorControllers = require("./controllers/errorControllers"),
    layouts = require("express-ejs-layouts");

app.set("ports", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts, express.static(__dirname));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Mangesh_Bhattacharya:Srima1853@was500.kr0eikc.mongodb.net/Lab-5?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
);

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use((req, res, next) => {
    date = new Date();
    console.log(`Request received: ${req.url} at ${date}`);
    next();
});

app.use((req, res, next) => {
    console.log(`Request received: ${req.url}`);
    next();
});

app.get("", (req, res) => {
    res.render("index");
});

app.get("/contacts", (req, res) => {
    res.render("contacts");
});

app.get("/books", booksController.getallbooks, (req, res) => {
    res.render("books", { books: req.data });
});

app.get("/admin", booksController.getallbooks, (req, res) => {
    res.render("admin", { books: req.data });
});

app.get("/survey", (req, res) => {
    res.render("survey");
});

app.get("/addnewbook", (req, res) => {
    res.render("addnewbook");
});

app.post("/create", booksController.create_new_book, booksController.redirect_View);
app.post("/books/:id/update", booksController.update_book, booksController.redirect_View);
app.delete("/books/:id/delete", booksController.delete_book, booksController.redirect_View);

app.get("/books/:id", booksController.getbook, (req, res) => {
    res.render("bookslist", { books: req.data });
});

app.get("/edit/:id", booksController.getbook, (req, res) => {
    res.render("editbook", { books: req.data });
});

app.use(errorControllers.respondInternalError);
app.use(errorControllers.respondNoResourceFound);
app.use(errorControllers.logErrors);

app.listen(app.get("ports"), () => {
    console.log(`Server running at http://localhost:${app.get("ports")}`);
});