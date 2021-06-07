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
const formElement = document.querySelector('.form'); // class="form"
// const formInput = document.querySelector('.form__input'); // class="form__input"
// const formError = document.querySelector(`.${formInput.id}-error`)
const form = document.querySelector('.form')

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


// Если не прошло валидацию
const showInputError = (formElement,inputElement,errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('form__input_type_error')
  errorElement.textContent = errorMessage
  errorElement.classList.add('form__input-error_active')
}

// ф-ия скрывает ___ red + скрывает текст ошибки
const hideInputError = (formElement,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('form__input_type_error')
  errorElement.classList.remove('form__input-error_active')
  errorElement.textContent = ''
}

// проверяет валидность поля, внутри вызывает showInputError или hideInputError
// const checkInputValidity = () => {
//   if(!formInput.validity.valid) { // Если поле не проходит валидацию
//     showInputError(formInput,formInput.validationMessage) // то показываем ___ red
//   } else { // иначе
//     hideInputError(formInput) // скрываем ___ red
//   }
// }



const isValid = (formElement,inputElement) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement,inputElement,inputElement.validationMessage)
  } else {
    hideInputError(formElement,inputElement)
  }
}

// Отменим стандартное поведение по submit для формы
formElement.addEventListener('submit', evt => {
  evt.preventDefault()
})


// ==================  Валидация button  ==================

// проверяем все поля для кнопки
const hasInvalidInput = inputList => inputList.some(inputElement => !inputElement.validity.valid)
// Функция принимает массив полей
// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся фунцкция
//     // hasInvalidInput вернёт true
//
//     return !inputElement.validity.valid;
//   })
// };

// меняем состояние кнопки
const toggleButtonState = (inputList,buttonElement) => {
  if(hasInvalidInput(inputList)) { // Если есть хотя бы один невалидный инпут
    buttonElement.setAttribute('disabled',true)  // сделай кнопку неактивной
    buttonElement.classList.add('popup__button-submit_disabled')
  } else {  // иначе сделай кнопку активной
    buttonElement.removeAttribute('disabled')
    buttonElement.classList.remove('popup__button-submit_disabled')
  }
}

// ==================  Добавление обработчиков всем полям формы  ==================


const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit')
  toggleButtonState(inputList,buttonElement)   // чтобы проверить состояние кнопки в самом начале

  // Обойдём все элементы полученной коллекции
  inputList.forEach(inputElement => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement) // чтобы проверять его при изменении любого из полей
    });
  });
};
setEventListeners(form)
// ==================  Проверка валидации всех полей  ==================

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form')) // Найдём все формы с указанным классом в DOM
  formList.forEach(formElement => { // Переберём все формы
    formElement.addEventListener('submit', evt => {
      evt.preventDefault()  // У каждой формы отменим стандартное поведение
    })
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet); // Для каждого fieldset вызовем функцию setEventListeners
    });
  })
}
enableValidation()






