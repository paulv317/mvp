import React, { useState } from 'react';
import axios from 'axios';
import Budget from './Budget';
import styles from '../styles/MakeBudget.css';

function MakeBudget(props) {

  const [income, setIncome] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [userInfo, setInfo] = useState('');
  const [userName, setUser] = useState(props.userName);

  const handleClick = () => {
    axios.post('/budget/create', [income, props.userName])
      .then(() => {
        return axios.get('/budget/' + props.userName)
      })
      .then((info) => {
        setInfo(info.data);
        setClicked(true);
      })
  }

  if (!clicked) {
    return (
      <div className={styles.budgetcontainer}>
        <h3 className={styles.intro}>Hello, {props.userName}</h3>
        <div className={styles.minicontainer}>
          <input className={styles.income} placeholder="monthly income" type="text" onChange={(e) => {setIncome(e.target.value)}}></input>
          <button type="submit" onClick={handleClick}>set income</button>
          <button className={styles.return} onClick={() => { props.return() }}>return</button>
        </div>
      </div>
    )
  } else {
    return (
      <Budget moneyLeft={userInfo.money} spent={userInfo.spent} user={userInfo.user_name}/>
    )
  }
}

export default MakeBudget;