const mongoose = require('mongoose');

BooksSchema = new mongoose.Schema({
    id: String,
    cover: String,
    title: String,
    novelist: String,
    description: String,
});
module.exports = mongoose.model("Books", BooksSchema);