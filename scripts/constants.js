// ==================  Edit popup  ==================

const popupEditWindow = document.querySelector('.popup-type-edit');
const popupEditOpenBtn = document.querySelector('.profile__button-edit');
const popupEditCloseBtn = popupEditWindow.querySelector('.popup__button-close');
const popupEditInputName = popupEditWindow.querySelector('.popup__input_type_name');
const popupEditInputProf = popupEditWindow.querySelector('.popup__input_type_prof');
const popupEditForm = document.forms['editPopupForm']
const popupEditProfileSubmitHandler = e => {
  e.preventDefault()
  profileTitle.textContent = popupEditInputName.value //value EditName => profileTitle
  profileProf.textContent = popupEditInputProf.value //value EditProf => profileProf
  closepopup(popupEditWindow) //закрываем модалку
  popupEditForm.reset() //обнуляем модалку
}

// ==================  Add popup  ==================

const popupAddCardWindow = document.querySelector('.popup-type-add-card');
const popupAddCardOpenBtn = document.querySelector('.profile__button-add');
const popupAddCardInputTitle = popupAddCardWindow.querySelector('.popup__input_type_place');
const popupAddCardInputLink = popupAddCardWindow.querySelector('.popup__input_type_link');
const popupAddCardCloseBtn = popupAddCardWindow.querySelector('.popup__button-close');
const popupAddForm = document.forms['addPopupForm']
const popupAddSubmitHandler = e => {
  e.preventDefault()
  const titleInputValue = popupAddCardInputTitle.value
  const linkInputValue = popupAddCardInputLink.value
  cardsGrid.prepend(createCard(titleInputValue, linkInputValue))
  closepopup(popupAddCardWindow)
  popupAddForm.reset()
}

// ==================  Preview popup  ==================

const popupImageWindow = document.querySelector('.popup-type-image');
const popupImageCloseBtn = popupImageWindow.querySelector('.popup__button-close');
const popupImageFigure = popupImageWindow.querySelector('.popup__image')
const popupImageCaption = popupImageWindow.querySelector('.popup__image-caption');


// ==================  Profile  ==================

const profileTitle = document.querySelector('.profile__title');
const profileProf = document.querySelector('.profile__profession');

// ==================  Card  ==================

const cardsGrid = document.querySelector('.cards-grid'); // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card'); //template

