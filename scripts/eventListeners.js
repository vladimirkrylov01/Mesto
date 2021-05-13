// ==================  Edit popup  ==================

popupEditOpenBtn.addEventListener('click', () => { // клик по [edit] + передаём значения из profile
  popupEditInputName.value = profileTitle.textContent
  popupEditInputProf.value = profileProf.textContent
  openPopup(popupEditWindow)
});
popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow)) // клик по Х
popupEditCardOverlay.addEventListener('click', () => closePopup(popupEditWindow)) // клик по overlay
popupEditForm.addEventListener('submit', popupEditProfileSubmitHandler); // отправка формы

// ==================  Add popup  ==================

popupAddCardOpenBtn.addEventListener('click', () => openPopup(popupAddCardWindow)) // клик по [+]
popupAddCardCloseBtn.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по Х
popupAddCardOverlay.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по overlay
popupAddForm.addEventListener('submit', popupAddSubmitHandler) // отправка формы

// ==================  Preview popup  ==================

popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow)) // клик по Х
popupImageOverlay.addEventListener('click', () => closePopup(popupImageWindow)) // клик по overlay