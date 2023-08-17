import React, { useEffect, useRef, useState } from "react";
import "./All.css";
import { MdOutlineEditNote } from "react-icons/md";

const All = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [check, setCheck] = useState([{ value: null, id: "" }]);
  const inputRef = useRef("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = list.length + 1;
    if (todo) {
      setList([...list, { id: num, todo: todo }]);
      props.onSubmit({
        id: num,
        text: todo,
        isComplete: false,
      });
      setTodo("");
    } else {
      alert("Please enter todo");
    }
  };
  const clickCheck = (e) => {
    const value = e.target.checked;
    console.log(value);
    const identify = e.target.id;
    console.log(identify);
    setCheck([...check, { value: value, id: identify }]);
  };
  return (
    <div className="all">
      <form onSubmit={handleSubmit}>
        <input
          className="addTodo"
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Add detail"
          ref={inputRef}
          maxLength={300}
          autoComplete="off"
        />

        <button type="submit">
          <MdOutlineEditNote size={20} />
        </button>
      </form>
      <section>
        {list.map((item, index) => {
          return (
            <div key={index} className="showTodo">
              <input
                type="checkbox"
                id={index}
                name="choose"
                onChange={clickCheck}
              />
              <label
                htmlFor="choose"
                // style={{
                //   textDecoration:
                // }}
              >
                {item.todo}
              </label>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default All;
