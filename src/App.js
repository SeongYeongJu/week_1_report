import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
      </header>
      <InputArea />
    </div>
  );
}

function InputArea() {
  const [titleValue, titleSetValue] = useState("");
  const [todoValue, todoSetValue] = useState("");

  const titleOnChangeHandler = (e) => {
    const titleInputValue = e.target.value;
    titleSetValue(titleInputValue);
  };

  const todoOnChangeHandler = (e) => {
    const todoInputValue = e.target.value;
    todoSetValue(todoInputValue);
  };

  // function onClickHandler() {

  // }

  return (
    <div>
      <div className="inputDiv">
        <p>Title</p>
        <input type="text" onChange={titleOnChangeHandler} value={titleValue} />
        <p>Todo</p>
        <input type="text" onChange={todoOnChangeHandler} value={todoValue} />
        <button className="input-button">작성하기</button>
      </div>
      <ListArea />
    </div>
  );
}

function ListArea({ titleValue, todoValue }) {
  return <div>{titleValue}</div>;
}

export default App;
