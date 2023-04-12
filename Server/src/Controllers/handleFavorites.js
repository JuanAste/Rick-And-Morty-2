let myFavorites = [];

const postFav = (req, res) => {
  const {id} = req.body;
  myFavorites = myFavorites.filter((favo)=> favo.id != id)
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id != id);
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };