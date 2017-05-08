const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'kitty_development',
    port: 5432,
    host: '127.0.0.1'
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp({
    database: 'kitty_production',
    port: 5432,
    host: '127.0.0.1'
  });
}
module.exports = db;