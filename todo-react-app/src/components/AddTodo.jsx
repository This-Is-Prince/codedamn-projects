import { FaPlus, FaTrashAlt } from "react-icons/fa";

const AddTodo = () => {
  return (
    <section className="add-todo">
      <input type="text" className="add-todo-input" placeholder="Add Task..." />
      <button className="btn add-btn center">
        <FaPlus></FaPlus>
      </button>
      <button className="btn clear-btn center">
        <FaTrashAlt></FaTrashAlt>
      </button>
    </section>
  );
};

export default AddTodo;
