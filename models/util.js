const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: "./.env" });


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


const hashePassword = password => {
    return Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, bcrypt, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash);
            });
        });
    });
} 

const verifyPassword = (passwordAttempt, hashedPassword) => {
    return bcrypt.compare(passwordAttempt, hashedPassword);
}

module.exports = {
    createToken,
    hashePassword,
    verifyPassword
}