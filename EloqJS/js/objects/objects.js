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

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

var rows = [];
for (var i = 0; i < 5; i++) {
   var row = [];
   for (var j = 0; j < 5; j++) {
     if ((j + i) % 2 == 0)
       row.push(new TextCell("##"));
     else
       row.push(new TextCell("  "));
   }
   rows.push(row);
}
console.log(drawTable(rows));

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

function UnderlinedCell(inner) {
  this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

var pile = {
  elements: ["скорлупа", "кожура", "червяк"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Игнорируем попытку задать высоту", value);
  }
};

console.log("Pile height: " + pile.height);

pile.height = 33;

Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function() { return this.text.length; }
});

var cell = new TextCell("да\nну");
console.log(cell.heightProp);

cell.heightProp = 100;
console.log(cell.heightProp);

function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};




