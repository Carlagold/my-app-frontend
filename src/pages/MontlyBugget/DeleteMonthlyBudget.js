import React from 'react'
import { Link } from 'react-router-dom'



function DeleteMonthlyBudget({ deleteIncome, onDeleteIncome }) {

    function handleDeleteClick() {
      fetch("http://localhost:9292/incomes", {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deleteIncome) => onDeleteIncome(deleteIncome));
      } 

    return (
      <div>
      {/* <nav className="nav">
        <Link to="/"><h3>Home</h3></Link> 
        <Link to="login"><h3>Login</h3></Link>
        <Link to="signin"><h3>Signin</h3></Link>
        <Link to="createbudgetform">Create Budget Form</Link>
        <Link to="deletebudgetform">delete Budgetform Budget Form</Link>
      </nav> */}
      
      <h1 className="header-h1">Monthly Budget Organizer</h1>
            <p>{deleteIncome.user_id}</p> 
            <p>{deleteIncome.income_input1}</p>
            <p>{deleteIncome.income_input2}</p> 
            <p>{deleteIncome.total_income}</p> 
            
            <button onClick={handleDeleteClick}>Delete Review</button>
      </div>
    );
}
export default DeleteMonthlyBudget;
