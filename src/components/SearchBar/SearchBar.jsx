import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = React.useState("");
   const handleChange = (event) => {
      setId(event.target.value)
   };
   return (
      <div className={style.arow} >
         <input className={style.search} type='search' onChange={handleChange}/>
         <button className={style.agregar} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
