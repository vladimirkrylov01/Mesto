import {Popup} from "./Popup.js";
export class PopupWithConfirm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler
    this._form = this._popup.querySelector('.form')
  }

  openPopup (data) {
    super.openPopup()
    this._data = data
  }

  formLoading(isLoading) {
    this._submitButton = this._form.querySelector('.popup__button-submit')

    if (isLoading) {
      if (this._form.classList.contains('deleteCardForm')) {
        this._submitButton.textContent = "Удаление..."
        console.log(this._submitButton.textContent);
      }
    } else {
      return this._submitButton.textContent
    }
  }

  setEventListeners () {
    super.setEventListeners()
    this._form.addEventListener('submit', e => {
      e.preventDefault()
      this._submitHandler(this._data)
    })
  }
}