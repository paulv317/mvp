import React, { useState } from 'react';
import axios from 'axios';
import MakeBudget from './MakeBudget.jsx';

function SignUp(props) {
  const [name, insertName] = useState('');
  const [userName, insertUserName] = useState('');
  const [email, insertEmail] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    axios.post('/budget', [name, userName, email])
      .then(() => {
        setClicked(true);
      })
  }

  if (!clicked) {
    return (
      <div>
        <input type="text" onChange={e => insertName(e.target.value)}></input>
        <input type="text" onChange={e => insertUserName(e.target.value)}></input>
        <input type="text" onChange={e => insertEmail(e.target.value)}></input>
        <button onClick={handleClick}>sign up</button>
      </div>
    )
  } else {
    return (
      <div>
        <MakeBudget name={name} moneySpent={0} userName={userName}/>
      </div>
    )
  }

}

export default SignUp;
