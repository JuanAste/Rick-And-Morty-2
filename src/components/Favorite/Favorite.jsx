import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";

const Favorite = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.myFavorites)
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select onChange={handleOrder}>
                        <option value="order" disabled= "disable">Order by:</option>
                        <option value="A">Ascendente</option>
                        <option value="D">Decendente</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option value="order" disabled= "disable">Filter by:</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
            {favorites.map(({id,name,status,species,gender,origin,image}) => {
                return(
                    <div>
                    <Card 
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default Favorite;