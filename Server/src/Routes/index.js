const { Router } = require("express");
const getCharByID = require("../Controllers/GetCharByID");
const { postFav, deleteFav } = require("../Controllers/handleFavorites");
const login = require("../Controllers/login");

const router = Router();

router.get("/character/:id", getCharByID);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
