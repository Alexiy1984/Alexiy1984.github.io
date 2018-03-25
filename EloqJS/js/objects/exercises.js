window.onload = function () {
  let vector1CoordX = ElemID('JS-vectorX');
  let vector2CoordX = ElemID('JS-SvectorX');
  let vector1CoordY = ElemID('JS-vectorY');
  let vector2CoordY = ElemID('JS-SvectorY');
  let vectorOutput = ElemID('JS-vector-output');
  let button = ElemID('JS-button');

  class Vector {
    constructor(coordX,coordY) {
      this.coordX = coordX;
      this.coordY = coordY;
    }
    get length() {
      return Math.sqrt(this.coordX * this.coordX + this.coordY * this.coordY);
    }
    plus(secondV) {
      return new Vector(parseInt(this.coordX) + parseInt(secondV.coordX), parseInt(this.coordY) + parseInt(secondV.coordY));
    }
    minus(secondV) {
      return new Vector(this.coordX - secondV.coordX, this.coordY - secondV.coordY);
    }
  }

  button.onclick = function () {
    let Vector1 = new Vector(vector1CoordX.value,vector1CoordY.value);
    let Vector2 = new Vector(vector2CoordX.value,vector2CoordY.value);

    vectorOutput.innerHTML = 'Вектор 1: x: ' + Vector1.coordX + ' y: ' + Vector1.coordY + "<br>"
    +'Вектор 2: x: ' + Vector2.coordX + ' y: ' + Vector2.coordY+ "<br>"
    +'Длинна  вектора 1: ' + Vector1.length + "<br>"
    +'Длинна  вектора 2: ' + Vector2.length + "<br>"
    + 'Сложение векторов - x: ' + Vector1.plus(Vector2).coordX + ' y: ' + Vector1.plus(Vector2).coordY + " длинна вектора: "+ Vector1.plus(Vector2).length + "<br>"
    + 'Вычитание векторов - x: ' + Vector1.minus(Vector2).coordX + ' y: ' + Vector1.minus(Vector2).coordY + " длинна вектора: "+ Vector1.minus(Vector2).length;
  }
}
