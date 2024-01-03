// getRecipes.js
const Recipe = require('../../models/recette.model');

const getRecipes = async (req, res) => {
    try {
        const query = req.params.query;
        const limit = req.query.limit;

        const recipes = await Recipe.find(query)
            .limit(Number(limit))
            .populate('category', 'name'); // Utiliser populate pour récupérer les détails de la catégorie

        res.json({
             recipes 
            });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getRecipes
};
