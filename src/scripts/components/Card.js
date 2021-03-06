export class Card {
  constructor(
    {name, link, likes, owner, _id},
    currentUserID,
    _cardSelector,
    _handleCardClick,
    handleDeleteCardClick,
    handleLikeClick) {
    this._name = name
    this._link = link
    this._cardDataId = _id
    this._ownerID = owner._id
    this._currentUserID = currentUserID
    this._likes = likes
    this._cardSelector = _cardSelector
    this._handleCardClick = _handleCardClick
    this._handleDeleteCardClick = handleDeleteCardClick
    this._handleLikeClick = handleLikeClick
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }

  _setEventListeners() {
    this.card.querySelector('.card__image')
      .addEventListener('click', () => this._handleCardClick(this._name, this._link))
    this.card.querySelector('.card__like')
      .addEventListener('click', () => this._like())
    this.card.querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCardClick(this))
  }

  getId() {
    return this._cardDataId
  }

  getIsLiked() {
    return this._likes.some(like => like._id === this._currentUserID)
  }

  _like() {
    this._handleLikeClick(this)
  }

  updateLikes(likes) {
    this._likes = likes
    this.card.querySelector('.card__likes-count')
      .textContent = likes.length

    if (this.getIsLiked()) {
      this.card.querySelector('.card__like')
        .classList.add('card__like_active')
    } else {
      this.card.querySelector('.card__like')
        .classList.remove('card__like_active')
    }
  }

  removeCard() {
    this.card.remove()
    this.card = null
  }

  renderCard() {
    this.card = this._getTemplate()
    this.updateLikes(this._likes)

    this.card.id = this._cardDataId
    this.card.querySelector('.card__title').textContent = this._name

    const cardPreviewImage = this.card.querySelector('.card__image')
    cardPreviewImage.src = this._link
    cardPreviewImage.alt = this._name
    this._title = this.card.querySelector('.card__title')
    this._image = this.card.querySelector('.card__image')
    this._title.textContent = this._name
    this._image.src = this._link
    this._image.alt = this._name

    if (this._ownerID === this._currentUserID) {
      this.card.querySelector('.card__delete-button')
        .classList.remove('hidden')

      // this.updateLikes(this._likes)
    }

    this._setEventListeners()
    return this.card
  }
}