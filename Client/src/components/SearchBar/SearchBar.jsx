import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = React.useState("");
   const handleChange = (event) => {
      setId(event.target.value)
   };
   return (
      <div className={style.arow} >
         <input className={style.search} type='search' onChange={handleChange} placeholder="Search by card number" />
         <button className={style.agregar} onClick={() => onSearch(id)}>Search</button>
         <button className={style.agregar} onClick={() => onSearch(Math.floor(Math.random() * 826))}>Random</button>
      </div>
   );
}
