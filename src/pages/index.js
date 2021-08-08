import './index.css'

import {Api} from "../scripts/components/Api.js";
import {Card} from "../scripts/components/Card.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import {UserInfo} from "../scripts/components/UserInfo.js"
import {PopupWithForm} from "../scripts/components/PopupWithForm.js"
import {PopupWithImage} from "../scripts/components/PopupWithImage.js"
import {Section} from "../scripts/components/Section.js"
import {PopupWithConfirm} from "../scripts/components/PopupWithConfirm.js"
import {
  vConfig,
  popupEditForm,
  popupAddForm,
  popupEditOpenBtn,
  nameInput,
  profInput,
  popupAddCardOpenBtn,
  initialCards,
  cardsGridTemplate,
  popupAvatarForm, avatarEditBtn,
} from "../scripts/utils/constants.js"

const api = new Api(
  'https://nomoreparties.co/v1',
  '7334389e-9ffb-4678-b7ba-2496fb9a2222',
  'cohort-26'
)

const userInfo = new UserInfo('.profile__title', '.profile__profession', '.profile__avatar')

Promise.all([
  api.getUserInfo(),
  api.getInitialCards(),
])
  .then(([userData, cards]) => {
    setInitialUserData(userData)
    renderInitialCards(cards)
  })
  .catch(console.error)


function setInitialUserData(userData) {
  userInfo.setUserInfo({
    name: userData.name,
    about: userData.about,
    avatar: userData.avatar,
    _id: userData._id
  })
}

function createCard(cardData) {
  const user = userInfo.getUserId()
  const card = new Card(
    cardData,
    user,
    cardsGridTemplate,
    cardImageClickHandler,
    deleteCardClickHandler,
    likeClickHandler
  )
  return card.renderCard();
}

// отрисовка шаблонных карточек
const photoGridSection = new Section({
  initialCards,
  renderer: data => {
    const card = createCard(data)
    photoGridSection.addItem(card)
  }
}, '.cards-grid')

function renderInitialCards(cards) {
  photoGridSection.renderItems(cards)
}

function deleteCardClickHandler(card,element) {
  popupWithConfirmationForm.openPopup(card,element)
}

function cardImageClickHandler(title, link) {
  popupWithImage.openPopup(title, link)
}

function likeClickHandler(card) {
  api.likeCard(card.getId(), card.getIsLiked())
    .then((response) => {
      card.updateLikes(response.likes)
    })
    .catch(console.error)
}

function editProfileSubmitHandler(inputsData) {
  popupWithEditForm.formLoading(true) // меняем текст кнопки
  api.updateUserInfo({
    name: inputsData.name,
    about: inputsData.profession
  })
    .then(inputsDataUpdated => {
      userInfo.setUserInfo(inputsDataUpdated)
      popupWithEditForm.closePopup()
    })
    .catch(console.error)
    .finally(() => popupWithEditForm.formLoading(false))
}

function editAvatarSubmitHandler(inputData) {
  popupWithAvatarForm.formLoading(true)
  api.updateAvatar({
    avatar: inputData.avatar
  })
    .then(inputsDataUpdated => {
      userInfo.setUserInfo(inputsDataUpdated)
      popupWithAvatarForm.closePopup()
    })
    .catch(console.error)
    .finally(() => popupWithAvatarForm.formLoading(false))
}

function addCardSubmitHandler(inputsData) {
  popupWithAddForm.formLoading(true)
  api.addNewCard(inputsData)
    .then((card) => {
      const newCard = createCard(card)
      photoGridSection.addItem(newCard)
      popupWithAddForm.closePopup()
    })
    .catch(console.error)
    .finally(() => popupWithAddForm.formLoading(false))
}

function confirmDeletingSubmitHandler(element) {
  api.deleteCard(element.id)
    .then(() => {
      element.remove()
      element = null

      popupWithConfirmationForm.closePopup()
    })
    .catch(console.error)
    .finally(() => popupWithConfirmationForm.formLoading(false))
}

// ===========================================================================

const editProfileFormValidator = new FormValidator(vConfig, popupEditForm)
editProfileFormValidator.enableValidation()

const addCardFormValidator = new FormValidator(vConfig, popupAddForm)
addCardFormValidator.enableValidation()

const avatarFormValidator = new FormValidator(vConfig, popupAvatarForm)
avatarFormValidator.enableValidation()

const popupWithImage = new PopupWithImage('.popup-type-image')
popupWithImage.setEventListeners()

const popupWithEditForm = new PopupWithForm('.popup-type-edit', editProfileSubmitHandler)
popupWithEditForm.setEventListeners()

const popupWithAddForm = new PopupWithForm('.popup-type-add-card', addCardSubmitHandler)
popupWithAddForm.setEventListeners()

const popupWithAvatarForm = new PopupWithForm('.popup-edit-avatar', editAvatarSubmitHandler)
popupWithAvatarForm.setEventListeners()

const popupWithConfirmationForm = new PopupWithConfirm('.popup-type-delete', confirmDeletingSubmitHandler)
popupWithConfirmationForm.setEventListeners()

// ===========================================================================

popupEditOpenBtn.addEventListener('click', () => {
  editProfileFormValidator.clearInputError()
  popupWithEditForm.openPopup()
  const data = userInfo.getUserInfo()
  nameInput.value = data.name
  profInput.value = data.profession
})

popupAddCardOpenBtn.addEventListener('click', () => {
  addCardFormValidator.setButtonDisabled()
  addCardFormValidator.clearInputError()
  popupWithAddForm.openPopup()
})

avatarEditBtn.addEventListener('click', () => {
  avatarFormValidator.setButtonDisabled()
  avatarFormValidator.clearInputError()
  popupWithAvatarForm.openPopup()
})