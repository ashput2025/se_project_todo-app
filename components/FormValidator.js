class FormValidator {
    constructor(settings, formEl) {
        this._settings = settings;
        this._formEl = formEl;
       this._inputSelector= "settings.popup__input",
       this._submitButtonSelector= "settings.popup__button",
       this._errorClass= "settingspopup__error_visible",
       this._inputErrorClass= "settingspopup__input_type_error",
       this._inactiveButtonClass= "settingsbutton_disabled",this._    }
    enableValidation(){};
}

export default FormValidator;