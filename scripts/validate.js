
// ==================================================================================================================

// Настройки
const vConfig = {
  formSelector: 'form', // class="form"
  inputSelector: '.form__input', //  class="form__input"
  submitButtonSelector: '.form__submit', // class="form__submit"
  inactiveButtonClass: 'popup__button-submit_disabled', // disabled button
  inputErrorClass: 'form__input_type_error', // border-bottom-color: red
  errorClass: 'form__input-error_active', // opacity 1 - показываем сообщение ошибки)
  openClass: 'popup_opened'
}

// ==================  Input  ==================
// валидация инпутов : show/hide __red,
function validateInput1(formElement, input, settings) { // принимаем форму, инпут и настройки
  const errorElement = formElement.querySelector(`.${input.id}-error`) // по классу от id инпута
  console.log('formElement - ',formElement)
  if (input.validity.valid) {
    // если ВАЛИДНО
    input.classList.remove(settings.inputErrorClass) // убираем border-bottom-color: red
    hideErrorSpan(errorElement,settings)
    return true
  } else {
    // иначе НЕ ВАЛИДНО
    input.classList.add(settings.inputErrorClass) // инпуту добавляем border-bottom-color: red
    showErrorSpan(errorElement,input,settings)
    return false
  }
}
// ==================  Input  ==================


// ==================  Button  ==================
function toggleButtonState1(button,inputs,settings) {
  if (hasInvalidInputs(inputs)) { // если все инпуты не валидны, то
    showInputError1(button,settings) // сделай кнопку неактивной
  } else {  // если все инпуты валидны
    hideInputError1(button,settings) // сделай кнопку активной
  }
}

// const hasInvalidInputs = inputList => inputList.some(inputElement => !inputElement.validity.valid)
// проверяет на валидность все инпуты
function hasInvalidInputs(inputs) {
  return inputs.some(input => { // каждому инуту
    return !input.validity.valid // если инпут не прошел валидацию
  })
}

function showInputError1(button,settings){ // принимаем кнопку и настройки
  button.disabled = true // сделать кнопку неактивной
  button.classList.add(settings.inactiveButtonClass)
}

function hideInputError1(button,settings){ // принимаем кнопку и настройки
  button.disabled = false // сделать кнопку активной
  button.classList.remove(settings.inactiveButtonClass)
}
// ==================  Button  ==================


// ==================  addEventListener  ==================
// в форме находим инпуты и вешаем слушателей 'input' и вызываем валидацию инпутов
function setInputListeners1(formElement, settings) { // принимаем форму и настройки
  const inputs = Array.from(formElement.querySelectorAll(settings.inputSelector)) // находим все инпуты в каждой форме
  const button = formElement.querySelector(settings.submitButtonSelector) // находим кнопку
  toggleButtonState1(button,inputs,settings) // серая кнопка при открытии попап

  inputs.forEach(input => { // для каждого инпута
    input.addEventListener('input', () => { // при событии 'input' - вызываем ф-ию validateInput
      validateInput1(formElement, input, settings) // валидируем инпуты (прокидываем форму, инпут и настройки)
      toggleButtonState1(button,inputs,settings) // управляем состоянием кнопки (прокидываем кнопку и настройки)
    })
  })
}
// ==================  addEventListener  ==================


// ==================  enableValidation  ==================
// для всех форм отменяем e.preventDefault()
function enableValidation1(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector)) // находим все формы

  forms.forEach(form => {
    form.addEventListener('submit', preventFormSubmit1) // при submit у формы > f preventFormSubmit1
    setInputListeners1(form, settings) // добавляем слушателей каждой форме (прокидываем форму и настройки)
  })
}

enableValidation1(vConfig)
// ==================  enableValidation  ==================


// ==================  preventDefault  ==================
// отмена отправки формы
function preventFormSubmit1(e) {
  e.preventDefault()
}
// ==================  preventDefault  ==================






// ============================================================================================================
// РАБОЧИЙ СКРИПТ БЕЗ НАСТРОЕК




// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.form')) // Найдём все формы и объединим в массив
//   formList.forEach(formElement => { // Переберём все формы
//     formElement.addEventListener('submit', evt => {
//       evt.preventDefault()  // У каждой формы отменим стандартное поведение
//     })
//     const fieldsetList = Array.from(formElement.querySelectorAll('.form__set')) // Найдём все филдсеты и объединим в массив
//     fieldsetList.forEach((fieldSet) => {
//       setEventListeners(fieldSet); // Для каждого fieldset вызовем функцию setEventListeners
//     });
//   })
// }
//
//
// // Если не прошло валидацию
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
//   inputElement.classList.add('form__input_type_error')
//   errorElement.textContent = errorMessage
//   errorElement.classList.add('form__input-error_active')
// }
//
// // ф-ия скрывает ___ red + скрывает текст ошибки
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
//   inputElement.classList.remove('form__input_type_error')
//   errorElement.classList.remove('form__input-error_active')
//   errorElement.textContent = ''
// }
//
// // проверяет валидность поля, внутри вызывает showInputError или hideInputError
// // const checkInputValidity = () => {
// //   if(!formInput.validity.valid) { // Если поле не проходит валидацию
// //     showInputError(formInput,formInput.validationMessage) // то показываем ___ red
// //   } else { // иначе
// //     hideInputError(formInput) // скрываем ___ red
// //   }
// // }
//
// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage)
//   } else {
//     hideInputError(formElement, inputElement)
//   }
// }
//
//
// // ==================  Валидация button  ==================
//
// // проверяем все поля для кнопки
// const hasInvalidInput = inputList => inputList.some(inputElement => !inputElement.validity.valid)
// // Функция принимает массив полей
// // const hasInvalidInput = (inputList) => {
// //   // проходим по этому массиву методом some
// //   return inputList.some((inputElement) => {
// //     // Если поле не валидно, колбэк вернёт true
// //     // Обход массива прекратится и вся фунцкция
// //     // hasInvalidInput вернёт true
// //
// //     return !inputElement.validity.valid;
// //   })
// // };
//
// // меняем состояние кнопки
// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) { // Если есть хотя бы один невалидный инпут
//     buttonElement.setAttribute('disabled', true)  // сделай кнопку неактивной
//     buttonElement.classList.add('popup__button-submit_disabled')
//   } else {  // иначе сделай кнопку активной
//     buttonElement.removeAttribute('disabled')
//     buttonElement.classList.remove('popup__button-submit_disabled')
//   }
// }
//
// // ==================  Добавление обработчиков всем полям формы  ==================
// const setEventListeners = (formElement) => {
//   // Находим все поля внутри формы,
//   // сделаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//   const buttonElement = formElement.querySelector('.form__submit')
//   toggleButtonState(inputList, buttonElement)   // чтобы проверить состояние кнопки в самом начале
//
//   // Обойдём все элементы полученной коллекции
//   inputList.forEach(inputElement => {
//     // каждому полю добавим обработчик события input
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement)
//       toggleButtonState(inputList, buttonElement) // чтобы проверять его при изменении любого из полей
//     });
//   });
// };
// setEventListeners(form)
//
// // ==================  Проверка валидации всех полей  ==================
// enableValidation()




