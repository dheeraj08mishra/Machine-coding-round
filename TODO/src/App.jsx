import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index
        ? todo.includes("(completed)")
          ? todo
          : `${todo} (completed)`
        : todo
    );
    setTodos(newTodos);
  };
  return (
    <>
      <h1>To Do App</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => completeTodo(index)}>complete</button>
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
