import React, { memo } from "react";

import { MdAutorenew, MdDelete, MdDone } from "react-icons/md";
import { TStatuses, TTask } from "../../ts/task";

import "./styles.css";

interface IItemProps extends TTask {
  onChangeStatus: (changedTask: string, newStatus: TStatuses) => void;
}

const initialStatus: TStatuses = "active";

const Item = ({ status, task, onChangeStatus }: IItemProps) => {
  return (
    <li className="todo-item">
      <div className="todo-item__content" data-status={status}>
        <p className="todo-item__task">{task}</p>
      </div>
      <div className="todo-item__actions">
        {status !== "active" && (
          <button
            className="todo-item__action todo-item__action_restore"
            title="restore"
            onClick={() => onChangeStatus(task, initialStatus)}
          >
            <MdAutorenew />
          </button>
        )}
        {status !== "completed" && status !== "deleted" && (
          <button
            className="todo-item__action todo-item__action_complete"
            title="complete"
            onClick={() => onChangeStatus(task, "completed")}
          >
            <MdDone />
          </button>
        )}
        {status !== "deleted" && (
          <button
            className="todo-item__action todo-item__action_delete"
            title="delete"
            onClick={() => onChangeStatus(task, "deleted")}
          >
            <MdDelete />
          </button>
        )}
      </div>
    </li>
  );
};

export default memo(Item);
