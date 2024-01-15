const RecipeModel = require('../../models/recette.model');

const createRecipe = async (req, res) => {
    try {
        const {
            title,
            ingredients,
            instructions,
            description,
            level,
            number_personne,
            imageUrl,
            videoUrl,
            category,
        } = req.body;

        const newRecipe = new RecipeModel({
            title,
            ingredients,
            instructions,
            description,
            level,
            number_personne,
            imageUrl,
            videoUrl,
            category,
        });

        const savedRecipe = await newRecipe.save();
        if (savedRecipe) {
            res
                .status(200)
                .json({
                    message: 'Recette créée avec succès',
                    savedRecipe
                });
        } else {
            return res
                .status(400)
                .json({
                    message: 'Impossible de créer la recette'
                });
        }

    } catch (error) {
        console.error("Erreur lors de la création de la recette :", error.message);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

module.exports = createRecipe;
