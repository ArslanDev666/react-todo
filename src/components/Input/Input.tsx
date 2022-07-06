import React from "react";

import "./styles.css";

const Input = () => {
  return (
    <div className="todo-input">
      <input className="todo-input__text" type="text" />
      <button className="todo-input__add">Добавить</button>
    </div>
  );
};

export default Input;
