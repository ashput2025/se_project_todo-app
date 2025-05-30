import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];
export const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    const dateInput = values.date;
    values.id = uuidv4();

    const todoElement = section.renderer(values);
    //fix todoElement
    section.addItem(todoElement);

    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});

addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todo = new Todo(
      data,
      "#todo-template",
      handleCheck,
      handleDelete,
      todoTotal
    );
    return todo.getView();
  },
  containerSelector: ".todos__list",
});

function todoTotal(total) {
  todoCounter.updateTotal(total);
}

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
  newTodoValidator.resetValidation();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
