const pool = require('./index.js');

const getUser = (req, res) => {
  debugger;
  let user = req.params.userName;
  pool.query('SELECT * FROM BUDGET WHERE user_name = ' + user + ';') ;
}

const createUser = (req, res) => {
  let newUser = [req.body.name, req.body.user_name, req.body.email];
  debugger;
  pool.query('INSERT INTO users (name, user_name, email) values ($1, $2, $3)', newUser, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(null, data);
    }
  })
}



module.exports = {
  getUser,
  createUser
}
