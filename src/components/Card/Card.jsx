import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({key,id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         {/* <h2>Key: {key}</h2> */}
         <h2>ID: {id}</h2>
         <Link to={`/detail/${id}`} >
            <h2 className="card-name">{name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         {/* <h2>Origin: {origin?.name}</h2> */}
         <img src={image} alt='' />
      </div>
   );
}
