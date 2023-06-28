const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const character = req.body;
  const fav = await Favorite.findOne({ where: { id: character.id } });
  if(!fav){
    await Favorite.create(character);
  }
  const allFav = await Favorite.findAll();

  res.status(200).json(allFav);
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  await Favorite.destroy({ where: { id } });
  const allFav = await Favorite.findAll();
  res.status(200).json(allFav);
};

module.exports = { postFav, deleteFav };
