// // module.exports = function() {
// //   CREATE DATABASE IF NOT EXISTS budget;

// //   USE budget;

//   CREATE TABLE IF NOT EXISTS users(
//     user_id SERIAL PRIMARY KEY,
//     name VARCHAR(30),
//     user_name VARCHAR(30) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL
//   );

//   CREATE TABLE IF NOT EXISTS budget(
//   budget_id SERIAL PRIMARY KEY,
//   money NUMERIC,
//   spent NUMERIC,
//   user_name VARCHAR(30),
//   FOREIGN KEY (user_name)
//     REFERENCES users ( user_name )
//   );

//   CREATE TABLE IF NOT EXISTS purchase(
//     purchase_id SERIAL PRIMARY KEY,
//     type VARCHAR(20) NOT NULL,
//     cost NUMERIC,
//     date DATE NOT NULL DEFAULT CURRENT_DATE,
//     user_name VARCHAR(30),
//     FOREIGN KEY(user_name)
//       REFERENCES users(user_name)
//   );
// }