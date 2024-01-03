const User = require('../../models/user.model');

const getUser = async (req, res) => {
    try {
        const query = req.params.query;

        const count = await User.find( query );

        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUser
};
