const express = require('express');
const controller = require('../controllers/kittyController');

const kittyRoutes = express.Router();

kittyRoutes.get('/', controller.index);
kittyRoutes.post('/', controller.create);
kittyRoutes.get('/add', (req, res) => {
  res.render('kitty/kitty-add', {
    documentTitle: 'Wiki Kitty',
  });
});
kittyRoutes.get('/:id', controller.show);
kittyRoutes.put('/:id', controller.update);
kittyRoutes.delete('/:id', controller.destroy);



kittyRoutes.get('/edit/:id', controller.edit);

module.exports = kittyRoutes;