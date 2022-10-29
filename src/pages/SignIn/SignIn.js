import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {

  const [user, setUsers] = useState([])

  const emptyFormCreateUser = { 
    first_name: '', 
    last_name: '', 
    username: '', 
    password: '' 
  }

  return (
     <form>
      <nav>
        <Link to="/"><h3>Home</h3></Link> |{" "}
        <Link to="login"><h3>Login</h3></Link>
        <Link to="signin"><h3>SignIn</h3></Link>
        
        </nav>
    <h1>User LogIn</h1>
    
    <h3>Enter your Account information</h3>
    <div>
      <input type="text" name="username" placeholder=" Username " />
      <label htmlFor="username">Username</label>
      
        <br/>
        <br />
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>
  )
}

export default SignIn
