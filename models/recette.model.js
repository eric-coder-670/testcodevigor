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
    description: {
        type: String,
        require: true
    },
    level: {
        type: Number,
        require: true 
    },
    number_personne: {
        type: Number,
        require: true 
    },
    imageUrl: {
        type: String,
        require: true 
    },
    videoUrl: {
        type: String,
        require: true 
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true 
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

const recette = mongoose.model('recipes', RecipeModel);
module.exports = recette;

