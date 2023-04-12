const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharByID = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}${id}`)
    .then((response) => {
      const { id, status, name, species, origin, image, gender } =
        response.data;
      res.status(200).json({ id, status, name, species, origin, image, gender });
    })
    .catch((error) => {
      if (error.response.status === 404) {
        res.status(404).send("Not Found");
      } else {
        res.status(500).send(`Error: ${error.message}`);
      }
    });
};

module.exports = getCharByID;
