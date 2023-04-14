import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'

export default function Nav({onSearch, logOut})  {

    return(
        <div className={style.container} >
            <div className={style.divButtons}>
            <SearchBar  onSearch={onSearch}/>
            <Link to={"/home"}>
            <button className={style.buttons} >Home</button>
            </Link>
            <Link to={"/favorites"}>
            <button className={style.buttons} >Favorites</button>
            </Link>
            </div>
            <div className={style.logOut}>
            <Link to={"/about"}>
            <button className={style.buttons} >About</button>
            </Link>
            <button className={style.buttons} onClick={logOut}>LogOut</button>
            </div>
        </div>
    )
}


// Math.floor(Math.random() * 826)