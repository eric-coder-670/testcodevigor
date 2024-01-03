const User = require('../../models/user.model');

const countUser = async (req, res) => {
    try {
        const query = req.params.query 
        const count = await User.countDocuments(query);
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    countUser
};
