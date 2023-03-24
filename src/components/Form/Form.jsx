import React from 'react';
import { useState } from 'react';
import Validation from './Validation';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = React.useState({
        email:"",
        password:"",
      })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
         <form action="" onSubmit={handleSubmit} >
             <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                <p>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
         </form>
    )
}

export default Form