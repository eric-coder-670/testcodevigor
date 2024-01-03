const mongoose = require('mongoose');

const schema = mongoose.Schema;

const RecipeModel = new schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    descritpion: {
        type: String,
        require: false
    },
    level: {
        type: Number,
        require: false
    },
    numberPersonne: {
        type: Number,
        require: false
    },
    imageUrl: {
        type: String,
        require: false
    },
    videaoUrl: {
        type: String,
        require: false
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: false
    // },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Référence au modèle de catégorie
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const recette = mongoose.model('recipe', RecipeModel);
module.exports = recette;

