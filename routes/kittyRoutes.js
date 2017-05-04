const express = require('express');
const controller = require('../controllers/kittyController');

const kittyRoutes = express.Router();

kittyRoutes.get('/', controller.index);
kittyRoutes.get('/add', (req, res) => {
  res.render('kitty/kitty-add', {
    documentTitle: 'Wiki Kitty',
  });
});
kittyRoutes.get('/edit/:id', controller.edit);
kittyRoutes.get('/:id', controller.show);
kittyRoutes.post('/', controller.create);
kittyRoutes.put('/:id', controller.update);
kittyRoutes.delete('/:id', controller.destroy);

module.exports = kittyRoutes;