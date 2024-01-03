const Profile = require('../../models/profile');

const createProfile = async (req, res) => {
    try {
        const {
            user,
            fullName,
            bio,
            dateOfBirth 
        } = req.body;

        const newProfile = new Profile({
            user,
            fullName,
            bio,
            dateOfBirth 
        });
        const savedProfile = await newProfile.save();
        res.json(savedProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

