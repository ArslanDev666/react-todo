import React from "react";

import "./styles.css";

const Select = () => {
  return (
    <select className="todo-select">
      <option value="all">Все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
      <option value="deleted">удалённые</option>
    </select>
  );
};

export default Select;
