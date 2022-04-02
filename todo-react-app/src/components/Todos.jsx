import useLocalStorage from "../hooks/useLocalStorage";
import Todo from "./Todo";

const Todos = () => {
  const todos = useLocalStorage("todos");

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo key={todo.id} value={todo.value} />;
      })}
    </section>
  );
};
export default Todos;
