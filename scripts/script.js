import {Card} from "./modules/Card.js";
import {FormValidator} from "./modules/FormValidator.js";
import {openPopup, closePopup} from "./modules/utils.js";
import * as all from "./modules/constants.js"

// карточки из массива
all.initialCards.forEach(item => {
  const card = new Card(item,'.cards-grid-template') // Создаём экземпляр карточки
  const cardElement = card.render() // Создаём карточку и возвращаем наружу
  all.cardsGrid.append(cardElement) // Добавляем в DOM
})

// ==================  Open Buttons Listeners  ==================
all.popupEditOpenBtn.addEventListener('click', () => {
  openPopup(all.popupEditWindow) // открываем попап
  all.popupEditInputName.value = all.profileTitle.textContent // передаём значения из profile в инпуты попапа
  all.popupEditInputProf.value = all.profileProf.textContent
  const formValidate = new FormValidator(all.vConfig)
  formValidate.enableValidation()
  formValidate.clearInputError(all.popupEditWindow)
});
all.popupAddCardOpenBtn.addEventListener('click', () => {
  openPopup(all.popupAddCardWindow) // открываем попап
  const formValidate = new FormValidator(all.vConfig)
  formValidate.enableValidation(all.popupAddCardWindow)
  all.button.classList.add(all.vConfig.inactiveButtonClass) // окрашиваем в disabled
  all.button.setAttribute('disabled', true) // делаем неактивной
  formValidate.clearInputError(all.popupAddCardWindow) // очищаем ошибки
  all.popupAddForm.reset() // очищаем инпуты у формы
})

// ==================  Submit Listeners ==================
all.popupAddForm.addEventListener('submit', () => {
  const newCard = {
    name: all.popupAddCardInputPlace.value,
    link: all.popupAddCardInputLink.value
  }
  const card = new Card(newCard,'.cards-grid-template')
  const cardElement = card.render()
  all.cardsGrid.prepend(cardElement)
  closePopup(all.popupAddCardWindow)
})
all.popupEditForm.addEventListener('submit', () => {
  all.profileTitle.textContent = all.popupEditInputName.value // передаём из инпутов попап в значения profile
  all.profileProf.textContent = all.popupEditInputProf.value
  closePopup(all.popupEditWindow) //закрываем попап
  // setEventListeners(popupEditForm)
})

// ==================  Закрытие по Overlay  ==================
function clickOnOverlay(e) {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__button-close')) {
    closePopup(e.target)
  }
}
all.popupWindows.forEach(popup => {
  popup.addEventListener('click', e => clickOnOverlay(e))
  all.closeButtons.forEach(button => {
    button.addEventListener('click', () => closePopup(popup))
  })
})

