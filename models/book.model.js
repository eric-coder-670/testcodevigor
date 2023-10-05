const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookModel = new schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, required: true }
});

module.exports = mongoose.model('book', BookModel);