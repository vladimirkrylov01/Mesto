import {vConfig,mainContainer} from "./constants.js";
// ==================  Обработчик ESC  ==================
function handleClosePopup(e) {
  if(e.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}
// ==================  Открываем текущий popup  ==================
export function openPopup(popup) {
  popup.classList.add(vConfig.openClass) // показываем
  mainContainer.classList.add('no-scroll') // убираем визуально отступ справа
  document.addEventListener('keyup', handleClosePopup)
}
// ==================  Закрываем текущий popup  ==================
export function closePopup(popup) {
  popup.classList.remove(vConfig.openClass)
  mainContainer.classList.remove('no-scroll')
  // clearInputError(popup)
  document.removeEventListener('keyup',handleClosePopup) // снимаем слушатель ESC
}
