import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {

  const [clicked, wasClicked] = useState(false);

  if (clicked === 'signUp') {
    return (
      <div>
        <SignUp />
      </div>
    )
  } else if (clicked === 'signIn') {
    return (
      <div>
        <SignIn />
      </div>
    )
  } else {
    return (
      <div>
        <h2>Welcome to Budget</h2>
        <div>
          <button type="button" onClick={() => {wasClicked('signIn')}}>Sign in</button>
          <button type="button" onClick={() => {wasClicked('signUp')}}>Sign up</button>
        </div>
      </div>
    )
  }

}

export default App;