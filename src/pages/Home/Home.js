import React from "react";
import "./Home.css";
// import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (

    <div>
      <div id="home">
        <nav className="nav">
          <Link to="/"><h3>Home</h3></Link> 
          <Link to="login"><h3>Login</h3></Link>
          <Link to="signin"><h3>Signin</h3></Link>
          <Link to="createbudgetform">Create New Budget Form</Link>
          <Link to="createnewbudgetform">Create New Budget Form</Link>
          
        </nav>
        <h1 className="header-h1">Monthly Budget Organizer</h1>
      </div>
      <footer>
        <Link to="login">
          <button><h5>Login</h5></button>
        </Link>

        <Link to="signin"><button>SignIn</button></Link>
      </footer>
    </div>
  );
}

export default Home;
