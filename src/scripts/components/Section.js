export class Section {
  constructor ( { data,renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._initialArray = data
    this._renderer = renderer
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    })
  }

  setItem (element) {
    this._container.append(element);
  }
}
