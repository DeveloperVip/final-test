import React, { useState } from "react";
import "./Active.css";
import Completed from "../Completed/Completed";

const Active = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const pendingTodo = [];
  const completedTodo = [];
  todos.forEach((item) => {
    const value = item.isComplete;
    console.log(value);
    value === true ? completedTodo.push(item) : pendingTodo.push(item);
  });

  return (
    <>
      <div className="todo-list">
        <div>
          {pendingTodo.length > 0 ? (
            pendingTodo.map((todo, index) => {
              return (
                <div className="todo-pending" key={index}>
                  <Completed
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    submitUpdate={submitUpdate}
                    edit={edit}
                    setEdit={setEdit}
                  />
                </div>
              );
            })
          ) : (
            <p>Todo list is empty</p>
          )}
        </div>

        {completedTodo.length > 0 && (
          <div className="todo-list">
            <h6>Completed Tasks</h6>
            <hr />
          </div>
        )}

        <div>
          {completedTodo.length > 0 &&
            completedTodo.map((todo, index) => (
              <div className="todo-completed" key={index}>
                <Completed
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Active;
