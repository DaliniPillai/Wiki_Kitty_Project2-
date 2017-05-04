const db = require('../db/config');

const Kitty = {};

Kitty.findAll = () => {
  return db.query('SELECT * FROM kitty ORDER BY id ASC');
};

Kitty.findById = id => {
  return db.oneOrNone('SELECT * FROM kitty WHERE id = $1', [id]);
};

Kitty.create = kitty => {
  return db.one(
    `
      INSERT INTO kitty
      (breed_name, img_url, character_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [kitty.breed_name, kitty.img_url, kitty.character_id]
  );
};

Kitty.update = (kitty, id) => {
  return db.none(
    `
      UPDATE kitty SET
      breed_name = $1,
      img_url = $2,
      character_id = $3
      WHERE id = $4
    `,
    [kitty.breed_name, kitty.img_url, kitty.character_id, id]
  );
};

Kitty.destroy = id => {
  return db.none(
    `
      DELETE FROM kitty
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Kitty;