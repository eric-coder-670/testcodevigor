const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryModel = new Schema({
    name: {
        type: String,
        required: true
    },
    // Autres champs de catégorie si nécessaire
});

const Category = mongoose.model('Category', CategoryModel);
module.exports = Category;
