import './pages/index.css'
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import btnClose from './images/button/popup__button-close.svg';
import cardsBtnDel from './images/cards/card_btn_delete.svg';
import headerLogo from './images/header/header__logo.svg';
import likeActive from './images/like/like-active.svg';
import likeDisabled from './images/like/like-disabled.svg';
import addBtn from './images/profile/add.svg';
import editBtn from './images/profile/edit.svg';

const Tenerife = new URL('./images/Tenerife.jpg', import.meta.url);
const Hong = new URL('./images/Hong.jpg', import.meta.url);
const Istanbul = new URL('./images/Istanbul.jpg', import.meta.url);
const Kospa = new URL('./images/Kospa.jpg', import.meta.url);
const Paris = new URL('./images/Paris.jpg', import.meta.url);
const Prague = new URL('./images/Prague.jpg', import.meta.url);
const Freedom = new URL('./images/Freedom.jpg', import.meta.url);
const Tokyo = new URL('./images/Tokyo.jpg', import.meta.url);
const Tokyo_4 = new URL('./images/Tokyo_4.jpg', import.meta.url);

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'btnClose', image: btnClose },
  { name: 'cardsBtnDel', link: cardsBtnDel },
  { name: 'headerLogo', link: headerLogo },
  { name: 'likeActive', link: likeActive },
  { name: 'likeDisabled', link: likeDisabled },
  { name: 'addBtn', link: addBtn },
  { name: 'editBtn', link: editBtn },
  { name: 'Tenerife', link: Tenerife },
  { name: 'Hong', link: Hong },
  { name: 'Istanbul', link: Istanbul },
  { name: 'Kospa', link: Kospa },
  { name: 'Paris', link: Paris },
  { name: 'Prague', link: Prague },
  { name: 'Freedom', link: Freedom },
  { name: 'Tokyo', link: Tokyo },
  { name: 'Tokyo_4', link: Tokyo_4 },
];

import {Card} from "./scripts/modules/Card.js"
import {FormValidator} from "./scripts/modules/FormValidator.js"
import {UserInfo} from "./scripts/components/UserInfo.js"
import {PopupWithForm} from "./scripts/components/PopupWithForm.js"
import {PopupWithImage} from "./scripts/components/PopupWithImage.js"
import {Section} from "./scripts/components/Section.js"
// import {SubmitForm} from "./components/SubmitForm.js";
import {
  vConfig,
  popupEditForm,
  popupAddForm,
  popupEditOpenBtn,
  nameInput,
  profInput,
  popupAddCardOpenBtn,
  initialCards,
  buttonEdit,
  popupAddCardInputPlace,
  popupAddCardInputLink,
  cardsGrid,
} from "./scripts/utils/constants.js";

// отрисовка шаблонных карточек при помощи Section
const initialCardsTemplate = new Section({
  data: initialCards, // берём шаблонные карточки
  renderer: item => { // каждую отрисовываем
    const card = new Card(item,
      '.cards-grid-template',
      cardImageClickHandler)
    const cardElement = card.renderCard()
    initialCardsTemplate.setItem(cardElement) // и вставляем в '.cards-grid'
  }
}, '.cards-grid')
initialCardsTemplate.renderItems()

const editProfileFormValidator = new FormValidator(vConfig, popupEditForm)
editProfileFormValidator.enableValidation()

const addCardFormValidator = new FormValidator(vConfig, popupAddForm)
addCardFormValidator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__profession')

const popupWithEditForm = new PopupWithForm('.popup-type-edit',editProfileSubmitHandler)
popupWithEditForm.setEventListeners()

const popupWithAddForm = new PopupWithForm('.popup-type-add-card',addCardSubmitHandler)
popupWithAddForm.setEventListeners()

const popupWithImage = new PopupWithImage('.popup-type-image')
popupWithImage.setEventListeners()

function cardImageClickHandler(title,link){
  popupWithImage.openPopup(title,link)
}

function editProfileSubmitHandler(){
  userInfo.setUserInfo({
    name: nameInput.value,
    about: profInput.value
  })
  popupWithEditForm.closePopup()
}

function addCardSubmitHandler(){
  const card = new Card({
      name:  popupAddCardInputPlace.value,
      link:  popupAddCardInputLink.value
    },
    '.cards-grid-template',
    cardImageClickHandler)
  const cardElement = card.renderCard()
  cardsGrid.prepend(cardElement)
  popupWithAddForm.closePopup()
}

// ==================  Edit form  ==================
popupEditOpenBtn.addEventListener('click', () => {
  popupWithEditForm.openPopup()
  editProfileFormValidator.clearInputError()

  const user = userInfo.getUserInfo()
  // передаём значения из profile в инпуты попапа
  nameInput.value = user.name
  profInput.value = user.profession

  buttonEdit.removeAttribute('disabled') // делаем кнопку enabled
  buttonEdit.classList.remove(vConfig.inactiveButtonClass) // делаем кнопку черной
})

// ==================  Add form ==================
popupAddCardOpenBtn.addEventListener('click', () => {
  addCardFormValidator.clearInputError()
  addCardFormValidator._setButtonDisabled()
  popupWithAddForm.openPopup()
})

// const form = new SubmitForm('.form') // создаём экземпляр формы
// const formElement = form.generateForm() // генерируем разметку формы
// const formRenderer = new Section({
//   data:[],
// },'.form')
// formRenderer.setItem(formElement)
















//