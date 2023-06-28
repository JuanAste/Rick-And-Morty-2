import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../Redux/actions';
import style from './Card.module.css'

function Card({id,name,gender,image,onClose,addFavorite,deleteFavorite,myFavorites, fav}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id,name,gender,image})
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
      <div className={style.card} > 
      <div className={style.favoriteDiv} >
         {isFav ? (
            <button className={style.favoriteButton} onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={style.favoriteButton} onClick={handleFavorite}>🤍</button>
            )
         }
         <h2>ID: {id}</h2>
         {!fav ?
         <button className={style.favoriteButton} onClick={() => onClose(id)}>X</button> : null}
      </div>
         <img className={style.img} src={image} alt='' />
         <h2 className="card-name">{name}</h2>
         <h2>Gender: {gender}</h2>
         <Link to={`/detail/${id}`} >
         <button className={style.buttons} >More Info...</button>
         </Link>
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
      myFavorites: state.allCharacters,
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);