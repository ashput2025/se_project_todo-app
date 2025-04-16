class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._popupClosedBtn = this._popupElement.querySelector('.popup__close')
    }

    open(){
        this._popupElement.classList.add("popup_visible");
        document.addEventListener('keyup', this._handleEscapeClose.bind(this));
    }

    close(){
        this._popupElement.classList.remove("popup_visible");

    }

    _handleEscapeClose(evt){
        console.log('key');
        if(evt.key === 'Escape'){
            this.close();
        }
    }

    setEventListeners(){
        this._popupClosedBtn.addEventListener('click', () =>{
            this.close();
        })

        document.addEventListener('keyup', this._handleEscapeClose.bind(this));

    }
}

export default Popup;