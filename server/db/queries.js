const pool = require('./index.js');

const getUser = (req, res) => {
  let user = req.params.userName;
  pool.query('SELECT * FROM BUDGET WHERE user_name = ' + "'" + user + "'" + ';', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.rows[0]);
    }
  });
}

const createUser = (req, res) => {
  let newUser = req.body;
  pool.query('INSERT INTO users (name, user_name, email) values ($1, $2, $3)', newUser, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
}

const createBudget = (req, res) => {
  let income = parseInt(req.body[0]);
  let newBudget = [income, 0, req.body[1]];
  pool.query('INSERT INTO budget (money, spent, user_name) values ($1, $2, $3)', newBudget, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
}



module.exports = {
  getUser,
  createUser,
  createBudget
}
