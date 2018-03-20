var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
/*app.set('views', __dirname + '/views');*/

app.get('/', routes.index);
app.get('/about', routes.about);

app.locals.pagetitle = "Потрясающий Веб-сайт";

app.get('*', function (req, res) {
  res.send('<p>Неверный маршрут<p>');
});

var server = app.listen(3000, function () {
  console.log('Прослушивается порт 3000');
});
