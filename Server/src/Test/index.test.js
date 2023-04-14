const server = require("../app");
const session = require("supertest");

const request = session(server);

const char = {
  id: 1,
  status: "Alive",
  name: "Rick Sanchez",
  species: "Human",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  gender: "Male",
};

describe("Test Routes", () => {
  describe("Test Get Char By ID (in params)", () => {
    it("Response Status: 200 in route /character/:id", () => {
      request.get("/rickandmorty/character/1").then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });

    it("Response Status: 200 in route /character/:id", () => {
      request.get("/rickandmorty/character/1000").then((res) => {
        expect(res.statusCode).toBe(404);
      });
    });

    it("Response Status: 200 in route /character/:id", () => {
      request.get("/rickandmorty/character/hola").then((res) => {
        expect(res.statusCode).toBe(500);
      });
    });

    it("Response Status: 200 in route /character/:id", () => {
      request.get("/rickandmorty/character/1").then((res) => {
        expect(res.body).toEqual(char);
      });
    });
  });

  describe("Test Post Favorite By Body", () => {});
});
