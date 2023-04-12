const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    if (data) {
      const { id, status, name, species, origin, image, gender } = data;
      res.status(200).json({ id, status, name, species, origin, image, gender });
    } else {
      res.status(404).json({ message: "character not found" });
    }
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};

module.exports = getCharByID;
