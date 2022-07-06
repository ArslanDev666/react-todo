import React, { ChangeEvent, memo, useState } from "react";
import "./styles.css";

interface IInputProps {
  handleAddTask: (value: string) => void;
}

const Input = ({ handleAddTask }: IInputProps) => {
  const [task, setTask] = useState<string>("");

  const onChangeTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onClickAddTask = () => {
    const value = task.trim();

    setTask("");

    if (!value) return alert("Текст задачи не может быть пустым.");

    handleAddTask(value);
  };

  return (
    <div className="todo-input">
      <input className="todo-input__text" type="text" value={task} onChange={onChangeTaskInput} />
      <button className="todo-input__add" onClick={onClickAddTask}>
        Добавить
      </button>
    </div>
  );
};

export default memo(Input);
