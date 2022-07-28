import React, { useContext } from 'react'
import { data } from './Data'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const nav = useNavigate()

    const u = useContext(data)
    
    const changePage = () => {
      nav('/register')
    }

    const login_handle = (e) => {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let password = document.getElementById('password').value
      if(u.login_user[1]===name && u.login_user[2]===password) nav('/home')
      else if(u.login_user[3]===name && u.login_user[2]===password) nav('/home')
      else alert('Bad Credentials')
    }

  return (
    <div id="login">
      <div id='text'>
        <h1>Fakebook</h1>
        <h3>Fakebook help you connect and share with the people in your life</h3>
      </div>
      <div id='content'>
        <form id='l-form' onSubmit={login_handle}>
          <input id='name' type='text' placeholder='Email address or phone number'></input>
          <input id='password' type='password' placeholder='Password'></input>
          <button type='submit'>Log In</button>
        </form>
        <p><button id='changePage' onClick={changePage}>Not a user ? Register</button></p>
      </div>
    </div>
  )
}

export default Login