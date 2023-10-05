// Importing the required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Loading environment variables from .env file
require('dotenv').config({ path: "./.env" });

// Function to create a JWT token for a book
const createToken = book => {
    return jwt.sign(
        {
            sub: book._id,
            title: book.title,
            author: book.author,
            iss: "backend",
            aud: "backend"
        },
        process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' }
    );
};

// Function to hash a password using bcrypt
const hashPassword = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash);
            });
        });
    });
} 

// Function to verify a password with a hashed password using bcrypt
const verifyPassword = (passwordAttempt, hashedPassword) => {
    return bcrypt.compare(passwordAttempt, hashedPassword);
}

// Exporting the functions
module.exports = {
    createToken,
    hashPassword,
    verifyPassword
}
