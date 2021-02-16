import React, { useState } from 'react';
import axios from 'axios';
import Budget from './Budget';

function MakeBudget(props) {

  const [income, setIncome] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [userInfo, setInfo] = useState('');

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
      <div>
        <h3>Hello, {props.name}</h3>
        <div>
          <span>What is your monthly income?</span>
          <input type="text" onChange={(e) => {setIncome(e.target.value)}}></input>
          <button type="submit" onClick={handleClick}>set income</button>
        </div>
      </div>
    )
  } else {
    return (
      <Budget moneyLeft={userInfo.money} moneySpent={userInfo.spent} user={userInfo.user_name}/>
    )
  }
}

export default MakeBudget;