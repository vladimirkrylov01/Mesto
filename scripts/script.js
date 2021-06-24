import {Card} from "./modules/card.js";
import {FormValidator} from "./modules/formValidator.js";

// function createCard(cardName, cardLink) {
//   const newCloneCard = itemCardTemplate.cloneNode(true) // клонируем карточку из <template>
//   const title = newCloneCard.querySelector('.card__title')
//   const image = newCloneCard.querySelector('.card__image')
//
//   title.textContent = cardName // заголовок clone card = initialCards > item.name
//   image.src = cardLink // / src clone card = initialCards > item.link
//   image.alt = cardName // alt clone card = initialCards > item.name
//
//   // клик на X - удаляем clone card
//   const cardDeleteBtn = newCloneCard.querySelector('.card__delete-button')
//   cardDeleteBtn.addEventListener('click', () => {
//     newCloneCard.remove()
//   })
//
//   // toggle like button ❤
//   const cardLikeButton = newCloneCard.querySelector('.card__like')
//   cardLikeButton.addEventListener('click', () => {
//     cardLikeButton.classList.toggle('card__like_active')
//   })
//
//
//   // при клике на фото - показываем preview
//   const cardPreview = newCloneCard.querySelector('.card__image')
//   cardPreview.addEventListener('click', () => {
//     openPopup(popupImageWindow)
//     const popupImageFigure = popupImageWindow.querySelector('.popup__image') // picture
//     popupImageFigure.src = cardLink
//     popupImageFigure.alt = cardName
//     popupImageCaption.textContent = cardName
//   })
//   return newCloneCard //возвращает наполненную карточку
// }
//
// //проходим по массиву и значения каждого объекта добавляем в новую клон.катрочку, а её в начало(append) cardsGrid
// initialCards.forEach(itemData => {
//   cardsGrid.append(createCard(itemData.name, itemData.link))
// })

// class Card {
//   constructor(data) {
//     this._cardName = data.name
//     this._cardLink = data.link
//     this._cardElement = this._getTemplate()
//     this._makeEventListeners()
//   }
//
// // приватный метод - клонируем и наполняем
//   _getTemplate() {
//     const cardElement = itemCardTemplate.cloneNode(true) // клонируем карточку из <template>
//     const title = cardElement.querySelector('.card__title')
//     const image = cardElement.querySelector('.card__image')
//     title.textContent = this._cardName // заголовок clone card = initialCards > item.name
//     image.src = this._cardLink // / src clone card = initialCards > item.link
//     image.alt = this._cardName // alt clone card = initialCards > item.name
//     return cardElement
//   }
//
// // приватный метод - вешаем слушатели
//   _makeEventListeners() {
//     const cardDeleteBtn = this._cardElement.querySelector('.card__delete-button') // корзина
//     const cardLikeButton = this._cardElement.querySelector('.card__like') // ❤
//     const cardPreview = this._cardElement.querySelector('.card__image') // корзина
//
//     cardDeleteBtn.addEventListener('click', () => {
//       this._remove()
//     })
//     cardLikeButton.addEventListener('click', () => {
//       this._like()
//     })
//     cardPreview.addEventListener('click', () => {
//       this._preview()
//     })
//   }
//
// // приватный метод - лайкаем
//   _like() {
//     const cardLikeButton = this._cardElement.querySelector('.card__like')
//     cardLikeButton.classList.toggle('card__like_active')
//   }
//
// // приватный метод - удаляем
//   _remove() {
//     this._cardElement.remove()
//   }
//
// // приватный метод - наполняем превью
//   _preview() {
//     openPopup(popupImageWindow)
//     const popupImageFigure = popupImageWindow.querySelector('.popup__image') // picture
//     const popupImageCaption = popupImageWindow.querySelector('.popup__image-caption') // caption
//     popupImageFigure.src = this._cardLink
//     popupImageFigure.alt = this._cardName
//     popupImageCaption.textContent = this._cardName
//   }
//
// // публичный метод - возвращаем наружу
//   getElement() {
//     return this._cardElement
//   }
// }
//
// initialCards.forEach(item => {
//   const card = new Card(item) // Создадим экземпляр карточки
//   const cardElement = card.getElement() // Создаём карточку и возвращаем наружу
//   cardsGrid.append(cardElement) // Добавляем в DOM
// })
//
//
// // const popupElement = document.querySelector('.popup');
// // const popupImage = document.querySelector('.popup__image');
// // const popupCloseButton = document.querySelector('.popup__close');
// //
// // _handleOpenPopup (){
// //   popupImage.src = this._image
// //   popupElement.classList.add('popup_is-opened')
// // }
// // _handleClosePopup (){
// //   popupImage.src = ''
// //   popupElement.classList.remove('popup_is-opened')
// // }
//
//

