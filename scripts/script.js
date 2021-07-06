import {Card} from "./modules/Card.js";
import * as all from "./modules/constants.js"

// карточки из массива
all.initialCards.forEach(item => {
  const card = new Card(item,
    '.cards-grid-template',
    openPopup,
    all.popupImageWindow)
  const cardElement = card.render() // Создаём карточку и возвращаем наружу
  all.cardsGrid.append(cardElement) // Добавляем в DOM
})

// ==================  Open Buttons Listeners  ==================
all.popupEditOpenBtn.addEventListener('click', () => {
  openPopup(all.popupEditWindow) // открываем попап
  // передаём значения из profile в инпуты попапа
  all.popupEditInputName.value = all.profileTitle.textContent
  all.popupEditInputProf.value = all.profileProf.textContent
  all.editProfileFormValidator.enableValidation()
  all.buttonEdit.removeAttribute('disabled') // делаем кнопку enabled
  all.buttonEdit.classList.remove(all.vConfig.inactiveButtonClass) // делаем кнопку черной
});
all.popupAddCardOpenBtn.addEventListener('click', () => {
  openPopup(all.popupAddCardWindow) // открываем попап
  all.addCardFormValidator.enableValidation()
  all.popupAddForm.reset() // очищаем инпуты у формы
})

// ==================  Submit Listeners ==================
all.popupAddForm.addEventListener('submit', () => {
  const card = new Card({
      name: all.popupAddCardInputPlace.value,
      link: all.popupAddCardInputLink.value
    },
    '.cards-grid-template',
    openPopup,
    all.popupImageWindow)

  const cardElement = card.render()
  all.cardsGrid.prepend(cardElement)
  closePopup(all.popupAddCardWindow)
})
all.popupEditForm.addEventListener('submit', () => {
  all.profileTitle.textContent = all.popupEditInputName.value // передаём из инпутов попап в значения profile
  all.profileProf.textContent = all.popupEditInputProf.value
  closePopup(all.popupEditWindow) //закрываем попап
})

// ==================  Закрытие по Overlay  ==================
function closeClickOverlay(e) {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__button-close')) {
    closePopup(e.target)
  }
}

all.popupWindows.forEach(popup => {
  popup.addEventListener('click', e => closeClickOverlay(e))
  all.closeButtons.forEach(button => {
    button.addEventListener('click', () => closePopup(popup))
  })
})

function closeClickESC(e) {
  if (e.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened')
    closePopup(currentPopup)
  }
}

// ==================  Открываем текущий popup  ==================
function openPopup(popup) {
  popup.classList.add(all.vConfig.openClass) // показываем
  all.mainContainer.classList.add('no-scroll') // убираем визуально отступ справа
  document.addEventListener('keyup', closeClickESC)
}

// ==================  Закрываем текущий popup  ==================
function closePopup(popup) {
  popup.classList.remove(all.vConfig.openClass)
  all.mainContainer.classList.remove('no-scroll')
  document.removeEventListener('keyup', closeClickESC) // снимаем слушатель ESC
}
