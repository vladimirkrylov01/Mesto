import {FormValidator} from "./FormValidator.js";

export const popupEditForm = document.forms['editPopupForm'], // form name="editPopupForm"
  popupEditInputName = popupEditForm.elements.name, // input name="name"
  popupEditInputProf = popupEditForm.elements.profession // input "prof"

export const popupEditWindow = document.querySelector('.popup-type-edit'), // edit popup window
  popupEditOpenBtn = document.querySelector('.profile__button-edit') // open [ edit ]

// ==================  Add popup  ==================
export const popupAddForm = document.forms['addPopupForm'], // form name ="addPopupForm"
  popupAddCardInputPlace = popupAddForm.elements.place, // name="place"
  popupAddCardInputLink = popupAddForm.elements.link // name="link"

export const popupAddCardWindow = document.querySelector('.popup-type-add-card'), // add popup window
  popupAddCardOpenBtn = document.querySelector('.profile__button-add') // open [ + ]

// ==================  Preview popup  ==================
export const popupImageWindow = document.querySelector('.popup-type-image') // preview popup window

// ==================  Profile  ==================
export const profileTitle = document.querySelector('.profile__title')
export const profileProf = document.querySelector('.profile__profession')

// ==================  Card  ==================
export const cardsGrid = document.querySelector('.cards-grid') // DOM

// ==================  No-Scroll  ==================
export const mainContainer = document.querySelector('.main-container')

export const popupWindows = document.querySelectorAll('.popup')
export const closeButtons = document.querySelectorAll('.popup__button-close')

export const buttonEdit = document.querySelector('.popup__button-edit')

// Настройки
export const vConfig = {
  formSelector: 'form', // class="form"
  inputSelector: '.form__input', //  class="form__input"
  submitButtonSelector: '.form__submit', // class="form__submit"
  inactiveButtonClass: 'popup__button-submit_disabled', // disabled button
  inputErrorClass: 'form__input_type_error', // border-bottom-color: red
  errorClass: 'form__input-error_active', // opacity 1 - показываем сообщение ошибки)
  openClass: 'popup_opened',
}

// массив из карточек
export const initialCards = [
  {
    name: 'Paris',
    link: 'https://images.unsplash.com/photo-1471960098958-2059c6681742?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2021&q=80'
  },
  {
    name: 'Prague',
    link: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Freedom',
    link: 'https://images.unsplash.com/photo-1495555694070-b0fe5bcd2576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },{
    name: 'Tokyo',
    link: 'https://images.unsplash.com/photo-1527596773609-5f8544271a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Istanbul',
    link: 'https://images.unsplash.com/photo-1623439844752-524658b16ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80'
  },
  {
    name: 'Tokyo',
    link: 'https://images.unsplash.com/photo-1616386232536-ed7340327763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
  },
  {
    name: 'Kóspallag',
    link: 'https://images.unsplash.com/photo-1617046085573-d2040c3a1cdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Hong Kong',
    link: 'https://images.unsplash.com/photo-1620175527578-3a01876fd6c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
  },
  {
    name: 'Tenerife',
    link: 'https://images.unsplash.com/photo-1616105345895-f20f485f1874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80'
  },

];

export const editProfileFormValidator = new FormValidator(vConfig, popupEditForm)
export const addCardFormValidator = new FormValidator(vConfig, popupAddForm)