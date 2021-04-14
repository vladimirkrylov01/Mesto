// ==================  Edit Modal  ==================

const modalEditWindow = document.querySelector('.popup-type-edit');
const modalEditOpenBtn = document.querySelector('.profile__button-edit');
const modalEditCloseBtn = modalEditWindow.querySelector('.popup__button-close');
const modalEditInputName = modalEditWindow.querySelector('.popup__input_type_name');
const modalEditInputProf = modalEditWindow.querySelector('.popup__input_type_prof');

// ==================  Add Modal  ==================

const modalAddCardWindow = document.querySelector('.popup-type-add-card');
const modalAddCardOpenBtn = document.querySelector('.profile__button-add');
const modalAddCardInputTitle = modalAddCardWindow.querySelector('.popup__input_type_place');
const modalAddCardInputLink = modalAddCardWindow.querySelector('.popup__input_type_link');
const modalAddCardCloseBtn = modalAddCardWindow.querySelector('.popup__button-close');

// ==================  Preview Modal  ==================

const modalImageWindow = document.querySelector('.popup-type-image');
const modalImageCloseBtn = modalImageWindow.querySelector('.popup__button-close');
const modalImageFigure = modalImageWindow.querySelector('.popup__image')
const modalImageCaption = modalImageWindow.querySelector('.popup__image-caption');


// ==================  Profile  ==================

const profileTitle = document.querySelector('.profile__title');
const profileProf = document.querySelector('.profile__profession');


// ==================  Card  ==================

const cardsGrid = document.querySelector('.cards-grid'); // DOM
const itemCardTemplate = document.querySelector('.cards-grid-template').content.querySelector('.card'); //template


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

    const CardPreview = itemCloneCard.querySelector('.card__image');
    CardPreview.addEventListener('click',() => {
        openModal(modalImageWindow);
        modalImageFigure.src = linkValue;
        modalImageFigure.alt = titleValue;
        modalImageCaption.textContent = titleValue;
    })
    return (itemCloneCard);
}

// WebStorm пишет в "Problems" следующее:"Void function return value is used" и подсвечивает это как предупреждение.
// подсвечивает начиная с const initCards = initialCards.forEach()
// скрин - http://joxi.ru/Dr8go0LiM0yYJA
// Буду признателен разъяснению :)
const initCards = initialCards.forEach(item => {
    cardsGrid.append(createCard(item.name, item.link));
})
console.log(initCards);

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