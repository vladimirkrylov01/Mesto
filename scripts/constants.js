// ==================  Edit Modal  ==================

const modalEditWindow = document.querySelector('.popup-type-edit');
const modalEditOpenBtn = document.querySelector('.profile__button-edit');
const modalEditCloseBtn = modalEditWindow.querySelector('.popup__button-close');
const modalEditInputName = modalEditWindow.querySelector('.popup__input_type_name');
const modalEditInputProf = modalEditWindow.querySelector('.popup__input_type_prof');


// ==================  Add Modal  ==================

const modalAddCardWindow = document.querySelector('.popup-type-add-card');
const modalAddCardOpenBtn = document.querySelector('.profile__button-add');
const modalAddCardInputTitle = modalAddCardWindow.querySelector('.popup__input_type_place');
const modalAddCardInputLink = modalAddCardWindow.querySelector('.popup__input_type_link');
const modalAddCardCloseBtn = modalAddCardWindow.querySelector('.popup__button-close');

// ==================  Preview Modal  ==================

const modalImageWindow = document.querySelector('.popup-type-image');
const modalImageCloseBtn = modalImageWindow.querySelector('.popup__button-close');
const modalImageFigure = modalImageWindow.querySelector('.popup__image')
const modalImageCaption = modalImageWindow.querySelector('.popup__image-caption');


// ==================  Profile  ==================

const profileTitle = document.querySelector('.profile__title');
const profileProf = document.querySelector('.profile__profession');

// ==================  Card  ==================

const cardsGrid = document.querySelector('.cards-grid'); // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card'); //template