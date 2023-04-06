const http = require("http");
const GetCharByID = require("./Controllers/GetCharByID/GetCharByID");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").at(-1);
      GetCharByID(res, id);
    }
  })
  .listen(3001, "localhost");
