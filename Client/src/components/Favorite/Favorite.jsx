import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, removeFav } from "../../Redux/actions";
import { useState } from "react";
import style from "./Favorite.module.css";

const Favorite = ({ onClose }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(false);

  function closeFavorite(id) {
    onClose(id);
    dispatch(removeFav(id));
  }

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.filtros} >
        <select className={style.select} onChange={handleOrder}>
          <option value="order" disabled="disable">
            Order by:
          </option>
          <option value="A">Upward</option>
          <option value="D">descending</option>
        </select>
        <select className={style.select} style={{marginLeft:"50px"}} onChange={handleFilter}>
          <option value="order" disabled="disable">
            Filter by:
          </option>
          <option value="Reset">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.favoriteDiv}>
        {favorites.map(({ id, name, gender, image }) => {
          return (
            <div key={id}>
              <Card
                key={id}
                id={id}
                name={name}
                gender={gender}
                image={image}
                onClose={() => closeFavorite(id)}
                fav={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
