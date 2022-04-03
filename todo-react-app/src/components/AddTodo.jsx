import { v4 } from "uuid";
import { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";

const AddTodo = ({ setIsLSUpdated }) => {
  const [value, setValue] = useState("");

  return (
    <section className="add-todo">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="add-todo-input"
        placeholder="Add Task..."
      />
      <button
        className="btn add-btn center"
        onClick={() => {
          if (value.trim() != "") {
            const todo = {
              id: v4(),
              value,
            };
            setValue("");
            const todos = useLocalStorage("todos");
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
            setIsLSUpdated(true);
          }
        }}
      >
        <FaPlus></FaPlus>
      </button>
      <button
        className="btn clear-btn center"
        onClick={() => {
          setValue("");
        }}
      >
        <FaTrashAlt></FaTrashAlt>
      </button>
    </section>
  );
};

export default AddTodo;
