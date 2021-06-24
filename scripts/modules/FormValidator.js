import {vConfig} from "./constants.js";
export class FormValidator{
  constructor() {
    this.vConfig = vConfig
  }
  _setInputListeners(formElement){
    const inputs = Array.from(formElement.querySelectorAll(this.vConfig.inputSelector)) // находим все инпуты в каждой форме
    const button = formElement.querySelector(this.vConfig.submitButtonSelector) // находим кнопку
    inputs.forEach(input => { // для каждого инпута
      input.addEventListener('input', () => { // при событии 'input' - вызываем ф-ию validateInput
        this._validateInput(formElement, input) // валидируем инпуты (прокидываем форму, инпут и настройки)
        this._toggleButtonState(button,inputs) // управляем состоянием кнопки (прокидываем кнопку и настройки)
      })
    })
  }

  enableValidation(){
    const forms = Array.from(document.querySelectorAll(this.vConfig.formSelector)) // находим все формы
    // console.log(this.vConfig.formSelector)
    forms.forEach(form => {
      form.addEventListener('submit', this._preventDefault) // при submit у формы > f preventFormSubmit1
      this._setInputListeners(form,) // добавляем слушателей каждой форме (прокидываем форму и настройки)
    })
  }

  _preventDefault(e){
    e.preventDefault()
  }

  clearInputError(popup){
    const inputs = Array.from(popup.querySelectorAll(this.vConfig.inputSelector)) // массив инпутов
    inputs.forEach(input => { // в массиве инпутов берем каждый инпут
      input.classList.remove(this.vConfig.inputErrorClass) // у каждого инпута убираем ___red
      const error = document.querySelector((`.${input.id}-error`)) // выбираем error
      this._hideErrorSpan(error) // убираем span error
    })
  }

  _showErrorSpan(errorElement,input){
    errorElement.textContent = input.validationMessage
    errorElement.classList.add(this.vConfig.errorClass) // делаем ошибку видимой (opacity:1)
  }

  _hideErrorSpan(errorElement){
    errorElement.textContent = '' // удаляем содержимое ошибки
    errorElement.classList.remove(this.vConfig.errorClass) // делаем ошибку невидимой (opacity:0)
  }

  _setButtonEnabled(button){
    button.disabled = false // сделать кнопку активной
    button.classList.remove(this.vConfig.inactiveButtonClass)
  }

  _setButtonDisabled(button){
    button.disabled = true // сделать кнопку неактивной
    button.classList.add(this.vConfig.inactiveButtonClass)
  }

  _hasInvalidInputs(inputs){
    return inputs.some(input => { // каждому инуту
      return !input.validity.valid // если инпут не прошел валидацию
    })
  }

  _toggleButtonState(button,inputs){
    if (this._hasInvalidInputs(inputs)) { // если все инпуты не валидны, то
      this._setButtonDisabled(button) // сделай кнопку неактивной
    } else {  // если все инпуты валидны
      this._setButtonEnabled(button) // сделай кнопку активной
    }
  }

  _validateInput(formElement, input){
    const errorElement = formElement.querySelector(`.${input.id}-error`) // по классу от id инпута
    if (input.validity.valid) { // если ВАЛИДНО
      input.classList.remove(this.vConfig.inputErrorClass) // убираем border-bottom-color: red
      this._hideErrorSpan(errorElement) // скрываем spanError
      return true
    } else {  // иначе НЕ ВАЛИДНО
      input.classList.add(this.vConfig.inputErrorClass) // добавляем border-bottom-color: red
      this._showErrorSpan(errorElement,input) // показываем spanError
      return false
    }
  }

}
