const Recipe = require('../../models/recette.model');

const deleteRecipe = async (req, res) => {
    try {
        const query = req.params.query;

        const result = await Recipe.deleteOne({ yourField: query });

        if (result.deletedCount > 0) {
            res.json({ message: 'Recipe deleted successfully' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    deleteRecipe
};
