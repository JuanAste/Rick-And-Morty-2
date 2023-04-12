import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      alert('Error al agregar a favoritos');
    }
  };
};

export const deleteFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      alert('Error al eliminar favorito');
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export function removeFav(id) {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert('Error al eliminar favorito');
    }
  };
}
