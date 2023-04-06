import React, { useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Deatil from './components/Deatil/Deatil';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Form from './components/Form/Form';
import Favorite from './components/Favorite/Favorite';
import style from './App.css'


function App() {
   const [characters, setCharacters] = React.useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = React.useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      !access && navigate("/")
   }, [access])

   const EMAIL = 'juan@gmail.com';
   const PASSWORD = 'juan1234';

   const onSearch = (id) => {

      if(characters.find((char) => char.id == id)){
         return alert('personaje repetido');
      }

      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id!==id));
   };

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const logOut = () => {
      if(access){
         setAccess(false)
         navigate("/")
      }
   }

   return (
      <div className={style.App}>
         {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>
         <Route path= "/" element= {<Form login={login} />} />
         <Route path= "/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path= "/about" element= {<About/>}/>
         <Route path= "/favorites" element= {<Favorite onClose={onClose} />}/>
         <Route path= "/detail/:id" element= {<Deatil/>}/>
         <Route path='*' element={<NotFound />}/>
         </Routes>
      </div>
   );
}

export default App;
