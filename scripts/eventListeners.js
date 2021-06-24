// import {Card} from "./modules/card.js";
// import {FormValidator} from "./modules/formValidator.js";
//
//
// // ==================  Open Popup Button  ==================
// function openPopup(popup){
//   popup.classList.add(vConfig.openClass) // показываем
//   mainContainer.classList.add('no-scroll') // убираем правый оступ
//   enableEscListener() // // вешаем на документ слушатель ESC
// }
// popupEditOpenBtn.addEventListener('click', () => {
//   openPopup(popupEditWindow) // открываем попап
//   popupEditInputName.value = profileTitle.textContent // передаём значения из profile в инпуты попапа
//   popupEditInputProf.value = profileProf.textContent
//   // clearInputError(popupEditWindow) // очищаем ошибки в инпутах
//   const formValidate = new FormValidator()
//   formValidate.enableValidation()
//   formValidate.clearInputError(popupEditWindow)
// });
//
// popupAddCardOpenBtn.addEventListener('click', () => {
//   openPopup(popupAddCardWindow) // открываем попап
//   const formValidate = new FormValidator()
//   formValidate.enableValidation(popupAddCardWindow)
//   button.classList.add(vConfig.inactiveButtonClass) // окрашиваем в disabled
//   button.setAttribute('disabled',true) // делаем неактивной
//   formValidate.clearInputError(popupAddCardWindow) // очищаем ошибки
//   // clearInputError(popupAddCardWindow) // очищаем ошибки в инпутах
//   // resetAddForm(popupAddCardWindow) // очищаем инпуты
//   popupAddForm.reset() // очищаем инпуты у формы
// })
//
// // ==================  Закрытие на X  ==================
//
// popupEditCloseBtn.addEventListener('click', () => closePopup(popupEditWindow))
// popupAddCardCloseBtn.addEventListener('click', () => {
//   closePopup(popupAddCardWindow)
// })
// popupImageCloseBtn.addEventListener('click', () => closePopup(popupImageWindow))
//
// // ==================  Submit  ==================
//
// popupAddForm.addEventListener('submit', () => { // при submit
//   // старый код
//   // const titleInputValue = popupAddCardInputPlace.value
//   // const linkInputValue = popupAddCardInputLink.value
//   // cardsGrid.prepend(titleInputValue,linkInputValue)
//   const newCard ={
//     name: popupAddCardInputPlace.value,
//     link: popupAddCardInputLink.value
//   }
//   const card = new Card (newCard)
//   const cardElement = card.getElement()
//   cardsGrid.prepend(cardElement)
//   closePopup(popupAddCardWindow)
// })
//
//
// popupEditForm.addEventListener('submit', e => {
//   e.preventDefault()
//   profileTitle.textContent = popupEditInputName.value // передаём из инпутов попап в значения profile
//   profileProf.textContent = popupEditInputProf.value
//   closePopup(popupEditWindow) //закрываем попап
//   popupEditForm.reset() // хотя по сути можно не обнулять...хммм
//   // setEventListeners(popupEditForm)
// })
//
//
// // ==================  Закрытие по Overlay  ==================
// // ==================  Закрытие по Overlay  ==================
// function clickOnOverlay(e) {
//   if(e.target === e.currentTarget){
//     closePopup(e.target)
//   }
// }
// popupEdit.addEventListener('click', e => clickOnOverlay(e))
// popupAdd.addEventListener('click', e => clickOnOverlay(e))
// popupImage.addEventListener('click', e => clickOnOverlay(e))
// // не получилось сделать закрытие на оверлей универсальным для всех попап
// // const popup = document.querySelectorAll('.popup')
// // popup.addEventListener('click', e => clickOnOverlay(e))
// // http://joxi.ru/D2PO6bpuJK87Km