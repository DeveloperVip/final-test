import React from "react";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import All from "../All/All";

function Completed({
  todo,
  completeTodo,
  removeTodo,
  submitUpdate,
  edit,
  setEdit,
}) {
  console.log(todo);
  return (
    <>
      <div className="todo-list-item">
        <div className="todo-mark-icon">
          {todo.isComplete ? (
            <RiCheckboxCircleFill onClick={() => completeTodo(todo.id)} />
          ) : (
            <RiCheckboxBlankCircleLine onClick={() => completeTodo(todo.id)} />
          )}
        </div>

        <div className="todo-item">
          {todo.isComplete ? (
            <p>
              <del>{todo.text}</del>
            </p>
          ) : edit.id === todo.id ? (
            <All edit={edit} onSubmit={submitUpdate} />
          ) : (
            <p> {todo.text} </p>
          )}
        </div>
      </div>
      <div className="todo-icons">
        {!todo.isComplete && (
          <MdModeEditOutline
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        )}
        <MdDeleteOutline
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </>
  );
}

Completed.defaultProps = {
  edit: { id: null, value: "" },
};

export default Completed;
