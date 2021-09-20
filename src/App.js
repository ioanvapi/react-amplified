import React from 'react'
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react'
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import Amplify, { API } from 'aws-amplify';


function App() {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("No message yet !!!");

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setUser(authData)
    });
  }, [])

  const handleClick = async () => {
    const resp = await getData()
    setMessage(resp)
    console.log('REsponse:', resp)
  }

  const getData = async () => {
    const apiName = 'todos';
    const path = '/items'; 
    return await API.get(apiName, path)
  }

  return (
    <div className="App">   
    { user ? <AmplifyGreetings username={user.username}></AmplifyGreetings> : <></> }   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from React Amplified - Backend Changed!!!
        </p>
        <button name='Ceva' onClick={() => handleClick()}>Submit</button>
        <p>{message}</p>
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
