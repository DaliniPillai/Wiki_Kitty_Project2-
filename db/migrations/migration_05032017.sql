\connect kitty_development
CREATE TABLE IF NOT EXISTS characteristic (
  id BIGSERIAL PRIMARY KEY,
  character_type VARCHAR(255)
);



CREATE TABLE IF NOT EXISTS breed (
  id BIGSERIAL PRIMARY KEY,
  breed_name VARCHAR(255),
  img_url VARCHAR(255),
  character_id INTEGER REFERENCES characteristic(id)
);

