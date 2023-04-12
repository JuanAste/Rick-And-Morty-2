import { ADD_FAVORITE, FILTER, ORDER, REMOVE_FAVORITE, REMOVE_FAV } from "./actions";

const inicialState = {
    myFavorites: [],
    allCharacters: [],
}


const rootReducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAVORITE:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case FILTER:
            const filtrado = state.allCharacters.filter((char) => {
                return char.gender === action.payload;})
            return{
                ...state,
                myFavorites: filtrado,
            }
        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "A" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) =>  b.id - a.id)
            }
        case REMOVE_FAV:
            const newFavorites = state.allCharacters.filter(
                (ch) => ch.id !== state.payload
            );
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload),
            };
        default:
            return {... state};
    }
}

export default rootReducer;