import { initialTodos, validationConfig } from "../utils/constants.js";
import Todos from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/Section.js";


console.log(uuidv4());
console.log(validationConfig);

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
export const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todo = new Todos(data, "#todo-template");
    return todo.getView();
  },
  containerSelector: '.todos__list'
}); 

section.renderItems();

 const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const generateTodo = (data) => {
  const todo = new Todos(data, "#todo-template");
  const todoElement = todo.getView();
  
  return todoElement;
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };

  const todoElement = section._renderer(values);
  section.addItem(todoElement);

  newTodoValidator.resetValidation();
  closeModal(addTodoPopup);
});



// const renderTodo = (items) => {
//   const todo = generateTodo(items);
//   todosList.append(todo);
// };

// initialTodos.forEach(renderTodo);

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();