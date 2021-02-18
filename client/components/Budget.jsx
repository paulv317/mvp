import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Purchase from './Purchase';
import MakeBudget from './MakeBudget';
import AddMoney from './AddMoney';
import styles from '../styles/Budget.css';

function Budget(props) {

  const [purchase, addPurchase] = useState('');
  const [type, addType] = useState('');
  const [clicked, setClicked] = useState(false);
  const [money, setMoney] = useState(props.moneyLeft);
  const [spent, setSpent] = useState(props.spent);
  const [allPurchases, setPurchases] = useState('');
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    axios.get('/budget/' + props.user)
      .then((data) => {
        setMoney(data.data.money);
        setSpent(data.data.spent);
        setUser(data.data.user_name);
      })
  })

  const handlePurchase = () => {
    setClicked('purchase');
  }

  const returnClick = () => {
    setClicked(false);
  }

  const addMoney = () => {
    setClicked('addMoney');
  }

  const setIncome = () => {
    setClicked('income');
  }

  const seeSpending = () => {
    axios.get('/budget/spending/' + props.user)
      .then((purchases) => {
        setPurchases(purchases.data);
        setClicked('spending');
      })
  }

  const setPurchase = () => {
    axios.post('/budget/purchase/', [purchase, type, props.user, money])
      .then((data) => {
        console.log(data);
        let newBudget = parseInt(money) - parseInt(purchase);
        let newSpent = parseInt(spent) + parseInt(purchase);
        setMoney(newBudget);
        setSpent(newSpent);
        setClicked(false);
      })
  }


  if (!clicked) {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.head}>Hello, {props.user}</div>
          <div className={styles.headtwo}>You have ${money} left in your budget this month.</div>
          <div className={styles.headtwo}>You have spent ${spent} this month.</div>
        </div>
        <div className={styles.right}>
          <button onClick={setIncome}>Set income</button>
          <button onClick={addMoney}>Add money</button>
          <button onClick={seeSpending}>See your spending</button>
          <button onClick={handlePurchase}>Add a purchase</button>
        </div>
      </div>
    )
  } else if (clicked === 'purchase'){
    return (
      <div className={styles.purchasecontainer}>
        <input className={styles.purchase} type="text" placeholder="How much did you spend?"onChange={e => {addPurchase(e.target.value)}}></input>
        <button className={styles.purchasebutton} type="submit" onClick={setPurchase}>add purchase</button>
        <button className={styles.return} onClick={returnClick}>return</button>
      </div>
    )
  } else if (clicked === 'spending') {
      return <Purchase purchases={allPurchases} return={returnClick}/>
  } else if (clicked === 'income') {
    return <MakeBudget return={returnClick} userName={user}/>
  } else {
    return <AddMoney return={returnClick} userName={user}/>
  }
}

export default Budget;