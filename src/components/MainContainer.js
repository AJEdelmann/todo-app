import React from "react";
import FormContainer from "./FormContainer";
import ToDoContainer from "./ToDoContainer";
import ToDonesContainer from "./ToDonesContainer";

const MainContainer = () => {
  const data = [
    { text: "Do your thing", status: false, id: 1407892 },
    { text: "Be yourself", status: true, id: 1467892 },
    { text: "Explain something", status: false, id: 5436436 },
    { text: "Be a dog", status: true, id: 3436436 },
    { text: "Bite a tree", status: false, id: 2436436 },
    { text: "Plant a tree", status: false, id: 1436436 },
    { text: "Save the world", status: true, id: 7436436 },
    { text: "Achieve world piece", status: false, id: 4363438 }
  ];

  const todos = data.filter(el => !el.status);
  const todones = data.filter(el => el.status);

  return (
    <main className="main-container">
      <FormContainer></FormContainer>
      <ToDoContainer items={todos}></ToDoContainer>
      <ToDonesContainer items={todones}></ToDonesContainer>
    </main>
  );
};

export default MainContainer;
