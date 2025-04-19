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
        if(evt.key === 'Escape'){
            this.close(this._popupElement);
        }
    }

    setEventListeners(){
          // this._popupClosedBtn.addEventListener('click', () =>{
        //     this.close();
        // })

        this._popupElement.addEventListener('mousedown', (evt) => {
            if((this._popupElement.classList.contains(".popup__close")) || (evt.target === evt.currentTarget)){
                this.close();
                //fix to where the form closes when background is clicked and not the form itself
            }
            });
        }

    }

export default Popup;