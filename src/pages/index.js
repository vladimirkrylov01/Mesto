import './index.css'
import btnClose from '../images/button/popup__button-close.svg';
import cardsBtnDel from '../images/cards/card_btn_delete.svg';
import headerLogo from '../images/header/header__logo.svg';
import likeActive from '../images/like/like-active.svg';
import likeDisabled from '../images/like/like-disabled.svg';
import addBtn from '../images/profile/add.svg';
import editBtn from '../images/profile/edit.svg';


// у меня возник вопрос, как сделать реализацию const initialCards не через ссылки с unsplash,
// а через эти переменные (изображения в проекте) ?

const Tenerife = new URL('../images/Tenerife.jpg', import.meta.url);
const Hong = new URL('../images/Hong.jpg', import.meta.url);
const Istanbul = new URL('../images/Istanbul.jpg', import.meta.url);
const Kospa = new URL('../images/Kospa.jpg', import.meta.url);
const Paris = new URL('../images/Paris.jpg', import.meta.url);
const Prague = new URL('../images/Prague.jpg', import.meta.url);
const Freedom = new URL('../images/Freedom.jpg', import.meta.url);
const Tokyo = new URL('../images/Tokyo.jpg', import.meta.url);
const Tokyo_4 = new URL('../images/Tokyo_4.jpg', import.meta.url);

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

import {Card} from "../scripts/components/Card.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import {UserInfo} from "../scripts/components/UserInfo.js"
import {PopupWithForm} from "../scripts/components/PopupWithForm.js"
import {PopupWithImage} from "../scripts/components/PopupWithImage.js"
import {Section} from "../scripts/components/Section.js"
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
} from "../scripts/utils/constants.js";

function createCard(cardData){
  const card = new Card(
    cardData,
    '.cards-grid-template',
    cardImageClickHandler
  )
  return card.renderCard()
}

const editProfileSubmitHandler = data => {
  userInfo.setUserInfo({
    name: data.name,  // input name="name"
    about: data.profession // input name="profession"
  })
  popupWithEditForm.closePopup()
}

const addCardSubmitHandler = ({place,link}) => {
  const newCard = createCard({
    name:  place, // input name="place"
    link:  link, // input name="link"
  })
  cardsGridTemplate.addItem(newCard)
  popupWithAddForm.closePopup()
}

// Логика отрисовки карточек при помощи Section
const cardsGridTemplate = new Section({
  renderer: item => { // каждую отрисовываем
    const card = createCard(item)
    cardsGridTemplate.addItem(card) // и вставляем в template '.cards-grid'
  }
}, '.cards-grid') // куда рисуем карточку

// отрисовка шаблонных карточек
cardsGridTemplate.renderItems(initialCards)

// валидация для Edit Popup
const editProfileFormValidator = new FormValidator(vConfig, popupEditForm)
editProfileFormValidator.enableValidation()

// валидация для Add Popup
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

// ==================  Edit form  ==================
popupEditOpenBtn.addEventListener('click', () => {
  popupWithEditForm.openPopup()
  editProfileFormValidator.clearInputError()
  editProfileFormValidator.setButtonEnabled()

  const user = userInfo.getUserInfo()
  // передаём значения из profile в инпуты попапа
  nameInput.value = user.name
  profInput.value = user.profession

})

// ==================  Add form ==================
popupAddCardOpenBtn.addEventListener('click', () => {
  addCardFormValidator.clearInputError()
  addCardFormValidator.setButtonDisabled()
  popupWithAddForm.openPopup()
})














//