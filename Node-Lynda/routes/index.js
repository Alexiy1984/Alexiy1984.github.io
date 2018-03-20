exports.index = function (req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Ray','Max','James','Rolf']
  });
}

exports.about = function (req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
}
