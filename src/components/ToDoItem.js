import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <p>{this.props.text}</p>
        <button className="btn">{this.props.status ? "↻" : "✓"}</button>
      </div>
    );
  }
}

export default ToDoItem;
