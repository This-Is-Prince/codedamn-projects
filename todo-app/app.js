let todos = [];

window.addEventListener("load", () => {
  let index = 0;
  const addBtn = document.querySelector(".add-btn");
  const deleteBtn = document.getElementById("clear-input");
  const inputTodo = document.getElementById("inputTag-todo");
  const todosElm = document.querySelector(".todos");

  deleteBtn.addEventListener("click", () => {
    inputTodo.value = "";
  });

  const todosString = localStorage.getItem("todos");
  if (todosString !== null) {
    todos = JSON.parse(todosString);
    todos.forEach((todo) => {
      addTodo(todosElm, todo.data, todo.id);
    });
  }

  addBtn.addEventListener("click", () => {
    const value = inputTodo.value.trim();
    if (value !== "") {
      index++;
      todos.push({
        id: index,
        data: value,
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      addTodo(todosElm, value, index);
    }
    inputTodo.value = "";
  });
});

const addTodo = (todosElm, value, index) => {
  const todo = createElement("article", ["todo"]);
  todo.setAttribute("data-id", index);

  const input = createElement("input", ["input"]);
  input.disabled = true;
  input.value = value;
  todo.appendChild(input);

  const doneBtn = createElement("button", ["btn", "done-btn"]);
  doneBtn.addEventListener("click", doneHandler);
  const checkIcon = createElement("i", ["fa", "fa-check"]);
  doneBtn.appendChild(checkIcon);
  todo.appendChild(doneBtn);

  const editBtn = createElement("button", ["btn", "edit-btn"]);
  editBtn.addEventListener("click", editHandler);
  const editIcon = createElement("i", ["fa", "fa-edit"]);
  editBtn.appendChild(editIcon);
  todo.appendChild(editBtn);

  const deleteBtn = createElement("button", ["btn", "delete-btn"]);
  deleteBtn.id = "remove-todo";
  deleteBtn.addEventListener("click", deleteHandler);
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

/* 
===========
All Handler
===========
*/
function deleteHandler() {
  const todo = this.parentNode;
  const id = +todo.getAttribute("data-id");

  todo.remove();
  todos = todos.filter((todo) => {
    if (todo.id == id) {
      return false;
    }
    return true;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function editHandler() {
  this.parentNode.children[0].disabled = false;
}

function doneHandler() {
  const todo = this.parentNode;
  const id = +todo.getAttribute("data-id");
  const input = todo.children[0];
  const value = input.value;
  input.disabled = true;

  todos = todos.map((todo) => {
    if (todo.id == id) {
      return { id: todo.id, data: value };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
