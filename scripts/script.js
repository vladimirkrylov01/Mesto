// ==================  создаём карточку из массива initialCards ==================
function createCard(cardName, cardLink) {

  const newCloneCard = itemCardTemplate.cloneNode(true) // клонируем карточку из <template>
  newCloneCard.querySelector('.card__title').textContent = cardName // заголовок clone card = initialCards > item.name
  newCloneCard.querySelector('.card__image').src = cardLink // / src clone card = initialCards > item.link
  newCloneCard.querySelector('.card__title').alt = cardName // alt clone card = initialCards > item.name

  // клик на X - удаляем clone card
  const cardDeleteBtn = newCloneCard.querySelector('.card__delete-button')
  cardDeleteBtn.addEventListener('click', () => {
    newCloneCard.remove()
  })

  // toggle like button ❤
  const cardLikeButton = newCloneCard.querySelector('.card__like')
  cardLikeButton.addEventListener('click',() => toggleLike(cardLikeButton))

  // при клике на фото - показываем preview
  const cardPreview = newCloneCard.querySelector('.card__image')
  cardPreview.addEventListener('click', () => {
    openPopup(popupImageWindow)
    const popupImageFigure = popupImageWindow.querySelector('.popup__image') // picture
    popupImageFigure.src = cardLink
    popupImageFigure.alt = cardName
    popupImageCaption.textContent = cardName
  })
  return newCloneCard //возвращает наполненную карточку
}

// toggle like button ❤
function toggleLike(e){
  e.classList.toggle('card__like_active')
}
// проходим по массиву и значения каждого объекта добавляем в новую клон.катрочку, а её в начало(append) cardsGrid
initialCards.forEach(itemData => {
  cardsGrid.append(createCard(itemData.name, itemData.link))
})

// при ESC закрываем активный popup
const handleClosePopup = e => {
  if(e.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}

// вешаем на документ слушатель на клавишу ESC
const enableEscListener = () => {
  document.addEventListener('keyup', handleClosePopup)
}

const disableEscListener = () => {
  document.removeEventListener('keyup',handleClosePopup)
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
  disableEscListener()
}

// ==================  Закрытие по Overlay  ==================
function clickOnOverlay(e) {
    if(e.target === e.currentTarget){
      closePopup(e.target)
    }
}

// ==================  Обнуляем add popup form  ==================
function resetAddForm(popup) {
  if(popup.classList.contains('popup-type-add-card')){
    popupAddForm.reset() // обнуляем форму

    toggleButtonState1(button,inputs,vConfig)
    setButtonDisabled(button,vConfig)
  }
}

