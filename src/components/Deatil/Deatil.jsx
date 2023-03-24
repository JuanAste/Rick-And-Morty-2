import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Deatil = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
            {character.name ? (
                <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>Origin: {character.origin?.name}</p>
            <img src={character.image} alt="" />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default Deatil;