import Card from "../Card/Card.jsx";
import style from "./cards.module.css";

export default function Cards({ characters, onClose, isFav=false }) {
  
  return (
    <div className={style.gallery}>
      {characters.map((character) => {
        return (
          <Card
            isFav = {isFav}
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
      })}
    </div>
  );
}
