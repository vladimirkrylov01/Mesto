//validity: ValidityState
//  valueMissing принимает true, когда обязательное поле пустое;
//  typeMismatch — принимает true, когда ввели неправильные значения данных для атрибута type. Это круто работает в связке с type="email" и type="url"
//  tooLong — принимает false, когда количество символов не превышает значение атрибута maxlength. А true не существует в современных браузерах. Невозможно ввести больше символов, чем указано в maxlength
//  tooShort — принимает true, когда количество символов не превышает значение атрибута minlength
//  validity:valid = итоговое решение проверки данных


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

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




// showInputError — показывает элемент ошибки;
// hideInputError — скрывает элемент ошибки;
// isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError.








