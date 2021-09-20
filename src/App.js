import React from 'react'
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react'
import { onAuthUIStateChange } from "@aws-amplify/ui-components";


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setUser(authData)
    });
  }, [])

  return (
    <div className="App">   
    { user ? <AmplifyGreetings username={user.username}></AmplifyGreetings> : <></> }   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from React Amplified - Backend Changed!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
