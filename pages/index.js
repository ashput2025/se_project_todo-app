// REMOVE COMMENTS BEFORE SUBMITTING

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todos from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";

console.log(uuidv4());
console.log(validationConfig);

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
export const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    const name = values.name;
  const dateInput = values.date;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  values.id = uuidv4();

  const todoElement = section._renderer(values);
  section.addItem(todoElement);

  newTodoValidator.resetValidation();
  addTodoPopup.close();
  }
});

addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todo = new Todos(data, "#todo-template");
    return todo.getView();
  },
  containerSelector: '.todos__list'
}); 

section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
  newTodoValidator.resetValidation();
});

addTodoCloseBtn.addEventListener("click", () => {
addTodoPopup.close();
});

addTodoForm.addEventListener("submit", (evt) => {
  // evt.preventDefault();
  // const name = evt.target.name.value;
  // const dateInput = evt.target.date.value;

  // // Create a date object and adjust for timezone
  // const date = new Date(dateInput);
  // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  // const id = uuidv4();
  // const values = { name, date, id };

  // const todoElement = section._renderer(values);
  // section.addItem(todoElement);

  // newTodoValidator.resetValidation();
  // addTodoPopup.close();
});



// const renderTodo = (items) => {
//   const todo = generateTodo(items);
//   todosList.append(todo);
// };
                 
// initialTodos.forEach(renderTodo);           REMOVE FUNCTION

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();