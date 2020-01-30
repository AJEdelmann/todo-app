import React from "react";
import { updateTodo } from "../actions";
import { connect } from "react-redux";

const ToDoItem = props => {
  // function updateItem(e) {
  //   e.preventDefault();
  //   const item = props.data;
  //   props.handleUpdate(item);
  // }

  return (
    <div className="item">
      <p>{props.data.text}</p>
      <button className="btn" onClick={() => props.updateTodo(props.data)}>
        {" "}
        {/* updateItem */}
        {props.data.status ? "☑" : "☐"}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { updateTodo })(ToDoItem);
