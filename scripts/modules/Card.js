import {itemCardTemplate,popupImageWindow} from './constants.js'
import {openPopup} from "./utils.js";
export class Card {
  constructor(data) {
    this._cardName = data.name
    this._cardLink = data.link
    this._cloneCard = itemCardTemplate.cloneNode(true)
    // this.handleClosePopup = handleClosePopup
  }
// приватный метод - клонируем и наполняем
  _getTemplate() {
    // const cardElement = itemCardTemplate.cloneNode(true) // клонируем карточку из <template>
    return this._cloneCard
  }
// приватный метод - вешаем слушатели
  _makeEventListeners() {
    const cardDeleteBtn = this._cardElement.querySelector('.card__delete-button') // корзина
    const cardLikeButton = this._cardElement.querySelector('.card__like') // ❤
    const cardPreview = this._cardElement.querySelector('.card__image') // корзина

    cardDeleteBtn.addEventListener('click', () => {
      this._remove()
    })
    cardLikeButton.addEventListener('click', () => {
      this._like()
    })
    cardPreview.addEventListener('click', () => {
      this._preview()
    })
  }
// приватный метод - лайкаем
  _like() {
    const cardLikeButton = this._cardElement.querySelector('.card__like')
    cardLikeButton.classList.toggle('card__like_active')
  }
// приватный метод - удаляем
  _remove() {
    this._cardElement.remove()
  }
  // _enableEscListener(){
  //   document.addEventListener('keyup', this.handleClosePopup)
  // }
  // приватный метод - наполняем превью
  _preview() {
    openPopup(popupImageWindow)
    // this._enableEscListener()
    const popupImageFigure = popupImageWindow.querySelector('.popup__image') // picture
    const popupImageCaption = popupImageWindow.querySelector('.popup__image-caption') // caption
    popupImageFigure.src = this._cardLink
    popupImageFigure.alt = this._cardName
    popupImageCaption.textContent = this._cardName
  }
// публичный метод - возвращаем наружу
  getElement() {
    const title = this._cloneCard.querySelector('.card__title')
    const image = this._cloneCard.querySelector('.card__image')
    title.textContent = this._cardName // заголовок clone card = initialCards > item.name
    image.src = this._cardLink // / src clone card = initialCards > item.link
    image.alt = this._cardName // alt clone card = initialCards > item.name
    this._cardElement = this._getTemplate()
    this._makeEventListeners()
    return this._cardElement
  }
}
