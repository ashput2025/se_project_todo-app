class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
    }

    open(){
        this._popupElement.classList.add("popup_visible");

    }

    close(){

    }

    _handleEscapeClose(){

    }

    setEventListeners(){

    }
}

export default Popup;