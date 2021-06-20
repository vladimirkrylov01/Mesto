// import {Card} from "./card";

// ==================  Open Popup Button  ==================

popupEditOpenBtn.addEventListener('click', () => {
  popupEditInputName.value = profileTitle.textContent // передаём значения из profile в инпуты попапа
  popupEditInputProf.value = profileProf.textContent
  // clearInputError(popupEditWindow) // очищаем ошибки в инпутах
  const formValidate = new FormValidator()
  formValidate.enableValidation()
  formValidate.clearInputError(popupEditWindow)
  openPopup(popupEditWindow) // открываем попап
});


popupAddCardOpenBtn.addEventListener('click', () => {
  openPopup(popupAddCardWindow) // открываем попап

  const formValidate = new FormValidator()
  formValidate.enableValidation(popupAddCardWindow)
  button.classList.add(vConfig.inactiveButtonClass) // окрашиваем в disabled
  button.setAttribute('disabled',true) // делаем неактивной
  formValidate.clearInputError(popupAddCardWindow)
  // clearInputError(popupAddCardWindow) // очищаем ошибки в инпутах
  // resetAddForm(popupAddCardWindow) // очищаем инпуты
  popupAddForm.reset() // очищаем инпуты у формы
})

// ==================  Закрытие на X  ==================

popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow))
popupAddCardCloseBtn.addEventListener('click', () => {
  closePopup(popupAddCardWindow)
})
popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow))

// ==================  Submit  ==================

popupAddForm.addEventListener('submit', () => { // при submit
  // старый код
  // const titleInputValue = popupAddCardInputPlace.value
  // const linkInputValue = popupAddCardInputLink.value
  // cardsGrid.prepend(titleInputValue,linkInputValue)
  const newCard ={
    name: popupAddCardInputPlace.value,
    link: popupAddCardInputLink.value
  }
  const card = new Card (newCard)
  const cardElement = card.getElement()
  cardsGrid.prepend(cardElement)

  // const card1 = new Card(data)
  // const cardElement = card1.getElement()
  // card1.name = popupAddCardInputPlace.value
  // card1.link = popupAddCardInputLink.value
  // cardsGrid.prepend(cardElement.name,cardElement.link)

  // const card = new Card()
  // titleInputValue = popupAddCardInputPlace.value
  // card.link = popupAddCardInputLink.value
  // const cardElement = card.getElement()
  // cardsGrid.prepend(cardElement) // Добавляем в DOM из add popup

  closePopup(popupAddCardWindow)
})


popupEditForm.addEventListener('submit', e => {
  e.preventDefault()
  profileTitle.textContent = popupEditInputName.value // передаём из инпутов попап в значения profile
  profileProf.textContent = popupEditInputProf.value
  closePopup(popupEditWindow) //закрываем попап
  popupEditForm.reset() // хотя по сути можно не обнулять...хммм
  // setEventListeners(popupEditForm)
})


// ==================  Закрытие по Overlay  ==================

popupEdit.addEventListener('click', e => clickOnOverlay(e))
popupAdd.addEventListener('click', e => clickOnOverlay(e))
popupImage.addEventListener('click', e => clickOnOverlay(e))
// не получилось сделать закрытие на оверлей универсальным для всех попап
// const popup = document.querySelectorAll('.popup')
// popup.addEventListener('click', e => clickOnOverlay(e))
// http://joxi.ru/D2PO6bpuJK87Km