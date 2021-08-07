(()=>{"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_handleResponse",(function(t){return t.ok?t.json():Promise.reject(t.status)})),this.address=e.address,this.token=e.token,this.cohortId=e.cohortId}var o,i;return o=t,(i=[{key:"_request",value:function(t,n,r){var o={method:n,headers:{authorization:this.token,"Content-Type":"application/json"}};return fetch("".concat(this.address,"/").concat(this.cohortId,"/").concat(t),r?e(e({},o),{},{body:JSON.stringify(r)}):o).then(this._handleResponse).catch(console.error)}},{key:"getUserInfo",value:function(){return this._request("users/me","GET")}},{key:"getInitialCards",value:function(){return this._request("cards","GET")}},{key:"updateUserInfo",value:function(t){return this._request("users/me","PATCH",t)}},{key:"updateAvatar",value:function(t){return this._request("users/me/avatar","PATCH",t)}},{key:"addNewCard",value:function(t){return this._request("cards","POST",t)}},{key:"likeCard",value:function(t,e){return this._request("cards/likes/".concat(t),e?"DELETE":"PUT")}},{key:"deleteCard",value:function(t){return this._request("cards/".concat(t),"DELETE")}}])&&n(o.prototype,i),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e,n,r,o,i,a){var u=e.name,c=e.link,s=e.likes,l=e.owner,f=e._id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=u,this._link=c,this._cardDataId=f,this._ownerID=l._id,this._currentUserID=n,this._likes=s,this._cardSelector=r,this._handleCardClick=o,this._handleDeleteCardClick=i,this._handleLikeClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this.card.querySelector(".card__image").addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)})),this.card.querySelector(".card__like").addEventListener("click",(function(){return t._like()})),this.card.querySelector(".card__delete-button").addEventListener("click",(function(){return t._handleDeleteCardClick(t.card)}))}},{key:"getId",value:function(){return this._cardDataId}},{key:"_isLiked",value:function(){return!0===this.card.classList.contains("card__like_active")}},{key:"getIsLiked",value:function(){return this._isLiked}},{key:"_like",value:function(){this._handleLikeClick(this)}},{key:"updateLikes",value:function(t){var e=this;this._likes=t,this._isLiked=this._likes.some((function(t){return t._id===e._currentUserID})),this._isLiked?(this.card.querySelector(".card__like").classList.add("card__like_active"),this.card.querySelector(".card__likes").textContent=t.length):(this.card.querySelector(".card__like").classList.remove("card__like"),this.card.querySelector(".card__likes").textContent=t.length)}},{key:"remove",value:function(){this.card.remove()}},{key:"renderCard",value:function(){var t=this;this.card=this._getTemplate(),this.card.querySelector(".card__likes").textContent=this._likes.length,this.card.id=this._cardDataId,this.card.querySelector(".card__title").textContent=this._name;var e=this.card.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._isLiked=this._likes.some((function(e){return e.id===t._currentUserID})),this._isLiked&&this.card.querySelector(".card__like").classList.add("card__like_active"),this._ownerID===this._currentUserID&&this.card.querySelector(".card__delete-button").classList.remove("hidden"),this._setEventListeners(),this.card}}])&&i(e.prototype,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.vConfig=e,this.form=n,this.inputs=Array.from(this.form.querySelectorAll(this.vConfig.inputSelector)),this.button=this.form.querySelector(this.vConfig.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setInputListeners",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("input",(function(){t._validateInput(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this.clearInputError(),this.form.addEventListener("submit",this._preventDefault),this._setInputListeners(this.form)}},{key:"_preventDefault",value:function(t){t.preventDefault()}},{key:"clearInputError",value:function(){var t=this;this.inputs.forEach((function(e){e.classList.remove(t.vConfig.inputErrorClass);var n=document.querySelector(".".concat(e.id,"-error"));t._hideErrorSpan(n)}))}},{key:"_showErrorSpan",value:function(t,e){t.textContent=e.validationMessage,t.classList.add(this.vConfig.errorClass)}},{key:"_hideErrorSpan",value:function(t){t.textContent="",t.classList.remove(this.vConfig.errorClass)}},{key:"setButtonEnabled",value:function(){this.button.removeAttribute("disabled"),this.button.classList.remove(this.vConfig.inactiveButtonClass)}},{key:"setButtonDisabled",value:function(){this.button.setAttribute("disabled",!0),this.button.classList.add(this.vConfig.inactiveButtonClass)}},{key:"_hasInvalidInputs",value:function(){return this.inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInputs()?this.setButtonDisabled():this.setButtonEnabled()}},{key:"_validateInput",value:function(t){var e=this.form.querySelector(".".concat(t.id,"-error"));return t.validity.valid?(t.classList.remove(this.vConfig.inputErrorClass),this._hideErrorSpan(e),!0):(t.classList.add(this.vConfig.inputErrorClass),this._showErrorSpan(e,t),!1)}}])&&u(e.prototype,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._profession=document.querySelector(n),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t.id;e&&(this._name.textContent=e),n&&(this._profession.textContent=n),r&&this._avatar.setAttribute("style","background-image: url('".concat(r,"')")),o&&(this.userId=o)}},{key:"getUserId",value:function(){return this.userId}}])&&s(e.prototype,n),t}(),f=document.forms.editPopupForm,p=document.forms.addPopupForm,d=document.forms.editAvatarForm,h=document.querySelector(".profile__overlay"),y=f.elements.name,v=f.elements.profession,m=document.querySelector(".profile__button-add"),b=document.querySelector(".profile__button-edit"),_={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"popup__button-submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",openClass:"popup_opened",PopupImageCaptionSelector:".popup__image-caption",PopupImageSelector:".popup__image"};function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var k=function(){function t(e){var n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(t){"Escape"===t.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add(_.openClass)}},{key:"closePopup",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove(_.openClass)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__button-close"))&&t.closePopup()}))}}])&&g(e.prototype,n),t}();function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=e,n._form=n._popup.querySelector(".form"),n._inputs=function(t){if(Array.isArray(t))return S(t)}(r=n._form.querySelectorAll(".form__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._submitButton=n._form.querySelectorAll(".popup__button-submit"),n._initialText=n._submitButton.textContent,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"formLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._initialText}},{key:"setEventListeners",value:function(){var t=this;O(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t.formLoading(!0),e.preventDefault(),t._submitHandler(t._getInputValues())}))}},{key:"closePopup",value:function(){this.formLoading(!1),this._form.reset(),O(P(a.prototype),"closePopup",this).call(this)}}])&&x(e.prototype,n),a}(k);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function B(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return B(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._title=e._popup.querySelector(_.PopupImageCaptionSelector),e._image=e._popup.querySelector(_.PopupImageSelector),e}return e=a,(n=[{key:"openPopup",value:function(t,e){this._title.textContent=t,this._image.src=e,this._image.alt=t,q(A(a.prototype),"openPopup",this).call(this)}}])&&L(e.prototype,n),a}(k);function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&M(e.prototype,n),t}();function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(r);if(o){var n=Y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return W(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=e,n}return e=a,(n=[{key:"openPopup",value:function(t){U(Y(a.prototype),"openPopup",this).call(this),this._id=t}},{key:"getId",value:function(){return this._id}},{key:"setEventListeners",value:function(){var t=this;U(Y(a.prototype),"setEventListeners",this).call(this),this._form=this._popup.querySelector(".form"),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitHandler()}))}}])&&G(e.prototype,n),a}(k);function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new o({address:"https://nomoreparties.co/v1/",token:"7334389e-9ffb-4678-b7ba-2496fb9a2222",cohortId:"cohort-26"}),$=new l(".profile__title",".profile__profession",".profile__avatar");function z(t){$.setUserInfo({name:t.name,about:t.about,avatar:t.avatar,id:t._id})}function J(t){var e=$.getUserId();return new a(t,e,".cards-grid-template",Z,X,tt).renderCard()}Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];o._id,z(o),function(t){Q.renderItems(t)}(i)})).catch(console.error);var Q=new T({items:[{name:"Paris",link:"https://images.unsplash.com/photo-1471960098958-2059c6681742?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2021&q=80"},{name:"Prague",link:"https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"},{name:"Freedom",link:"https://images.unsplash.com/photo-1495555694070-b0fe5bcd2576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},{name:"Tokyo",link:"https://images.unsplash.com/photo-1527596773609-5f8544271a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{name:"Istanbul",link:"https://images.unsplash.com/photo-1623439844752-524658b16ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"},{name:"Tokyo",link:"https://images.unsplash.com/photo-1616386232536-ed7340327763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"},{name:"Kóspallag",link:"https://images.unsplash.com/photo-1617046085573-d2040c3a1cdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"},{name:"Hong Kong",link:"https://images.unsplash.com/photo-1620175527578-3a01876fd6c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"},{name:"Tenerife",link:"https://images.unsplash.com/photo-1616105345895-f20f485f1874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"}],renderer:function(t){var e=J(t);Q.addItem(e)}},".cards-grid-template");function X(t){it.openPopup(t)}function Z(t,e){et.openPopup(t,e)}function tt(t){K.likeCard(t.getId(),t.getIsLiked()).then((function(e){t.updateLikes(e.likes)})).catch(console.error)}new c(_,f).enableValidation(),new c(_,p).enableValidation(),new c(_,d).enableValidation();var et=new H(".popup-type-image");et.setEventListeners();var nt=new j(".popup-type-edit",(function(t){K.updateUserInfo({name:t.name,about:t.profession}).then((function(t){$.setUserInfo(t),nt.closePopup()})).catch(console.error)}));nt.setEventListeners();var rt=new j(".popup-type-add-card",(function(t){K.addNewCard(t).then((function(t){var e=J(t);Q.addItem(e),rt.closePopup()})).catch(console.error)}));rt.setEventListeners();var ot=new j(".popup-edit-avatar",(function(t){K.updateAvatar({avatar:t.link}).then((function(t){z(t),nt.closePopup()})).catch(console.error)}));ot.setEventListeners();var it=new F(".popup-type-delete",(function(){var t=it.getId();K.deleteCard(t._id).then((function(){t.remove(),it.closePopup()})).catch(console.error)}));it.setEventListeners(),b.addEventListener("click",(function(){nt.openPopup();var t=$.getUserInfo();y.value=t.name,v.value=t.profession})),m.addEventListener("click",(function(){rt.openPopup()})),h.addEventListener("click",(function(){ot.openPopup()}))})();