import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'

export default function Nav({onSearch, logOut})  {

    return(
        <div className={style.container} >
            <SearchBar onSearch={onSearch}/>
            <Link to={"/about"}>
            <button >About</button>
            </Link>
            <Link to={"/home"}>
            <button >Home</button>
            </Link>
            <Link to={"/favorites"}>
            <button >Favorites</button>
            </Link>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}
