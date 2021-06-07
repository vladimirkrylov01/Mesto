// ==================  Edit popup  ==================

// при submit
popupEditForm.addEventListener('submit', e => {
  e.preventDefault()
  profileTitle.textContent = popupEditInputName.value // передаём из инпутов попап в значения profile
  profileProf.textContent = popupEditInputProf.value
  closePopup(popupEditWindow) //закрываем попап
  popupEditForm.reset() // хотя по сути можно не обнулять...хммм
  setEventListeners(popupEditForm)
})

// при клике на [edit]
popupEditOpenBtn.addEventListener('click', () => {
  popupEditInputName.value = profileTitle.textContent // передаём значения из profile в инпуты попапа
  popupEditInputProf.value = profileProf.textContent
  openPopup(popupEditWindow) // открываем попап

});


popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow)) // клик по Х
popupEditCardOverlay.addEventListener('click', () => closePopup(popupEditWindow)) // клик по overlay
// popupEditForm.addEventListener('submit', popupEditFormSubmit) // отправка формы по submit

// ==================  Add popup  ==================

popupAddForm.addEventListener('submit', e => {
  e.preventDefault()
  const titleInputValue = popupAddCardInputPlace.value
  const linkInputValue = popupAddCardInputLink.value
  cardsGrid.prepend(createCard(titleInputValue, linkInputValue))
  closePopup(popupAddCardWindow)
  popupAddForm.reset()
  setEventListeners(popupAddForm)
})
popupAddCardOpenBtn.addEventListener('click', () => openPopup(popupAddCardWindow)) // клик по [+]
popupAddCardCloseBtn.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по Х
popupAddCardOverlay.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по overlay
// popupAddForm.addEventListener('submit', popupAddFormSubmit) // отправка формы по submit

// ==================  Preview popup  ==================

popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow)) // клик по Х
popupImageOverlay.addEventListener('click', () => closePopup(popupImageWindow)) // клик по overlay

// ==================  Card  ==================
// делегирование клика на ❤
cardsGrid.addEventListener('click',(evt) => {
  if (evt.target.classList.contains('card__like')) {
    evt.target.classList.toggle('card__like_active')
  }
})

// popupAddForm.addEventListener('input',() => {
//   const popupAddInputIsValid = (popupAddCardInputTitle.value.length > 0 && popupAddCardInputTitle.value.length < 30) && popupAddCardInputLink.value.length > 0
//   setSubmitAddButtonState(popupAddInputIsValid)
// })
//
// popupEditForm.addEventListener('input',() => {
//   const popupEditInputIsValid = popupEditInputName.value.length > 2 && popupEditInputProf.value.length > 2
//   setSubmitEditButtonState(popupEditInputIsValid)
// })