
// ==================  создаём карточку из массива initialCards ==================

function createCard(titleValue, linkValue) {
    const itemCloneCard = itemCardTemplate.cloneNode(true); // клонируем карточку из <template>
    itemCloneCard.querySelector('.card__title').textContent = titleValue; // заголовок
    itemCloneCard.querySelector('.card__image').src = linkValue; // ссылка
    itemCloneCard.querySelector('.card__title').alt = titleValue; // альт текст

    // клик на ❤ - меняем на 🤍
    const cardLikeBtn = itemCloneCard.querySelector('.card__like');
    cardLikeBtn.addEventListener('click', () => {
        cardLikeBtn.classList.toggle('card__like_active');
    });

    // клик на крестик - удаляем card
    const cardDeleteBtn = itemCloneCard.querySelector('.card__delete-button');
    cardDeleteBtn.addEventListener('click', () => {
        itemCloneCard.remove();
    })

    // при клике на фото - показываем popupImageWindow и наполняем
    const cardPreview = itemCloneCard.querySelector('.card__image');
    cardPreview.addEventListener('click',() => {
        openpopup(popupImageWindow);
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
function openpopup(popup) {
    popup.classList.add('popup_opened')
}

// ==================  Закрываем текущий popup  ==================
function closepopup(popup) {
    popup.classList.remove('popup_opened')
}















