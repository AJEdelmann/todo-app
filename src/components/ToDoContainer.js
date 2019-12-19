import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);

    // binding is necessary to make 'this' work in the callback
    this.updateRandomly = this.updateRandomly.bind(this);
  }

  updateRandomly() {
    this.props.updateFromChild();
  }

  render() {
    const data = this.props.items;
    const todoItems = data.map(el => {
      return (
        <ToDoItem key={el.id} text={el.text} status={el.status}></ToDoItem>
      );
    });

    return (
      <div className="todos-container">
        {data.length > 0 && (
          <div className="todos">
            <button className="fake btn" onClick={this.updateRandomly}>
              Random update
            </button>
            <h5>TODOS</h5>
            {todoItems}
          </div>
        )}
      </div>
    );
  }
}

export default ToDoContainer;
