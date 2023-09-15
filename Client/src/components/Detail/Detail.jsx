import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  const { name, status, species, type, image } = character;
  return (
    <div key={character.id}>
      <div>
        <h2>|| {name} ||</h2>
        <hr />
        <h3>STATUS | {status} </h3>
        <h3>SPECIE | {species}</h3>
        <h3>TYPE | {type} </h3>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
