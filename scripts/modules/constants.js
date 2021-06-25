// ==================  Edit popup  ==================
export const popupEditForm = document.forms['editPopupForm'], // form name="editPopupForm"
  popupEditInputName = popupEditForm.elements.name, // input name="name"
  popupEditInputProf = popupEditForm.elements.profession // input "prof"

export const popupEdit = document.querySelector('.popup-type-edit'),
  popupEditWindow = document.querySelector('.popup-type-edit'), // edit popup window
  popupEditOpenBtn = document.querySelector('.profile__button-edit'), // open [ edit ]
  popupEditCloseBtn = popupEditWindow.querySelector('.popup__button-close') // btn X
// ==================  Add popup  ==================
export const popupAddForm = document.forms['addPopupForm'], // form name ="addPopupForm"
  popupAddCardInputPlace = popupAddForm.elements.place, // name="place"
  popupAddCardInputLink = popupAddForm.elements.link // name="link"

export const popupAdd = document.querySelector('.popup-type-add-card')
export const popupAddCardWindow = document.querySelector('.popup-type-add-card'), // add popup window
  popupAddCardOpenBtn = document.querySelector('.profile__button-add'), // open [ + ]
  popupAddCardCloseBtn = popupAddCardWindow.querySelector('.popup__button-close') // btn X
// ==================  Preview popup  ==================
export const popupImage = document.querySelector('.popup-type-image'),
  popupImageWindow = document.querySelector('.popup-type-image'), // preview popup window
  popupImageCloseBtn = popupImageWindow.querySelector('.popup__button-close') // btn X
// ==================  Profile  ==================
export const profileTitle = document.querySelector('.profile__title')
export const profileProf = document.querySelector('.profile__profession')
// ==================  Card  ==================
export const cardsGrid = document.querySelector('.cards-grid') // DOM
export const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card') //template
// ==================  No-Scroll  ==================
export const mainContainer = document.querySelector('.main-container')
// ==================  Validate  ==================
export const popupWindows = document.querySelectorAll('.popup')
// Настройки
export const vConfig = {
  formSelector: 'form', // class="form"
  inputSelector: '.form__input', //  class="form__input"
  submitButtonSelector: '.form__submit', // class="form__submit"
  inactiveButtonClass: 'popup__button-submit_disabled', // disabled button
  inputErrorClass: 'form__input_type_error', // border-bottom-color: red
  errorClass: 'form__input-error_active', // opacity 1 - показываем сообщение ошибки)
  openClass: 'popup_opened',
}
// Add form button
export const button = popupAddCardWindow.querySelector(vConfig.submitButtonSelector)
// ищем все инпуты в массиве инпутов в addForm popup и кладём в inputs

