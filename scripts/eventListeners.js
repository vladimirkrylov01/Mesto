// ==================  Open Popup Button  ==================

popupEditOpenBtn.addEventListener('click', () => {
  popupEditInputName.value = profileTitle.textContent // передаём значения из profile в инпуты попапа
  popupEditInputProf.value = profileProf.textContent
  clearInputError(popupEditWindow) // очищаем ошибки в инпутах
  openPopup(popupEditWindow) // открываем попап
});
popupAddCardOpenBtn.addEventListener('click', () => {
  clearInputError(popupAddCardWindow) // очищаем ошибки в инпутах
  openPopup(popupAddCardWindow) // открываем попап
  resetAddForm(popupAddCardWindow) // очищаем инпуты
})

// ==================  Закрытие на X  ==================

popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow))
popupAddCardCloseBtn.addEventListener('click', () => {
  closePopup(popupAddCardWindow)
})
popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow))

// ==================  Submit  ==================

popupAddForm.addEventListener('submit', () => { // при submit
  const titleInputValue = popupAddCardInputPlace.value
  const linkInputValue = popupAddCardInputLink.value
  cardsGrid.prepend(createCard(titleInputValue, linkInputValue))
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