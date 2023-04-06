import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.cards}>
      {characters.map(({ id, name, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
