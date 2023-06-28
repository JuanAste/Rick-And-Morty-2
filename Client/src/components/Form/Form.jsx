import React from "react";
import { useState } from "react";
import Validation from "./Validation";
import style from "./Form.module.css";

const Form = ({ login, singUp }) => {
  const [create, setCreate] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    Validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleClick = () => {
    const creat = create ? false : true;
    setCreate(creat);
  };

  const handleSubmit = (event) => {
    if (!create) {
      event.preventDefault();
      login(userData);
    } else {
      event.preventDefault();
      singUp(userData);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p className={style.emailError}>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p className={style.passwordError}>{errors.password}</p>
        </div>
        {!create ? (
          <div>
            <button className={style.submit}>Submit</button>
            <div>
              <button onClick={handleClick} type="button">
                Sing Up
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button className={style.submit}>Create</button>
            <div>
              <button onClick={handleClick} type="button">
                Log In
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
