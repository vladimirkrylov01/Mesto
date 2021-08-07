export class FormValidator {
  constructor(_vConfig, _form) {
    this.vConfig = _vConfig
    this.form = _form
    this.inputs = Array.from(this.form.querySelectorAll(this.vConfig.inputSelector)) // находим все инпуты в каждой форме
    this.button = this.form.querySelector(this.vConfig.submitButtonSelector) // находим кнопку
  }

  _setInputListeners() {
    this.inputs.forEach(input => { // для каждого инпута
      input.addEventListener('input', () => { // при событии 'input' - вызываем ф-ию validateInput
        this._validateInput(input) // валидируем инпуты (прокидываем форму, инпут и настройки)
        this._toggleButtonState() // управляем состоянием кнопки (прокидываем кнопку и настройки)
      })
    })
  }

  enableValidation() {
    this.clearInputError()
    this.form.addEventListener('submit', this._preventDefault) // при submit у формы > f preventFormSubmit1
    this._setInputListeners(this.form) // добавляем слушателей каждой форме (прокидываем форму и настройки)
  }

  _preventDefault(e) {
    e.preventDefault()
  }

  clearInputError() {
    this.inputs.forEach(input => { // в массиве инпутов берем каждый инпут
      input.classList.remove(this.vConfig.inputErrorClass) // у каждого инпута убираем ___red
      const error = document.querySelector((`.${input.id}-error`)) // выбираем error
      this._hideErrorSpan(error) // убираем span error
    })
  }

  _showErrorSpan(errorElement, input) {
    errorElement.textContent = input.validationMessage
    errorElement.classList.add(this.vConfig.errorClass) // делаем ошибку видимой (opacity:1)
  }

  _hideErrorSpan(errorElement) {
    errorElement.textContent = '' // удаляем содержимое ошибки
    errorElement.classList.remove(this.vConfig.errorClass) // делаем ошибку невидимой (opacity:0)
  }

  setButtonEnabled() {
    this.button.removeAttribute('disabled') // сделать кнопку активной
    this.button.classList.remove(this.vConfig.inactiveButtonClass)
    this.button.style.cursor = "pointer"
  }

  setButtonDisabled() {
    this.button.setAttribute('disabled', true) // сделать кнопку неактивной
    this.button.classList.add(this.vConfig.inactiveButtonClass)
    this.button.style.cursor = "unset"
  }

  _hasInvalidInputs() {
    return this.inputs.some(input => { // каждому инуту
      return !input.validity.valid // если инпут не прошел валидацию
    })
  }

  _toggleButtonState() {
    // условие ? выполнение условия if  : выполнение условия else;
    this._hasInvalidInputs() ? this.setButtonDisabled() : this.setButtonEnabled()
  }

  _validateInput(input) {
    const errorElement = this.form.querySelector(`.${input.id}-error`) // по классу от id инпута
    if (input.validity.valid) { // если ВАЛИДНО
      input.classList.remove(this.vConfig.inputErrorClass) // убираем border-bottom-color: red
      this._hideErrorSpan(errorElement) // скрываем spanError
      return true
    } else {  // иначе НЕ ВАЛИДНО
      input.classList.add(this.vConfig.inputErrorClass) // добавляем border-bottom-color: red
      this._showErrorSpan(errorElement, input) // показываем spanError
      return false
    }
  }
}