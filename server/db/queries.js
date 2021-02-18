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

const createPurchase = (req, res) => {
  let amount = parseInt(req.body[0]);
  let newBudget = parseInt(req.body[3]) - amount;
  let newPurchase = [amount, req.body[1], req.body[2]];
  pool.query('INSERT INTO purchase (cost, type, user_name) values ($1, $2, $3)', newPurchase, (err, data) => {
    if (err) {
      console.log(err);
    }
  })
  pool.query('UPDATE budget SET money = ' + "'" + newBudget + "'" + ', spent = spent+' + amount + ' WHERE user_name = ' + "'" + req.body[2] + "' returning *;", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
}

const seePurchases = (req, res) => {
  let user = req.params.userName;
  pool.query('SELECT * FROM purchase where user_name = ' + "'" + user + "' order by date desc;", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.rows);
    }
  })
}

const addMoney = (req, res) => {
  let user = req.params.userName;
  let increase = parseInt(req.body[0]);
  pool.query('UPDATE budget SET money = money+ ' + increase + ' where user_name = ' + "'" + user + "' returning *;", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
}



module.exports = {
  getUser,
  createUser,
  createBudget,
  createPurchase,
  seePurchases,
  addMoney
}
