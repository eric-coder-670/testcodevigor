

const createdBook = async (req, res) => {
    try {
        const { title, author, createdAt } = req.body;

        const bookData = {
            title,
            author,
            createdAt
        };

        const newBook = new BookModel(bookData);
        const savedBook = await newBook.save();

        if (savedBook) {
            return res.json({
                message: "Book created",
                bookInfo: savedBook, // Utilisez savedBook au lieu de bookInfo
            });
        } else {
            return res.status(400).json({
                message: "Book not created"
            });
        }
    } catch (err) {
        return res.status(400).json({
            message: 'There was a problem creating your book',
            error: err.message // Envoyez également des détails sur l'erreur
        });
    }
};








module.exports = {
    createdBook,
    loginUser,
    signUser
}