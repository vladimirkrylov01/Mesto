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
function ESCHadler(popup) {
  document.addEventListener('keydown', evt => {  // закрываем по ESC
    if (evt.key === 'Escape') {
      closePopup(popup)
    }
  })
}

// ==================  Открываем текущий popup  ==================
function openPopup(popup) {
  popup.classList.add('popup_opened')
  mainContainer.classList.add('no-scroll')
  ESCHadler(popup) // закрываем по ESC любой popup, который откроем
}

// ==================  Закрываем текущий popup  ==================
function closePopup(popup) {
  popup.classList.remove('popup_opened')
  mainContainer.classList.remove('no-scroll')
  popup.removeEventListener('click', openPopup) // убираем слушатель с popup
  document.removeEventListener('keydown', ESCHadler) // убираем слушатель с document
}


// ==================  Валидация  ==================


// ==================  Валидация input  ==================
// const errorElement = formElement.querySelector(`.${formInput.id}-error`) //
// const formInput = document.querySelector('.form__input'); // class="form__input"
// const formError = document.querySelector(`.${formInput.id}-error`)

// обработчик для edit form
// popupEditForm.addEventListener('input', () => {
// const isValid = (popupEditInputName.value.length > 2 && popupEditInputName.value.length < 40)
//   setSubmitButtonState(isValid)
// })

// //обработчик для add form
// formElement.addEventListener('input', () => {
//   const isValid = (formInput.value.length > 2 && formInput.value.length < 40)
//   setSubmitButtonState(isValid)
// })









