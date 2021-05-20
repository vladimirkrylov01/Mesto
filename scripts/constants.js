// ==================  Edit popup  ==================

const popupEditWindow = document.querySelector('.popup-type-edit')
const popupEditOpenBtn = document.querySelector('.profile__button-edit')
const popupEditCloseBtn = popupEditWindow.querySelector('.popup__button-close')
const popupEditInputName = popupEditWindow.querySelector('.popup__input_type_name')
const popupEditInputProf = popupEditWindow.querySelector('.popup__input_type_prof')
const popupEditCardOverlay = popupEditWindow.querySelector('.popup__overlay_edit')

const popupEditForm = document.forms['editPopupForm'] // форма инпутов попап Edit
const popupEditProfileSubmitHandler = e => {
  e.preventDefault()
  profileTitle.textContent = popupEditInputName.value //value EditName => profileTitle
  profileProf.textContent = popupEditInputProf.value //value EditProf => profileProf
  closePopup(popupEditWindow) //закрываем модалку
  popupEditForm.reset() //обнуляем модалку
}

// ==================  Add popup  ==================

const popupAddCardWindow = document.querySelector('.popup-type-add-card')
const popupAddCardOpenBtn = document.querySelector('.profile__button-add')
const popupAddCardInputTitle = popupAddCardWindow.querySelector('.popup__input_type_place')
const popupAddCardInputLink = popupAddCardWindow.querySelector('.popup__input_type_link')
const popupAddCardCloseBtn = popupAddCardWindow.querySelector('.popup__button-close')
const popupAddCardOverlay = popupAddCardWindow.querySelector('.popup__overlay_add')

const popupAddForm = document.forms['addPopupForm'] // форма инпутов попап Add
const popupAddSubmitHandler = e => {
  e.preventDefault()
  const titleInputValue = popupAddCardInputTitle.value
  const linkInputValue = popupAddCardInputLink.value
  cardsGrid.prepend(createCard(titleInputValue, linkInputValue))
  closePopup(popupAddCardWindow)
  popupAddForm.reset()
}

// ==================  Preview popup  ==================

const popupImageWindow = document.querySelector('.popup-type-image')
const popupImageCloseBtn = popupImageWindow.querySelector('.popup__button-close')
const popupImageFigure = popupImageWindow.querySelector('.popup__image')
const popupImageCaption = popupImageWindow.querySelector('.popup__image-caption')
const popupImageOverlay = popupImageWindow.querySelector('.popup__overlay_image')

// ==================  Profile  ==================

const profileTitle = document.querySelector('.profile__title')
const profileProf = document.querySelector('.profile__profession')

// ==================  Card  ==================

const cardsGrid = document.querySelector('.cards-grid') // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card') //template

// ==================  No-Scroll  ==================
const mainContainer = document.querySelector('.main-container')
