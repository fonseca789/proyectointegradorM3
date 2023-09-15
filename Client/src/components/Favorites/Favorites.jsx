import {useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card/Card";
import style from "../Cards/cards.module.css";
const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div className={style.gallery}>
      {myFavorites.length > 0 ? myFavorites.map((character) => {
        return (
          <Card
            isFav ={character.isFav}
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        );
      }) : <h1>No Hay Personajes Favorito, Debes llenarlo 😉</h1>}
      ;
    </div>
  );
};
export default Favorites;
