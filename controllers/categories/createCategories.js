const Category = require("../../models/categories");

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        // Vérifier si la catégorie existe déjà
        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                message: 'La catégorie existe déjà.'
            });
        }

        // Créer une nouvelle catégorie
        const newCategory = new Category({
            name
        });

        const savedCategory = await newCategory.save();

        res.status(200)
            .json({
                message: 'Catégorie créée avec succès',
                savedCategory
            });

    } catch (error) {
        console.error("Erreur lors de la création de la catégorie :", error.message);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}

module.exports = createCategory