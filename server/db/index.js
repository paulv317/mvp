const dotenv = require('dotenv').config({ path: '/Users/paulvanleuven/Documents/Code/MVP/hrr50-mvp/server/db/.env' });
const { Pool } = require('pg');

const pool = new Pool({
  user: 'doug',
  host: 'localhost',
  database: 'budget',
  password: 'shiloh',
  port: 5432,
})

pool.connect(() => {
  console.log('we are connected!');
})

module.exports = pool;