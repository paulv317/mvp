import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/AddMoney.css';


function AddMoney(props) {
  const [money, setMoney] = useState('');

  const addMoney = () => {
    axios.put('/budget/addmoney/' + props.userName, [money])
      .then(() => {
        props.return();
      })
  }


  return (
    <div className={styles.container}>
      <input className={styles.input} onChange={e => {setMoney(e.target.value)}}type="text" placeholder="How much would you like to add?"></input>
      <button className={styles.add} onClick={addMoney}>Add</button>
      <button className={styles.return} onClick={() => { props.return() }}>return</button>
    </div>
  )
}

export default AddMoney;