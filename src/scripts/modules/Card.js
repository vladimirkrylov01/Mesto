export class Card {
  constructor({name, link},
              _cardSelector,
              _cardImageClickHandler) {
    this._cardName = name
    this._cardLink = link
    this.cardSelector = _cardSelector
    this._cardImageClickHandler = _cardImageClickHandler
  }

// приватный метод - клонируем
  _getTemplate() {
    return document
      .querySelector(this.cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }

// приватный метод - вешаем слушатели
  _makeEventListeners() {
    this.card.querySelector('.card__delete-button').addEventListener('click', () => {
      this._remove()
    })
    this.card.querySelector('.card__like').addEventListener('click', () => {
      this._like()
    })
    this.card.querySelector('.card__image').addEventListener('click', () =>
      this._cardImageClickHandler(this._cardName,this._cardLink))
  }

// приватный метод - like
  _like() {
    this.card.querySelector('.card__like').classList.toggle('card__like_active')
  }

// приватный метод - удаляем
  _remove() {
    this.card.remove()
  }

// публичный метод - возвращаем наружу
  renderCard() {
    this.card = this._getTemplate()
    const title = this.card.querySelector('.card__title')
    const image = this.card.querySelector('.card__image')
    title.textContent = this._cardName
    image.src = this._cardLink
    image.alt = this._cardName
    this._makeEventListeners()
    return this.card
  }
}