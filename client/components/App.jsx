import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import styles from '../styles/App.css';

function App() {

  const [clicked, wasClicked] = useState(false);

  if (clicked === 'signUp') {
    return (
      <div className={styles.signup}>
        <div className={styles.head}>
          <h2 className={styles.big}>Budget</h2>
          <div className={styles.buttons}>
            <button className={styles.headbutton} type="button" onClick={() => {wasClicked('signIn')}}>Sign in</button>
            <button className={styles.headbutton} className={styles.bold} type="button" onClick={() => {wasClicked('signUp')}}>Sign up</button>
          </div>
        </div>
        <SignUp />
      </div>
    )
  } else if (clicked === 'signIn') {
    return (
      <div className={styles.signin}>
        <div className={styles.head}>
          <h2 className={styles.big}>Budget</h2>
          <div className={styles.buttons}>
            <button className={styles.headbutton} className={styles.bold} type="button" onClick={() => {wasClicked('signIn')}}>Sign in</button>
            <button className={styles.headbutton} type="button" onClick={() => {wasClicked('signUp')}}>Sign up</button>
          </div>
        </div>
        <SignIn />
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Welcome to Budget</h2>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={() => {wasClicked('signIn')}}>Sign in</button>
          <button type="button" onClick={() => {wasClicked('signUp')}}>Sign up</button>
        </div>
      </div>
    )
  }

}

export default App;