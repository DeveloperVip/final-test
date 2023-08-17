import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import All from "./Component/All/All";
import Active from "./Component/Active/Active";
import Completed from "./Component/Completed/Completed";
import { useEffect, useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import { clear } from "@testing-library/user-event/dist/clear";
import Complete from "./Component/Complete/Complete";

function App() {
  const [choosen, setChoosen] = useState("all");
  const [complete, setComplete] = useState([]);
  const handleTag = () => {};
  useEffect(() => {
    handleTag();
  }, [choosen]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY"));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removeArray = todos.filter((todo) => todo.id !== id);
    setTodos(removeArray);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        setComplete([...complete, todo]);
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <ul className="navLink">
          <li>
            <Link to="/" onClick={() => setChoosen("all")}>
              All
            </Link>
          </li>
          <li>
            <Link to="/active" onClick={() => setChoosen("active")}>
              Active
            </Link>
          </li>
          <li>
            <Link to="/complete" onClick={() => setChoosen("complete")}>
              Complete
            </Link>
          </li>
        </ul>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<All onSubmit={addTodo} />} />
        <Route
          path="/active"
          element={
            <Active
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          }
        />
        <Route path="/complete" element={<Complete complete={complete} />} />
      </Routes>
    </div>
  );
}

export default App;
