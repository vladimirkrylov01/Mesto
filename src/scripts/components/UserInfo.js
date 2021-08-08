export class UserInfo {
  constructor(nameSelector, professionSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector)
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo () {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo ({name, about, avatar, _id}) {
    if (name) { this._name.textContent = name }
    if (about) { this._profession.textContent = about }
    // if (avatar) { this._avatar.setAttribute('style', `background-image: url('${avatar}')`)  }
    if (avatar) { this._avatar.src = avatar }
    if (_id) { this.userId = _id }
  }

  getUserId() {
    return this.userId
  }
} 