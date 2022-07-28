import React, { useContext } from 'react'
import { data } from './Data'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const nav = useNavigate()

    const u = useContext(data)
    
    const changePage = () => {
      nav('/')
    }

    const addUser = (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let number = document.getElementById('number').value
        u.setLoginUser([name, email , password, number])
        changePage()
    }

  return (
    <div id="login">
      <div id='text'>
        <h1>Fakebook</h1>
        <h3>Fakebook help you connect and share with the people in your life</h3>
      </div>
      <div id='content'>
        <form id='l-form' onSubmit={addUser}>
            <input id='name' type='text' placeholder='Your Name' required></input>
            <input id='email' type='email' placeholder='Email address(optional)'></input>
            <input id='number' type='number' placeholder='Phone number' required></input>
            <input id='password' type='password' placeholder='Password' required></input>
            <button type='submit'>Register</button>
        </form>
        <p><button id='changePage' onClick={changePage}>Already a user ? Login</button></p>
      </div>
    </div>
  )
}

export default Registration