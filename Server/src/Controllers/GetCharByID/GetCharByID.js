const axios = require("axios");

const succesH = (response, res) => {
  const { id, image, name, gender, species, origin, status } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, image, name, gender, species, origin, status }));
};

const errorH = (error, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const GetCharByID = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => succesH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = GetCharByID;
