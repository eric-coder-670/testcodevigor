const RecipeModel = require('../../models/recette.model');

const createRecipe = async (req, res) => {
    try {
        const {title,
            ingredients,
            instructions,
            imageUrl,
            description,
            level,
            numberPersons,
            videoUrl,
            category} = req.body;

        if (!title || !ingredients || !instructions || !category) {
            return res.status(400).json({
                message: 'Veuillez fournir toutes les données nécessaires pour créer une recette.'
            });
        }

        const newRecipe = new RecipeModel({
            title,
            ingredients,
            instructions,
            imageUrl,
            level,
            description,
            numberPersons,
            videoUrl,
            category
        });

        console.log("Nouvelle recette :", { title, ingredients, instructions, imageUrl});

        const savedRecipe = await newRecipe.save();

        if (savedRecipe) {
            res.json({
                message: 'Recette créée avec succès',
                savedRecipe
            });
        } else {
            return res.status(400).json({
                message: 'Impossible de créer la recette'
            });
        }

    } catch (error) {
        console.error("Erreur lors de la création de la recette :", error.message);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

module.exports = createRecipe;
