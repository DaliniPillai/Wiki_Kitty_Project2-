const db = require('../db/config');

const Kitty = {};

Kitty.findAll = () => {
  return db.query(
    `SELECT breed.id, breed_name, img_url, character_type 
    FROM breed
    INNER JOIN characteristic 
    ON breed.characteristic_id = characteristic.id`
  );
};

Kitty.findById = id => {
  return db.oneOrNone('SELECT * FROM breed WHERE id = $1', [id]);
};

Kitty.create = kitty => {
  console.log(kitty);
  return db.one(
    `
      INSERT INTO breed
      (breed_name, img_url, characteristic_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [kitty.breed_name, kitty.img_url, kitty.characteristic_id]
  );
};

Kitty.update = (kitty, id) => {
  return db.none(
    `
      UPDATE breed SET
      breed_name = $1,
      img_url = $2,
      characteristic_id = $3
      WHERE id = $4
    `,
    [kitty.breed_name, kitty.img_url, kitty.characteristic_id, id]
  );
};

Kitty.destroy = id => {
  return db.none(
    `
      DELETE FROM breed
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Kitty;