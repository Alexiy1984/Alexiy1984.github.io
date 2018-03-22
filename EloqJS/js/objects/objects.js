function addClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}


let rabbit = {};
rabbit.speak = function(text) {
  return ("Кролик говорит '" + text + "'");
}

function speak(text) {
  return ("А <b>" + this.type + "</b> кролик говорит '" + text + "'");
}

let whiteRabbit = {type: "белый", speak: speak};
let fatRabbit = {type: "толстый", speak: speak};

let protoRabbit = { //Прототип
  speak: function(text) {
    return ("А <b>" + this.type + "</b> кролик говорит '" +  text + "'");
  }
}

function Rabbit(type) { //Конструктор
  this.type = type;
}

Rabbit.prototype.speak = function(text) {
  return ("А <b>" + this.type + "</b> кролик говорит '" +   text + "'");
};

Rabbit.prototype.teeth = "мелкие";


let blackRabbit = new Rabbit("чёрный");
let monsterRabbit = new Rabbit("монстр");
monsterRabbit.teeth = "длинные, острые и окровавленные";

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";

function ElemID(id) {
  return document.getElementById(id);
}

window.onload = function () {
  let rabbitImgButton = ElemID('JS-rabbit-button');
  let rabbitText = ElemID('JS-rabbit-text');
  let hiddenText = ElemID('JS-hidden-rabbit');

  rabbitImgButton.onclick = function () {
    hiddenText.innerHTML = rabbit.speak(rabbitText.value) + "<br>"
    + whiteRabbit.speak("Ушки мои и усики, я же наверняка опаздываю!") + "<br>"
    + fatRabbit.speak("Мне бы сейчас морковочки.") + "<br>"
    + speak.apply(fatRabbit, ["Отрыжка!"]) + "<br>"
    + speak.call({type: "старый"}, "О, господи.")+ "<br>"
    + killerRabbit.speak("ХРЯЯЯСЬ!") + "<br>"
    + "Новый объект созданный конструктором: <b>" + blackRabbit.type + " кролик</b><br>"
    + blackRabbit.speak("Всем капец...");
    removeClass(hiddenText, 'hidden');
  }
}
