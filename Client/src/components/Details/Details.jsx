import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";

const Deatil = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      {character.name ? (
        <>
          <div>
            <img className={style.img} src={character.image} alt="" />
          </div>
          <div className={style.info}>
            <h1>Name: {character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Deatil;
