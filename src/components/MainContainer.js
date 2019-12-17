import React from "react";
import FormContainer from "./FormContainer";
import ToDoContainer from "./ToDoContainer";
import ToDonesContainer from "./ToDonesContainer";

function MainContainer() {
  return (
    <main className="main-container">
      <FormContainer></FormContainer>
      <ToDoContainer></ToDoContainer>
      <ToDonesContainer></ToDonesContainer>
    </main>
  );
}

export default MainContainer;
