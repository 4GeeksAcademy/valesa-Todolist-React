import React from "react";
import { useState } from "react";


const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return;

  <li>
    <input
      type="text"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setTodos(todos.concat([inputValue]));
          setInputValue("");
        }
      }}
      placeholder="What needs to be done?"
    />
  </li>;
};

export default Input;
