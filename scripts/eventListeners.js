// ==================  Edit popup  ==================

popupEditOpenBtn.addEventListener('click', () => {
  popupEditInputName.value = profileTitle.textContent
  popupEditInputProf.value = profileProf.textContent
  openpopup(popupEditWindow)
});
popupEditCloseBtn.addEventListener('click', () => closepopup(popupEditWindow))
popupEditForm.addEventListener('submit', popupEditProfileSubmitHandler);


// ==================  Add popup  ==================

popupAddCardOpenBtn.addEventListener('click', () => openpopup(popupAddCardWindow))
popupAddCardCloseBtn.addEventListener('click', () => closepopup(popupAddCardWindow))
popupAddForm.addEventListener('submit', popupAddSubmitHandler)

// ==================  Preview popup  ==================

popupImageCloseBtn.addEventListener('click', () => closepopup(popupImageWindow))
popupImageWindow.addEventListener('click', () => closepopup(popupImageWindow))