import React from 'react';
import { useState } from 'react';
import Validation from './Validation';
import style from './Form.module.css'

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
        <div className={style.container} >
         <form className={style.form} onSubmit={handleSubmit} >
             <div >
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                <p className={style.emailError} >{errors.email}</p>
            </div>
            <div  >
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                <p className={style.passwordError} >{errors.password}</p>
            </div>
            <div >
                <button className={style.submit} >Submit</button>
            </div>
         </form>
        </div>
    )
}

export default Form