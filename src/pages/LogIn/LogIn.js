import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function LogIn({ setCurrentUser }) {
  const emptyFormCreateUser = { 
    username: '', 
    password: '' 
  }

  const [user, setUser] = useState(emptyFormCreateUser)
  
  const handleChange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value
    }) 
  }

const handleSubmit = (e) => {
  e.preventDefault()

  const config = { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user) }

  console.log('running our fetch')
  
  fetch("http://localhost:9292/login", config)
  .then(r => r.json())
  .then(user => setCurrentUser(user))
  console.log(setCurrentUser(user))
}
  return (
  
      <div> 
          <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="login">Login</Link>
        <Link to="signin">SignIn</Link>
        <Link to="createbudgetform">Monthly Budget Planner</Link>
        </nav>
      <form onSubmit={handleSubmit}>
        <h1>User LogIn</h1>
        
        <h3>Enter your Login information</h3>
          <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
          
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
          
          <input type="submit" value="login" />
          
          </div>
        </form>
      </div>
    )
  }
  
  export default LogIn;