import React, { useState } from 'react';
import axios from 'axios';

function MakeBudget(props) {

  const [income, setIncome] = useState(0);

  const handleClick = () => {
    axios.post('/budget/create', [income, props.userName])
      .then((results) => {
        console.log('created budget results: ' + results);
      })
  }

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
}

export default MakeBudget;