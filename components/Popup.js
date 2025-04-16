class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._popupClosedBtn = this._popupElement.querySelector('.popup__close')
    }

    open(){
        this._popupElement.classList.add("popup_visible");

    }

    close(){
        this._popupElement.classList.remove("popup_visible");

    }

    _handleEscapeClose(){

    }

    setEventListeners(){
        this._popupClosedBtn.addEventListener('click', () =>{
            this.close();
        })
    }
}

export default Popup;