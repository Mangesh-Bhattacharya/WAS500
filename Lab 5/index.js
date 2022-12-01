const mongoose = require('mongoose');
const db = mongoose.connection;
const express = require('express'),
    app = express(),
    Books = require('./models/Books'),
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
    console.log(`Request received: ${req.url}`);
    next();
});

app.get("", (req, res) => {
    res.render("index");
});

app.get("/contacts.html", (req, res) => {
    res.render("contacts");
});

app.get("/books.html", booksController.getallbooks, (req, res) => {
    res.render("books", { books: req.data });
});

app.get("/survey.html", (req, res) => {
    res.render("survey");
});

app.get("/books/:books", booksController.getbook, (req, res) => {
    res.render("bookslist", { books: req.data });
});

app.use(errorControllers.respondInternalError);
app.use(errorControllers.respondNoResourceFound);
app.use(errorControllers.logErrors);

app.listen(app.get("ports"), () => {
    console.log(`Server running at http://localhost:${app.get("ports")}`);
});