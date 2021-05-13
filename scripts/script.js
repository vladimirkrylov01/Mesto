

function createCard(titleValue, linkValue) {
    const itemCloneCard = itemCardTemplate.cloneNode(true); // cloneNode template
    itemCloneCard.querySelector('.card__title').textContent = titleValue;
    itemCloneCard.querySelector('.card__image').src = linkValue;
    itemCloneCard.querySelector('.card__title').alt = titleValue;

    const cardLikeBtn = itemCloneCard.querySelector('.card__like');
    cardLikeBtn.addEventListener('click', () => {
        cardLikeBtn.classList.toggle('card__like_active');
    });

    const cardDeleteBtn = itemCloneCard.querySelector('.card__delete-button');
    cardDeleteBtn.addEventListener('click', () => {
        itemCloneCard.remove();
    })

    const cardPreview = itemCloneCard.querySelector('.card__image');
    cardPreview.addEventListener('click',() => {
        openpopup(popupImageWindow);
        popupImageFigure.src = linkValue;
        popupImageFigure.alt = titleValue;
        popupImageCaption.textContent = titleValue;
    })
    return (itemCloneCard);
}

initialCards.forEach(item => {
    cardsGrid.append(createCard(item.name, item.link))
})



// ==================  edit submit + event  ==================

const popupEditForm = document.forms['editPopupForm']
const popupEditProfileSubmitHandler = e => {
    e.preventDefault()
    profileTitle.textContent = popupEditInputName.value //value EditName => profileTitle
    profileProf.textContent = popupEditInputProf.value //value EditProf => profileProf
    closepopup(popupEditWindow) //закрываем модалку
    popupEditForm.reset() //обнуляем модалку
}
popupEditOpenBtn.addEventListener('click', () => {
    popupEditInputName.value = profileTitle.textContent
    popupEditInputProf.value = profileProf.textContent
    openpopup(popupEditWindow)
});
popupEditCloseBtn.addEventListener('click', () => closepopup(popupEditWindow))
popupEditForm.addEventListener('submit', popupEditProfileSubmitHandler);


// ==================  add submit + event  ==================

const popupAddForm = document.forms['addPopupForm']
popupAddCardOpenBtn.addEventListener('click', () => openpopup(popupAddCardWindow))
popupAddCardCloseBtn.addEventListener('click', () => closepopup(popupAddCardWindow))
const popupAddSubmitHandler = e => {
    e.preventDefault()
    const titleInputValue = popupAddCardInputTitle.value
    const linkInputValue = popupAddCardInputLink.value
    cardsGrid.prepend(createCard(titleInputValue, linkInputValue))
    closepopup(popupAddCardWindow)
    popupAddForm.reset()
}
popupAddForm.addEventListener('submit', popupAddSubmitHandler)


// ==================  add submit + event  ==================
popupImageCloseBtn.addEventListener('click', () => closepopup(popupImageWindow))



// ==================  Открываем текущий popup  ==================
function openpopup(popup) {
    //добавляем .popup_opened
    popup.classList.add('popup_opened')
}

// ==================  Закрываем текущий popup  ==================
function closepopup(popup) {
    //удаляем .popup_opened
    popup.classList.remove('popup_opened')
}















