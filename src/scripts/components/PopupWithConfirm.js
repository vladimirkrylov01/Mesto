import {Popup} from "./Popup.js";
export class PopupWithConfirm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler
  }

  openPopup (data) {
    super.openPopup()
    this._data = data
  }

  formLoading(isLoading) {
    this._form = this._popup.querySelector('.form')
    this._submitButton = this._form.querySelectorAll('.popup__button-submit')

    if (isLoading) {
      this._submitButton.textContent = "Удаление..."
    } else {
      return this._submitButton.textContent
    }
  }

  setEventListeners () {
    super.setEventListeners()
    this._form = this._popup.querySelector('.form')
    this._form.addEventListener('submit', e => {
      e.preventDefault()
      this._submitHandler(this._data)
    })
  }
}