import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../Redux/actions';

function Card({key,id,name,status,species,gender,origin,image,onClose,addFavorite,deleteFavorite,myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({key,id,name,status,species,gender,origin,image,onClose,addFavorite,deleteFavorite})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div Key={key}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
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

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);