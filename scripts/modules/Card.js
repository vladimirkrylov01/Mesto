import {popupImageWindow} from './constants.js'
import {openPopup} from "./utils.js";

export class Card {
  constructor({name,link},_cardSelector) {
    this._cardName = name
    this._cardLink = link
    this.cardSelector = _cardSelector
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
    this.card.querySelector('.card__image').addEventListener('click', () => {
      this._preview()
    })
  }
// приватный метод - лайкаем
  _like() {
    this.card.querySelector('.card__like').classList.toggle('card__like_active')
  }
// приватный метод - удаляем
  _remove() {
    this.card.remove()
  }
  // приватный метод - наполняем превью
  _preview() {
    openPopup(popupImageWindow)
    const popupImageFigure = popupImageWindow.querySelector('.popup__image') // picture
    const popupImageCaption = popupImageWindow.querySelector('.popup__image-caption') // caption
    popupImageFigure.src = this._cardLink
    popupImageFigure.alt = this._cardName
    popupImageCaption.textContent = this._cardName
  }
// публичный метод - возвращаем наружу
  render() {
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