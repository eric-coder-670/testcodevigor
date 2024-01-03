const User = require('../../models/user.model');

const updateUser = async (req, res) => {
    try {
        const query = req.params.query;
        const updatedData = req.body;

        const result = await User.updateOne({ yourField: query }, updatedData);

        if (result.nModified > 0) {
            res.json({ message: 'Recipe updated successfully' });
        } else if (result.n > 0) {
            res.json({ message: 'No changes were made to the recipe' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateUser
};
