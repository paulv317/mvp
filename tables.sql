CREATE DATABASE IF NOT EXISTS budget;

USE budget;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL,
  name VARCHAR(30),
  user_name VARCHAR(30),
  email VARCHAR(40),
  PRIMARY KEY(user_id)
);

CREATE TABLE IF NOT EXISTS budget (
  budget_id SERIAL,
  money NUMERIC,
  spent NUMERIC,
  PRIMARY KEY(budget_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user)
      REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS purchase (
  purchase_id SERIAL,
  type VARCHAR(20),
  cost NUMERIC,
  date TIMESTAMPTZ,
  PRIMARY KEY(purchase_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user)
      REFERENCES users(user_id)
);

