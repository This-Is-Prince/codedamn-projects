import todos from "./data.js";

window.addEventListener("load", () => {
  const addBtn = document.querySelector(".add-btn");
  const deleteBtn = document.getElementById("clear-input");
  const inputTodo = document.getElementById("inputTag-todo");
  const todosElm = document.querySelector(".todos");

  deleteBtn.addEventListener("click", () => {
    inputTodo.value = "";
  });

  addBtn.addEventListener("click", () => {
    const value = inputTodo.value.trim();
    if (value !== "") {
      todos.push(value);
      addTodo(todosElm, value, todos.length - 1);
    }
    inputTodo.value = "";
  });
});

const addTodo = (todosElm, value, index) => {
  const todo = createElement("article", ["todo"]);
  todo.setAttribute("data-index", index);

  const input = createElement("input", ["input"]);
  input.value = value;
  todo.appendChild(input);

  const doneBtn = createElement("button", ["btn", "done-btn"]);
  const checkIcon = createElement("i", ["fa", "fa-check"]);
  doneBtn.appendChild(checkIcon);
  todo.appendChild(doneBtn);

  const editBtn = createElement("button", ["btn", "edit-btn"]);
  const editIcon = createElement("i", ["fa", "fa-edit"]);
  editBtn.appendChild(editIcon);
  todo.appendChild(editBtn);

  const deleteBtn = createElement("button", ["btn", "delete-btn"]);
  deleteBtn.id = "remove-todo";
  const trashIcon = createElement("i", ["fa", "fa-trash"]);
  deleteBtn.appendChild(trashIcon);
  todo.appendChild(deleteBtn);

  todosElm.appendChild(todo);
};

const createElement = (type, classes) => {
  const elm = document.createElement(type);
  classes.forEach((c) => {
    elm.classList.add(c);
  });
  return elm;
};
