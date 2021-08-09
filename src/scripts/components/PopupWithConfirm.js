import {Popup} from "./Popup.js";
export class PopupWithConfirm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler
    this._form = this._popup.querySelector('.form')
    this._submitButton = this._form.querySelector('.popup__button-submit')
    this._initialText = this._submitButton.textContent
  }

  openPopup (card) {
    super.openPopup()
    this._card = card
  }

  formLoading(isLoading) {
    if (isLoading) {
      if (this._form.classList.contains('deleteCardForm')) {
        this._submitButton.textContent = "Удаление..."
      }
    } else {
      this._submitButton.textContent = this._initialText
    }
  }

  setEventListeners () {
    super.setEventListeners()
    this._form.addEventListener('submit', e => {
      this.formLoading(true)
      e.preventDefault()
      this._submitHandler(this._card)
    })
  }
}