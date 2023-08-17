import React from "react";
import "./Complete.css";

const Complete = ({ complete }) => {
  return complete.map((item) => {
    return (
      <div className="itemTodo">
        <div>{item.text}</div>
        <button>Finish</button>
      </div>
    );
  });
};

export default Complete;
