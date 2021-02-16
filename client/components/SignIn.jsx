import React, { useState } from 'react';
import axios from 'axios';
import Budget from './Budget';

function SignIn(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [clicked, setClicked] = useState(false);
  const [userInfo, setInfo] = useState('');

  const handleClick = () => {
    axios.get('/budget/' + userName)
      .then((info) => {
        console.log(info);
        setInfo(info.data);
        console.log(userInfo);
        setClicked(true);
      })
  }

  if (!clicked) {
    return (
      <div>
        <input type="text" onChange={e => setUserName(e.target.value)}></input>
        <input type="text" onChange={e => setEmail(e.target.value)}></input>
        <button type="button" onClick={handleClick}>sign in</button>
      </div>
    )
  } else {
    return (
      <Budget moneyLeft={userInfo.money} moneySpent={userInfo.spent}/>
    )
  }

}

export default SignIn;