import React, { useState } from 'react';
import axios from 'axios';
import Budget from './Budget';

function SignIn(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [clicked, setClicked] = useState(false);
  const [userInfo, setInfo] = useState('');


  // click functionality. Allows users to sign in by entering info and clicking 'sign in' button.
    // sets clicked to true and renders budget info
  const handleClick = () => {
    axios.get('/budget/' + userName)
      .then((info) => {
        setInfo(info.data);
        setClicked(true);
      })
  }

  // before clicked, users sign in (no authorization functionality)
  if (!clicked) {
    return (
      <div>
        <input type="text" onChange={e => setUserName(e.target.value)}></input>
        <input type="text" onChange={e => setEmail(e.target.value)}></input>
        <button type="button" onClick={handleClick}>sign in</button>
      </div>
    )
    // after clicked, users see budget info
  } else {
    return (
      <Budget moneyLeft={userInfo.money} moneySpent={userInfo.spent} user={userInfo.user_name}/>
    )
  }

}

export default SignIn;