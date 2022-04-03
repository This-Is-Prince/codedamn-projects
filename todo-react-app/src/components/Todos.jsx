import Todo from "./Todo";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Todos = ({ isLSUpdated, setIsLSUpdated }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setIsLSUpdated(false);
    setTodos(useLocalStorage("todos"));
  }, [isLSUpdated]);

  const deleteTodo = (id) => {
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        return todo.id != id;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const editTodo = (id, value) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, value };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <section className="todos">
      {todos.map(({ id, value }) => {
        return (
          <Todo
            key={id}
            id={id}
            value={value}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </section>
  );
};
export default Todos;
