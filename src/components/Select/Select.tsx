import React, { ChangeEvent, memo } from "react";

import { TFilter } from "../../ts/filter";

import "./styles.css";

interface ISelectProps {
  value: TFilter;
  onChange: (value: TFilter) => void;
}

const Select = ({ onChange, value }: ISelectProps) => {
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TFilter;

    onChange(value);
  };

  return (
    <select className="todo-select" onChange={onChangeSelect} value={value}>
      <option value="all">Все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
      <option value="deleted">удалённые</option>
    </select>
  );
};

export default memo(Select);
