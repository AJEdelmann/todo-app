import React from "react";

const ToDoItem = props => {
  // props.text
  // props.status

  return (
    <div className="item">
      <p>{props.text}</p>
      <button className="btn">{props.status ? "↻" : "✓"}</button>
    </div>
  );
};

export default ToDoItem;
