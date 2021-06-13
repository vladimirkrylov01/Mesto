
// ==================  Edit popup  ==================
const popupEditForm = document.forms['editPopupForm'], // form name="editPopupForm"
      popupEditInputName = popupEditForm.elements.name, // input name="name"
      popupEditInputProf = popupEditForm.elements.profession // input "prof"

const popupEdit = document.querySelector('.popup-type-edit')
const popupEditWindow = document.querySelector('.popup-type-edit'), // edit popup window
      popupEditOpenBtn = document.querySelector('.profile__button-edit'), // open [ edit ]
      popupEditCloseBtn = popupEditWindow.querySelector('.popup__button-close') // btn X
// ==================  Add popup  ==================

const popupAddForm = document.forms['addPopupForm'], // form name ="addPopupForm"
      popupAddCardInputPlace = popupAddForm.elements.place, // name="place"
      popupAddCardInputLink = popupAddForm.elements.link // name="link"

const popupAdd = document.querySelector('.popup-type-add-card')
const popupAddCardWindow = document.querySelector('.popup-type-add-card'), // add popup window
      popupAddCardOpenBtn = document.querySelector('.profile__button-add'), // open [ + ]
      popupAddCardCloseBtn = popupAddCardWindow.querySelector('.popup__button-close') // btn X

// ==================  Preview popup  ==================

const popupImage = document.querySelector('.popup-type-image')
const popupImageWindow = document.querySelector('.popup-type-image'), // preview popup window
      popupImageCloseBtn = popupImageWindow.querySelector('.popup__button-close'), // btn X
      popupImageCaption = popupImageWindow.querySelector('.popup__image-caption') // caption

// ==================  Profile  ==================
const profileTitle = document.querySelector('.profile__title')
const profileProf = document.querySelector('.profile__profession')

// ==================  Card  ==================
const cardsGrid = document.querySelector('.cards-grid') // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card') //template

// ==================  No-Scroll  ==================
const mainContainer = document.querySelector('.main-container')

// ==================  Form  ==================
const form = document.querySelector('.form')

// ==================  Validate  ==================
const popup = document.querySelector('.popup')


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
// ищем кнопку в addForm popup
const button = popupAddCardWindow.querySelector(vConfig.submitButtonSelector)
// ищем все инпуты в массиве инпутов в addForm popup и кладём в inputs
const inputs = Array.from(popupAddCardWindow.querySelector(vConfig.inputSelector))