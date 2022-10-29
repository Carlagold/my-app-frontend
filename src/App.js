// import logo from './logo.svg';
import "./App.css";
import { render } from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import LogIn from "./pages/LogIn/LogIn";
import MontlyBudget from "./pages/MontlyBugget/MonthlyBudget";
import React from "react";
import { useState } from "react";
import DeleteMonthlyBudget from "./pages/MontlyBugget/DeleteMonthlyBudget"
function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [newIncome, setNewIncome] = useState(null)
  const [deleteIncome, onDeleteIncome] = useState(null);
  return (

    <div className="App">
    
      <Routes>
      
          <Route  path="/" element={ <Home />} />
          <Route path="login" element={ <LogIn setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
          <Route  path="signin" element={ <SignIn />} />
          <Route path="createbudgetform" element={ <MontlyBudget setNewIncome={setNewIncome} newIncome={newIncome} />} />
          <Route path="deletebudgetform" element={<DeleteMonthlyBudget nDeleteIncome={onDeleteIncome} deleteIncome={deleteIncome}/>}  />
      </Routes>
    </div>
    
  )
}

export default App;
// username: 'thegamer', password: '&YXQg2qRj'