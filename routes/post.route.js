const router = require("express").Router();

const {
    loginUser,
    signUser,
    createdBook } = require("../controllers/post.controller");

router.post("/sign", signUser);
router.post("/login", loginUser);
router.post("/newbook", createdBook);

module.exports = router;