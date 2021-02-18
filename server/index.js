const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: '/Users/paulvanleuven/Documents/Code/MVP/hrr50-mvp/server/db/.env' });
const db = require('./db/index');
const query = require('./db/queries');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use(express.static(__dirname + '/../public'));


//allow users to sign-in
app.get('/budget/:userName', query.getUser);

//allow users to sign up
app.post('/budget/', query.createUser);

// //allow users to initialize income
app.post('/budget/create/', query.createBudget);

//allow users to add money to their account
app.put('/budget/addmoney/:userName', query.addMoney);

// allow users to add a purchase
app.post('/budget/purchase/', query.createPurchase);

// allow users to see all purchases
app.get('/budget/spending/:userName', query.seePurchases);


app.listen(process.env.PORT, () => {
  console.log(`Budget tracker is listening on port ${process.env.PORT}`);
})