const Kitty = require('../models/kitty');

const controller = {};

controller.index = (req, res) => {
  Kitty.findAll()
    .then(quotes => {
      res.render('kitty/kitty-index', {
        documentTitle: 'Wiki Kitty',
        kittyData: kitty,
      });
    })
}