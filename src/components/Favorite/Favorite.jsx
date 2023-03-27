import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorite = () => {

    const favorites = useSelector(state => state.myFavorites)

    return(
        <div>
            {favorites.map(({id,name,status,species,gender,origin,image}) => {
                return(
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
                )
            })}
        </div>
    )
}

export default Favorite;