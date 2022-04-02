import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const Todo = () => {
  return (
    <article className="todo">
      <input type="text" />
      <button className="btn done-btn center">
        <MdDone></MdDone>
      </button>
      <button className="btn edit-btn center">
        <FaEdit></FaEdit>
      </button>
      <button className="btn delete-btn center">
        <FaTrashAlt></FaTrashAlt>
      </button>
    </article>
  );
};

export default Todo;
