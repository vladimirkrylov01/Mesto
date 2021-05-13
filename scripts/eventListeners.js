// ==================  Edit popup  ==================

popupEditOpenBtn.addEventListener('click', () => { // клик по [edit] + передаём значения из profile
  popupEditInputName.value = profileTitle.textContent
  popupEditInputProf.value = profileProf.textContent
  openPopup(popupEditWindow)
});
popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow)) // клик по Х
popupEditForm.addEventListener('submit', popupEditProfileSubmitHandler);
popupEditWindow.addEventListener('click', () => closePopup(popupEditWindow)) // клик по overlay

// ==================  Add popup  ==================

popupAddCardOpenBtn.addEventListener('click', () => openPopup(popupAddCardWindow)) // клик по [+]
popupAddCardCloseBtn.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по Х
popupAddCardWindow.addEventListener('click', () => closePopup(popupAddCardWindow)) // клик по overlay
popupAddForm.addEventListener('submit', popupAddSubmitHandler)

// ==================  Preview popup  ==================

popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow)) // клик по Х
popupImageWindow.addEventListener('click', () => closePopup(popupImageWindow)) // клик по overlay
