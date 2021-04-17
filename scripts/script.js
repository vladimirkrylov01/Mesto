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
        openModal(modalImageWindow);
        modalImageFigure.src = linkValue;
        modalImageFigure.alt = titleValue;
        modalImageCaption.textContent = titleValue;
    })
    return (itemCloneCard);
}


initialCards.forEach(item => {
    cardsGrid.append(createCard(item.name, item.link));
})

// ==================  edit submit + event  ==================

const modalEditForm = document.forms['editPopupForm'];
const modalEditProfileSubmitHandler = e => {
    e.preventDefault();
    profileTitle.textContent = modalEditInputName.value; //value EditName => profileTitle
    profileProf.textContent = modalEditInputProf.value; //value EditProf => profileProf
    closeModal(modalEditWindow); //закрываем модалку
    modalEditForm.reset(); //обнуляем модалку
}
modalEditOpenBtn.addEventListener('click', () => {
    modalEditInputName.value = profileTitle.textContent;
    modalEditInputProf.value = profileProf.textContent;
    openModal(modalEditWindow);
});
modalEditCloseBtn.addEventListener('click', () => closeModal(modalEditWindow));
modalEditForm.addEventListener('submit', modalEditProfileSubmitHandler);


// ==================  add submit + event  ==================

const modalAddForm = document.forms['addPopupForm'];
modalAddCardOpenBtn.addEventListener('click', () => openModal(modalAddCardWindow));
modalAddCardCloseBtn.addEventListener('click', () => closeModal(modalAddCardWindow));
const modalAddSubmitHandler = e => {
    e.preventDefault();
    const titleInputValue = modalAddCardInputTitle.value;
    const linkInputValue = modalAddCardInputLink.value;
    cardsGrid.prepend(createCard(titleInputValue, linkInputValue));
    closeModal(modalAddCardWindow);
    modalAddForm.reset();
}
modalAddForm.addEventListener('submit', modalAddSubmitHandler);


// ==================  add submit + event  ==================
modalImageCloseBtn.addEventListener('click', () => closeModal(modalImageWindow));



// ==================  Открываем текущий modal  ==================
function openModal(popup) {
    //добавляем .popup_opened
    popup.classList.add('popup_opened');
}

// ==================  Закрываем текущий modal  ==================
function closeModal(popup) {
    //удаляем .popup_opened
    popup.classList.remove('popup_opened');
}