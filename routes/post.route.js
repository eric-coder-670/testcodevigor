const { countRecipes } = require("../controllers/recette/count-recette");
const { getRecipes } = require("../controllers/recette/list-recette");
const { updateRecipe } = require("../controllers/recette/update-recette");
const { deleteRecipe } = require("../controllers/recette/delete-recette");
const createRecipe = require("../controllers/recette/create-recette")
const createCategory =  require("../controllers/categories/createCategories");
const getCategory = require("../controllers/categories/listCategories");
const router = require("express").Router();

//Recette
router.get("/count", countRecipes);
router.post("/create/recipes", createRecipe);
router.post("/list/recipes", getRecipes);
router.put("/update/recipes", updateRecipe);
router.delete("/delete/recipes", deleteRecipe);

//Categories
router.post("/create/category", createCategory);
router.post("/list/category", getCategory );


module.exports = router;
