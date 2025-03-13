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

    _toggleButtonState( buttonElement){
        if (this._hasInvalidInput()){
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

      _checkInputValidity(){
        if (!this._inputElement.validity.valid) {
            showInputError(
              this._formEl,
              this._inputElement,
              this._inputElement.validationMessage,
                settings,
            );
          } else {
            hideInputError( this._inputElement );
          }
      };

    _setEventListeners(){
        this._inputList = Array.from
        (this._formEl.querySelectorAll(this._inputSelector));
        const buttonElement = this._formEl.querySelector(
            this._submitButtonSelector);

        this._toggleButtonState(this._inputList, buttonElement);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
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