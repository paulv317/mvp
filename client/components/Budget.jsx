import React, { useState } from 'react';
import axios from 'axios';

function Budget(props) {

  const [purchase, addPurchase] = useState('');
  const [type, addType] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  }

  const setPurchase = () => {
    axios.post('/budget/purchase/', [purchase, type, props.user])
  }


  if (!clicked) {
    return (
      <div>
        <div>Hello, {props.user}</div>
        <div>You have {props.moneyLeft} left in your budget this month.</div>
        <div>
          <button onClick={handleClick}>Add a purchase</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <input type="text" placeholder="How much did you spend?"onChange={e => {addPurchase(e.target.value)}}></input>
        <select onChange={e => {addType(e.target.value)}}>
          <option value="need">need</option>
          <option value="want">want</option>
        </select>
        <button type="submit" onClick={setPurchase}>Add purchase</button>
      </div>
    )
  }
}

export default Budget;