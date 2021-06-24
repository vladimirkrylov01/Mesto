import {Card} from "./modules/Card.js";
import {FormValidator} from "./modules/FormValidator.js";
import {openPopup, closePopup} from "./modules/utils.js";
import * as all from "./modules/constants.js"

initialCards.forEach(item => {
  const card = new Card(item) // Создаём экземпляр карточки
  const cardElement = card.getElement() // Создаём карточку и возвращаем наружу
  all.cardsGrid.append(cardElement) // Добавляем в DOM
})

// ==================  Open Buttons Listeners  ==================

all.popupEditOpenBtn.addEventListener('click', () => {
  openPopup(all.popupEditWindow) // открываем попап
  all.popupEditInputName.value = all.profileTitle.textContent // передаём значения из profile в инпуты попапа
  all.popupEditInputProf.value = all.profileProf.textContent
  // clearInputError(popupEditWindow) // очищаем ошибки в инпутах
  const formValidate = new FormValidator()
  formValidate.enableValidation()
  formValidate.clearInputError(all.popupEditWindow)
});
all.popupAddCardOpenBtn.addEventListener('click', () => {
  openPopup(all.popupAddCardWindow) // открываем попап
  const formValidate = new FormValidator()
  formValidate.enableValidation(all.popupAddCardWindow)
  all.button.classList.add(all.vConfig.inactiveButtonClass) // окрашиваем в disabled
  all.button.setAttribute('disabled', true) // делаем неактивной
  formValidate.clearInputError(all.popupAddCardWindow) // очищаем ошибки
  // clearInputError(popupAddCardWindow) // очищаем ошибки в инпутах
  // resetAddForm(popupAddCardWindow) // очищаем инпуты
  all.popupAddForm.reset() // очищаем инпуты у формы
})

// ==================  Закрытие на X  ==================
all.popupEditCloseBtn.addEventListener('click', () => closePopup(all.popupEditWindow))
all.popupAddCardCloseBtn.addEventListener('click', () => closePopup(all.popupAddCardWindow))
all.popupImageCloseBtn.addEventListener('click', () => closePopup(all.popupImageWindow))

// ==================  Submit Listeners ==================
all.popupAddForm.addEventListener('submit', () => {
  const newCard = {
    name: all.popupAddCardInputPlace.value,
    link: all.popupAddCardInputLink.value
  }
  const card = new Card(newCard)
  const cardElement = card.getElement()
  all.cardsGrid.prepend(cardElement)
  closePopup(all.popupAddCardWindow)
})
all.popupEditForm.addEventListener('submit', () => {
  all.profileTitle.textContent = all.popupEditInputName.value // передаём из инпутов попап в значения profile
  all.profileProf.textContent = all.popupEditInputProf.value
  closePopup(all.popupEditWindow) //закрываем попап
  all.popupEditForm.reset() // хотя по сути можно не обнулять...хммм
  // setEventListeners(popupEditForm)
})

// ==================  Закрытие по Overlay  ==================
function clickOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target)
  }
}

all.popupEdit.addEventListener('click', e => clickOnOverlay(e))
all.popupAdd.addEventListener('click', e => clickOnOverlay(e))
all.popupImage.addEventListener('click', e => clickOnOverlay(e))
