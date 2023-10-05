const BookModel = require("../models/book.model");
const jwt = require('jsonwebtoken');
const jwtDecode = require("jwt-decode");
const userModel = require("../models/user.model");

const {
    createToken,
    hashePassword,
    verifyPassword
} = require('../models/util');


//New book created
const createdBook = async (req, res) => {
    try {
        const { title, author, createdAt } = req.body;

        const bookData = {
            title,
            author,
            createdAt
        }

        const newBook = BookModel(bookData);
        const savedBook = await newBook.save();

        if (savedBook) {
            return res.json({
                message: "Book created",
                bookInfo,
            });
        }
        else {
            return res.status(400).json({
                message: "book not created"
            });
        }
    }

    catch (err) {
        return res.staus(400).json(
            { message: 'there was a probleme created your book' }
        );
    }
};



//login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).lean();
        if (!user)
        {
            return res.status(403).json({ message: "email is use" });
        }
        
        const passwordValid = await verifyPassword(password, user.password);
        if (passwordValid) {
            const { password, ...rest } = user;
            const userInfo = Object.assign({},{...rest})

            const token = createToken(token);
            const decodedToken = jwtDecode(token);
            const expiretAt = decodedToken.exp;

            res.json({
                message: 'Authentificatio ok',
                token,
                userInfo,
                expiretAt,
            })
        }
        else {
            res.status(403).json(
                {message:"wrong email or password"}
            )
        }

    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong"
        });
    }
}

//sign user
const signUser = async (req, res) => {
    try {
        const { firstname, lastname, email } = req.body;

        const hashedPassword = await hashePassword(req.body.password);
        
        const userData = {
            firstname,
            lastname,
            email: email.toLowerCase(),
            password:hashedPassword
        }

        const existingEmail = await userModel.findOne({ email: userData.email }).lean();
        if (existingEmail) {
            return res
                .status(400)
                .json({ message: "Email already existing" });
        }

        const newUser = userModel(userData);
        const savedUser = await newUser.save();

        if (savedUser) {
            const token = createToken(userData);
            const decodedToken = jwtDecode(token);
            const expiretAt = decodedToken.exp;

            const {
                firstname,
                lastname,
                email
            } = userData;

            const userInfo = {
                firstname,
                lastname,
                email
            }
            return res
                .jon({
                    message: "user created",
                    userInfo,
                    expiretAt
                });
        }
        else {
            return res
                .status(400)
                .json({message:"user not created"})
        };

    }
    catch (err) {
        return res.status(400).json(
            {
                message:'there was a problem to created user'
            }
        )
    }

} 




module.exports = {
    createdBook,
    loginUser,
    signUser
}