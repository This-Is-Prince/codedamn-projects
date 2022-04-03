import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const Todo = ({ id, value, deleteTodo, editTodo }) => {
  const [state, setState] = useState(value);
  const [edit, setEdit] = useState(true);

  return (
    <article className="todo">
      <input
        type="text"
        value={state}
        disabled={edit}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        className="btn done-btn center"
        onClick={() => {
          setEdit(true);
          editTodo(id, state);
        }}
      >
        <MdDone></MdDone>
      </button>
      <button
        className="btn edit-btn center"
        onClick={() => {
          setEdit(false);
        }}
      >
        <FaEdit></FaEdit>
      </button>
      <button
        className="btn delete-btn center"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <FaTrashAlt></FaTrashAlt>
      </button>
    </article>
  );
};

export default Todo;
