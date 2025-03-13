class FormValidator {
    constructor(settings, formEl) {
        this._formEl = formEl;
        this._inputSelector= settings.inputSelector;
        this._formSelector= settings.formSelector;
       this._submitButtonSelector= settings.submitButtonSelector;
       this._errorClass= settings.errorClass;
       this._inputErrorClass= settings.inputErrorClass;
       this._inactiveButtonClass= settings.inactiveButtonClass;   
    }

    _toggleButtonState(inputList){
        if (this._hasInvalidInput(this._inputList)){
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

      _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(
              this._formEl,
              inputElement,
              inputElement.validationMessage,
            );
          } else {
            this._hideInputError(inputElement );
          }
      };

      _showInputError = (errorMessage, inputElement) => {
        this._errorElementId = `#${inputElement.id}-error`;
        this._errorElement = this._formEl.querySelector(this._errorElementId);
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass);
      };

      _hideInputError = (inputElement) => {
        this._errorElementId = `#${inputElement.id}-error`;
        this._errorElement = this._formEl.querySelector(this._errorElementId);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = "";
      };

      _resetValidation = () => {
        this._inputList.forEach(() => {
          this._hideInputError();
        });
      };

    _setEventListeners(){
        this._inputList = Array.from
        (this._formEl.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formEl.querySelector(
            this._submitButtonSelector);

        this._toggleButtonState(this._inputList);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList);
            });
        });
    }

    enableValidation(){
        this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
}

export default FormValidator;