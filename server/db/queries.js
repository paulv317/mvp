const pool = require('./index.js');

const getUser = (req, res) => {
  debugger;
  let user = req.params.userName;
  pool.query('SELECT * FROM BUDGET WHERE user_name = ' + user + ';') ;
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
  let newBudget = req.body;
  pool.query('INSERT INTO budget (money, spent) value ($1, 0)', newBudget, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  }
}



module.exports = {
  getUser,
  createUser
}
