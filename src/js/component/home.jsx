import React from "react";
import { useState } from "react";

//Imports FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="container">
      <h1>Todo List</h1>

      <ul>
        {/** Input de tareas */}
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
        </li>

        {/** Elemento tarea nueva */}
        {todos.map((tarea, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            {tarea}
            {hoveredIndex === index && (
              <FontAwesomeIcon
                className="iconDelete"
                icon={faTrashAlt}
                onClick={() => {
                  setTodos(
                    todos.filter((_, currentIndex) => index !== currentIndex)
                  );
                }}
              />
            )}
          </li>
        ))}
      </ul>

      <div>
        {todos.length}
        <strong> tasks left</strong>
      </div>
    </div>
  );
};

export default Home;
