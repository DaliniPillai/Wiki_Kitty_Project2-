const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'kitty_development',
    port: 5432,
    host: 'localhost'
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;