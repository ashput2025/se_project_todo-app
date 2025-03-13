class FormValidator {
    constructor(settings, formEl) {
        this._settings = settings;
        this._formEl = formEl;
       this._inputSelector= settings.popup__input;
       this._submitButtonSelector= settings.popup__button;
       this._errorClass= settings.popup__error_visible;
       this._inputErrorClass= settings.popup__input_type_error;
       this._inactiveButtonClass= settings.button_disabled;   }
    enableValidation(){};
}

export default FormValidator;