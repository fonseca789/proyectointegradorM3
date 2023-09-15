import {useState} from 'react';


//crear una funcion que guarda el value del input

export default function SearchBar({onSearch}) {
   //creaamos un estado con el nombre id
   let [id,setId] =useState('');
   const handleChange = (event) => {
   
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      
      </div>
      
   );
}
