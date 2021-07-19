export class SubmitForm{
  constructor({formSelector}) {
    this._formSelector = formSelector
  }
  _getTemplate(){
    return document
      .querySelector(this._formSelector)
      .content
      .querySelector('.form')
      .cloneNode(true)
  }

  _setEventListeners(){
    this._element.addEventListener('submit', e => { // при сабмите формы
      e.preventDefault() // отменим стандартное поведение
      this._element.reset() // и сбросим её поля
    })
  }

  generateForm(){
    this._element = this._getTemplate() // создаём элемент
    this._setEventListeners()
    return this._element
  }
}