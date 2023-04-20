import {
  ADD_FAVORITE,
  FILTER,
  ORDER,
  REMOVE_FAVORITE,
  REMOVE_FAV,
} from "./actions";

const inicialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      const filtrado = state.allCharacters.filter((char) => {
        if (action.payload === "Reset") {
          return char.gender;
        } else {
          return char.gender === action.payload;
        }
      });
      return {
        ...state,
        myFavorites: filtrado,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id),
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
