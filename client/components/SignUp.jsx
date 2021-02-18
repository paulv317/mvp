import React, { useState } from 'react';
import axios from 'axios';
import MakeBudget from './MakeBudget.jsx';
import styles from '../styles/SignUp.css';

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
      <div className={styles.container}>
        <input type="text" placeholder="name" onChange={e => insertName(e.target.value)}></input>
        <input type="text" placeholder="user name" onChange={e => insertUserName(e.target.value)}></input>
        <input type="text" placeholder="email" onChange={e => insertEmail(e.target.value)}></input>
        <button onClick={handleClick}>sign up</button>
      </div>
    )
  } else {
    return <MakeBudget name={name} moneySpent={0} userName={userName}/>
  }

}

export default SignUp;
