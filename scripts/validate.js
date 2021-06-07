//validity: ValidityState
//  valueMissing принимает true, когда обязательное поле пустое;
//  typeMismatch — принимает true, когда ввели неправильные значения данных для атрибута type. Это круто работает в связке с type="email" и type="url"
//  tooLong — принимает false, когда количество символов не превышает значение атрибута maxlength. А true не существует в современных браузерах. Невозможно ввести больше символов, чем указано в maxlength
//  tooShort — принимает true, когда количество символов не превышает значение атрибута minlength
//  validity:valid = итоговое решение проверки данных


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});






// showInputError — показывает элемент ошибки;
// hideInputError — скрывает элемент ошибки;
// isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError.








