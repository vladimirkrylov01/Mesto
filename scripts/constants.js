// ==================  Edit popup  ==================

const popupEditForm = document.forms['editPopupForm'], // form name="editPopupForm"
      popupEditInputName = popupEditForm.elements.name, // input name="name"
      popupEditInputProf = popupEditForm.elements.profession // input "prof"

const popupEditWindow = document.querySelector('.popup-type-edit'), // edit popup window
      popupEditOpenBtn = document.querySelector('.profile__button-edit'), // open [ edit ]
      popupEditCloseBtn = popupEditWindow.querySelector('.popup__button-close'), // btn X
      popupEditCardOverlay = popupEditWindow.querySelector('.popup__overlay_edit') // overlay
      // popupEditCardButton = popupEditWindow.querySelector('.popup__button-edit') // кнопка сохранить

// ==================  Add popup  ==================

const popupAddForm = document.forms['addPopupForm'], // form name ="addPopupForm"
      popupAddCardInputPlace = popupAddForm.elements.place, // name="place"
      popupAddCardInputLink = popupAddForm.elements.link // name="link"


const popupAddCardWindow = document.querySelector('.popup-type-add-card'), // add popup window
      popupAddCardOpenBtn = document.querySelector('.profile__button-add'), // open [ + ]
      popupAddCardCloseBtn = popupAddCardWindow.querySelector('.popup__button-close'), // btn X
      popupAddCardOverlay = popupAddCardWindow.querySelector('.popup__overlay_add'), // overlay
      popupAddCardButton = popupAddCardWindow.querySelector('.popup__button-add') // create btn


// ==================  Preview popup  ==================

const popupImageWindow = document.querySelector('.popup-type-image'), // preview popup window
      popupImageCloseBtn = popupImageWindow.querySelector('.popup__button-close'), // btn X
      popupImageFigure = popupImageWindow.querySelector('.popup__image'), // picture
      popupImageCaption = popupImageWindow.querySelector('.popup__image-caption'), // caption
      popupImageOverlay = popupImageWindow.querySelector('.popup__overlay_image') // overlay


// ==================  Profile  ==================
const profileTitle = document.querySelector('.profile__title')
const profileProf = document.querySelector('.profile__profession')

// ==================  Card  ==================
const cardsGrid = document.querySelector('.cards-grid') // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card') //template

// ==================  No-Scroll  ==================
const mainContainer = document.querySelector('.main-container')

// ==================  Form  ==================
const formElement = document.querySelector('.form'); // class="form"
const form = document.querySelector('.form')



