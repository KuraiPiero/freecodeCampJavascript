class Cup {
  constructor(name, color, volume, features, imgSrc) {
    this.name = name;
    this.color = color;
    this.volume = volume;
    this.features = features;
    this.img = imgSrc;
  }
  createImage() {
    const createElement = new Image(150, 200);
    createElement.src = this.img;
    document.body.appendChild(createElement);
  }
}

export default Cup;
