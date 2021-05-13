
// ==================  создаём карточку из массива initialCards ==================
function createCard(titleValue, linkValue) {
    const itemCloneCard = itemCardTemplate.cloneNode(true); // клонируем карточку из <template>
    itemCloneCard.querySelector('.card__title').textContent = titleValue; // заголовок clone card = initialCards > item.name
    itemCloneCard.querySelector('.card__image').src = linkValue; // / src clone card = initialCards > item.link
    itemCloneCard.querySelector('.card__title').alt = titleValue; // alt clone card = initialCards > item.name

    // клик на ❤ - меняем на 🤍
    const cardLikeBtn = itemCloneCard.querySelector('.card__like');
    cardLikeBtn.addEventListener('click', () => {
        cardLikeBtn.classList.toggle('card__like_active');
    });

    // клик на X - удаляем card
    const cardDeleteBtn = itemCloneCard.querySelector('.card__delete-button');
    cardDeleteBtn.addEventListener('click', () => {
        itemCloneCard.remove();
    })

    // при клике на фото - показываем popupImageWindow и наполняем
    const cardPreview = itemCloneCard.querySelector('.card__image');
    cardPreview.addEventListener('click',() => {
        openPopup(popupImageWindow);
        popupImageFigure.src = linkValue;
        popupImageFigure.alt = titleValue;
        popupImageCaption.textContent = titleValue;
    })
    return (itemCloneCard);
}

// проходим по массиу и каждый объект добавляем в начало(append) cardsGrid
initialCards.forEach(item => {
    cardsGrid.append(createCard(item.name, item.link))
})

// ==================  Открываем текущий popup  ==================
function openPopup(popup) {
    popup.classList.add('popup_opened')
    mainContainer.classList.add('no-scroll')
}

// ==================  Закрываем текущий popup  ==================
function closePopup(popup) {
    popup.classList.remove('popup_opened')
    mainContainer.classList.remove('no-scroll')
}















