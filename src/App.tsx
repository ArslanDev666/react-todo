import React, { useCallback, useEffect, useState } from "react";

import Input from "./components/Input";
import Item from "./components/Item";
import Select from "./components/Select";

import "./styles/app.css";
import { TFilter } from "./ts/filter";
import { TStatuses, TTask } from "./ts/task";

const initialTasks: TTask[] = [
  {
    status: "active",
    task: "Написать react-trello",
  },
  {
    status: "completed",
    task: "Написать react-todo",
  },
  {
    status: "deleted",
    task: "Написать react-snake",
  },
];

const initialStatus: TStatuses = "active";

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [filter, setFilter] = useState<TFilter>("all");

  const currentTasks = tasks.filter((t) => filter === "all" || t.status === filter);

  const handleAddNewTask = useCallback(
    (task: string) => {
      const newTask: TTask = {
        status: initialStatus,
        task,
      };

      const isIncluded = tasks.find((t) => t.task.toLowerCase() === task.toLowerCase());

      if (isIncluded) {
        alert("Задача уже существует.");
        return;
      }

      setTasks((prevTasks) => {
        const updateTasks = [newTask, ...prevTasks];

        localStorage.setItem("todo-tasks", JSON.stringify(updateTasks));

        return updateTasks;
      });
    },
    [tasks]
  );

  const handleChangeTaskStatus = useCallback((changedTask: string, newStatus: TStatuses) => {
    setTasks((prevTasks) => {
      const updateTasks = prevTasks.map((t) => {
        if (t.task === changedTask) {
          t.status = newStatus;
        }

        return t;
      });

      localStorage.setItem("todo-tasks", JSON.stringify(updateTasks));

      return updateTasks;
    });
  }, []);

  const handleChangeFilter = useCallback((filter: TFilter) => {
    setFilter(filter);
  }, []);

  useEffect(() => {
    const tasks = localStorage.getItem("todo-tasks");

    if (!tasks) {
      setTasks(initialTasks);

      localStorage.setItem("todo-tasks", JSON.stringify(initialTasks));

      return;
    }

    setTasks(JSON.parse(tasks));
  }, []);

  return (
    <div className="todo">
      <div className="todo__header">
        <Input handleAddTask={handleAddNewTask} />
        <Select value={filter} onChange={handleChangeFilter} />
      </div>

      <ul className="todo__list">
        {currentTasks.length > 0 ? (
          currentTasks.map((task, idx) => (
            <Item {...task} onChangeStatus={handleChangeTaskStatus} key={idx} />
          ))
        ) : (
          <span>Тут пусто.</span>
        )}
      </ul>
    </div>
  );
}

export default App;
