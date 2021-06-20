//
// // ==================  Input  ==================
// // валидация инпутов : show/hide __red + errorSpan,
// function validateInput1(formElement, input, settings) { // принимаем форму, инпут и настройки
//   const errorElement = formElement.querySelector(`.${input.id}-error`) // по классу от id инпута
//   if (input.validity.valid) {
//     // если ВАЛИДНО
//     input.classList.remove(settings.inputErrorClass) // убираем border-bottom-color: red
//     hideErrorSpan(errorElement,settings) // скрываем spanError
//     return true
//   } else {
//     // иначе НЕ ВАЛИДНО
//     input.classList.add(settings.inputErrorClass) // добавляем border-bottom-color: red
//     showErrorSpan(errorElement,input,settings) // показываем spanError
//     return false
//   }
// }
// // ==================  Button  ==================
// function toggleButtonState1(button,inputs,settings) {
//   if (hasInvalidInputs(inputs)) { // если все инпуты не валидны, то
//     setButtonDisabled(button,settings) // сделай кнопку неактивной
//   } else {  // если все инпуты валидны
//     setButtonEnabled(button,settings) // сделай кнопку активной
//   }
// }
//
// // const hasInvalidInputs = inputList => inputList.some(inputElement => !inputElement.validity.valid)
// // проверяет на валидность все инпуты
// function hasInvalidInputs(inputs) {
//   return inputs.some(input => { // каждому инуту
//     return !input.validity.valid // если инпут не прошел валидацию
//   })
// }
//
// function setButtonDisabled(button,settings){ // принимаем кнопку и настройки
//   button.disabled = true // сделать кнопку неактивной
//   button.classList.add(settings.inactiveButtonClass)
// }
//
// function setButtonEnabled(button,settings){ // принимаем кнопку и настройки
//   button.disabled = false // сделать кнопку активной
//   button.classList.remove(settings.inactiveButtonClass)
// }
//
// // ==================  addEventListener  ==================
// // в форме находим инпуты и вешаем слушателей 'input' и вызываем валидацию инпутов
// function setInputListeners1(formElement, settings) { // принимаем форму и настройки
//   const inputs = Array.from(formElement.querySelectorAll(settings.inputSelector)) // находим все инпуты в каждой форме
//   const button = formElement.querySelector(settings.submitButtonSelector) // находим кнопку
//   // toggleButtonState1(button,inputs,settings) // серая кнопка при открытии попап
//
//   inputs.forEach(input => { // для каждого инпута
//     input.addEventListener('input', () => { // при событии 'input' - вызываем ф-ию validateInput
//       validateInput1(formElement, input, settings) // валидируем инпуты (прокидываем форму, инпут и настройки)
//       toggleButtonState1(button,inputs,settings) // управляем состоянием кнопки (прокидываем кнопку и настройки)
//     })
//   })
// }
//
// // ==================  enableValidation  ==================
// function enableValidation1(settings) {
//   const forms = Array.from(document.querySelectorAll(settings.formSelector)) // находим все формы
//
//   forms.forEach(form => {
//     form.addEventListener('submit', preventFormSubmit1) // при submit у формы > f preventFormSubmit1
//     setInputListeners1(form, settings) // добавляем слушателей каждой форме (прокидываем форму и настройки)
//   })
// }
//
// enableValidation1(vConfig)
//
// // ==================  preventDefault  ==================
// function preventFormSubmit1(e) {
//   e.preventDefault()
// }
//
// function hideErrorSpan(errorElement,settings){
//   errorElement.textContent = '' // удаляем содержимое ошибки
//   errorElement.classList.remove(settings.errorClass) // делаем ошибку невидимой (opacity:0)
// }
//
// function showErrorSpan(errorElement,input,settings){
//   errorElement.textContent = input.validationMessage
//   errorElement.classList.add(settings.errorClass) // делаем ошибку видимой (opacity:1)
// }
// // ==================  Очищаем ошибки  ==================
// function clearInputError(popup) {
//   // show/hide span error
//   const inputs = Array.from(popup.querySelectorAll(vConfig.inputSelector)) // массив инпутов
//
//   // в массиве инпутов берем каждый инпут
//   inputs.forEach(input => {
//     input.classList.remove(vConfig.inputErrorClass) // у каждого инпута убираем ___red
//     const error = document.querySelector((`.${input.id}-error`)) // выбираем error
//     hideErrorSpan(error,vConfig) // убираем span error
//   })
// }
//
//
