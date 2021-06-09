// ==================  создаём карточку из массива initialCards ==================
function createCard(titleValue, linkValue) {
  const itemCloneCard = itemCardTemplate.cloneNode(true); // клонируем карточку из <template>
  itemCloneCard.querySelector('.card__title').textContent = titleValue; // заголовок clone card = initialCards > item.name
  itemCloneCard.querySelector('.card__image').src = linkValue; // / src clone card = initialCards > item.link
  itemCloneCard.querySelector('.card__title').alt = titleValue; // alt clone card = initialCards > item.name

  // клик на X - удаляем clone card
  const cardDeleteBtn = itemCloneCard.querySelector('.card__delete-button');
  cardDeleteBtn.addEventListener('click', () => {
    itemCloneCard.remove();
  })

  // toggle like button ❤
  const cardLikeButton = itemCloneCard.querySelector('.card__like')
  cardLikeButton.addEventListener('click',(evt) => {
    if (evt.target.classList.contains('card__like')) {
      evt.target.classList.toggle('card__like_active')
    }
  })

  // при клике на фото - показываем popupImageWindow и наполняем
  const cardPreview = itemCloneCard.querySelector('.card__image');
  cardPreview.addEventListener('click', () => {
    openPopup(popupImageWindow);
    popupImageFigure.src = linkValue;
    popupImageFigure.alt = titleValue;
    popupImageCaption.textContent = titleValue;
  })
  return (itemCloneCard);
}


// проходим по массиву и значения каждого объекта добавляем в новую клон.катрочку, а её в начало(append) cardsGrid
initialCards.forEach(item => {
  cardsGrid.append(createCard(item.name, item.link))
})


// ==================  Обработчик ESC  ==================
// function ESCHadler() {
//   document.addEventListener('keydown', evt => {  // закрываем по ESC
//     if (evt.key === 'Escape') {
//       closePopup(activePopup)
//     }
//   })
// }

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
  // const button = popupAddCardWindow.querySelector(vConfig.submitButtonSelector) // ищем кнопку
  // const inputs = Array.from(popupAddCardWindow.querySelector(vConfig.inputSelector)) // ищем все инпуты в массиве инпутов у addpopup и кладём в button

  // toggleButtonState1(button,inputs,vConfig)
}
// toggleButtonState1(button,inputs,vConfig) // вызываем ф-ию состояния кнопки


