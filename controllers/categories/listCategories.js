const Category = require("../../models/categories");


const getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({
            categories
        });
    } catch (error) {
        console.error("Erreur lors de la récupération de la liste des catégories :", error.message);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}

module.exports = getCategory