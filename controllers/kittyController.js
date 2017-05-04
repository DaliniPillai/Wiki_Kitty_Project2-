const Kitty = require('../models/kitty');

const controller = {};

controller.index = (req, res) => {
  Kitty.findAll()
    .then(kitty => {
      res.render('kitty/kitty-index', {
        documentTitle: 'Wiki Kitty',
        kittyData: kitty,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.show = (req, res) => {
  Kitty.findById(req.params.id)
  .then(kitty => {
    res.render('kitty/kitty-single', {
      documentTitle: 'Wiki Kitty',
      kitty: kitty,
    });
  })
   .catch(err => {
      res.status(400).json(err);
    });
};

controller.create = (req, res) => {
  Kitty.create({
    breed_name: req.body.breed_name,
    img_url: req.body.img_url,
    character_id: req.body.character_id,
  })
  .then(kitty => {
    res.redirect('/kitty');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.edit = (req,res) => {
  Kitty.findById(req.params.id)
  .then(kitty => {
    console.log(kitty);
    res.render('kitty/kitty-edit', {
      documentTitle: 'Wiki Kitty',
      kitty: kitty,
      id: req.params.id,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.update = (req, res) => {
  Kitty.update({
    breed_name: req.body.breed_name,
    img_url: req.body.img_url,
    character_id: req.body.character_id,
  }, req.params.id)
  .then(kitty => {
    res.redirect('/kitty');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.destroy = (req, res) => {
  Kitty.destrooy(req.params.id)
  .then(() =>{
    res.redirect('/kitty');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = controller;

