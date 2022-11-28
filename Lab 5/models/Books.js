const mongoose = require('mongoose');

BooksSchema = new mongoose.Schema({
    id: String,
    cover: String,
    title: String,
    author: String,
    description: String,
    price: Number,
});
module.exports = mongoose.model("Books", BooksSchema);