// import {FormValidator} from "./formValidator";
// const formValidation = new FormValidator()
// formValidation.enableValidation()
// import {Card} from "./modules/card";
// Добавляем карточки из массива
initialCards.forEach(item => {
  const card = new Card(item) // Создаём экземпляр карточки
  const cardElement = card.getElement() // Создаём карточку и возвращаем наружу
  cardsGrid.append(cardElement) // Добавляем в DOM
})

const enableEscListener = () => {
  document.addEventListener('keyup', handleClosePopup)
}

const disableEscListener = () => {
  document.removeEventListener('keyup',handleClosePopup)
}

// const popupElement = document.querySelector('.popup');
// const popupImage = document.querySelector('.popup__image');
// const popupCloseButton = document.querySelector('.popup__close');
//
// _handleOpenPopup (){
//   popupImage.src = this._image
//   popupElement.classList.add('popup_is-opened')
// }
// _handleClosePopup (){
//   popupImage.src = ''
//   popupElement.classList.remove('popup_is-opened')
// }


// при ESC закрываем активный popup
const handleClosePopup = e => {
  if(e.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}



// ==================  Открываем текущий popup  ==================
function openPopup(popup) {
  popup.classList.add(vConfig.openClass) // показываем
  mainContainer.classList.add('no-scroll') // убираем правый оступ
  enableEscListener()
}

// ==================  Закрываем текущий popup  ==================
function closePopup(popup) {
  popup.classList.remove(vConfig.openClass)
  mainContainer.classList.remove('no-scroll')
  // clearInputError(popup)
  disableEscListener() // снимаем слушатель ESC
}

// ==================  Обнуляем add popup form  ==================
// function resetAddForm(popup) {
//   if (popup.classList.contains('popup-type-add-card')) {
//     popup.reset() // обнуляем форму
//   }
// }



popupEditOpenBtn.addEventListener('click', () => {
  openPopup(popupEditWindow) // открываем попап
  popupEditInputName.value = profileTitle.textContent // передаём значения из profile в инпуты попапа
  popupEditInputProf.value = profileProf.textContent
  // clearInputError(popupEditWindow) // очищаем ошибки в инпутах
  const formValidate = new FormValidator()
  formValidate.enableValidation()
  formValidate.clearInputError(popupEditWindow)
});

popupAddCardOpenBtn.addEventListener('click', () => {
  openPopup(popupAddCardWindow) // открываем попап
  const formValidate = new FormValidator()
  formValidate.enableValidation(popupAddCardWindow)
  button.classList.add(vConfig.inactiveButtonClass) // окрашиваем в disabled
  button.setAttribute('disabled',true) // делаем неактивной
  formValidate.clearInputError(popupAddCardWindow) // очищаем ошибки
  // clearInputError(popupAddCardWindow) // очищаем ошибки в инпутах
  // resetAddForm(popupAddCardWindow) // очищаем инпуты
  popupAddForm.reset() // очищаем инпуты у формы
})

// ==================  Закрытие на X  ==================
popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow))
popupAddCardCloseBtn.addEventListener('click', () => {
  closePopup(popupAddCardWindow)
})
popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow))

// ==================  Submit  ==================
popupAddForm.addEventListener('submit', () => { // при submit
                                                // старый код
                                                // const titleInputValue = popupAddCardInputPlace.value
                                                // const linkInputValue = popupAddCardInputLink.value
                                                // cardsGrid.prepend(titleInputValue,linkInputValue)
  const newCard ={
    name: popupAddCardInputPlace.value,
    link: popupAddCardInputLink.value
  }
  const card = new Card (newCard)
  const cardElement = card.getElement()
  cardsGrid.prepend(cardElement)
  closePopup(popupAddCardWindow)
})

popupEditForm.addEventListener('submit', e => {
  e.preventDefault()
  profileTitle.textContent = popupEditInputName.value // передаём из инпутов попап в значения profile
  profileProf.textContent = popupEditInputProf.value
  closePopup(popupEditWindow) //закрываем попап
  popupEditForm.reset() // хотя по сути можно не обнулять...хммм
  // setEventListeners(popupEditForm)
})


// ==================  Закрытие по Overlay  ==================
function clickOnOverlay(e) {
  if(e.target === e.currentTarget){
    closePopup(e.target)
  }
}
popupEdit.addEventListener('click', e => clickOnOverlay(e))
popupAdd.addEventListener('click', e => clickOnOverlay(e))
popupImage.addEventListener('click', e => clickOnOverlay(e))
// не получилось сделать закрытие на оверлей универсальным для всех попап
// const popup = document.querySelectorAll('.popup')
// popup.addEventListener('click', e => clickOnOverlay(e))
// http://joxi.ru/D2PO6bpuJK87Km