import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MonthlyBudget( { newIncome, setNewIncome }) {
  const initState = {
    user_id: " ",
    income_input1: " ",
    income_input2: " ",
    total_income: " ",
  };
  const history = useNavigate();
  const [formDataIncome, setFormDataIncome] = useState(initState);

  const handleChange = (event) => {
    setFormDataIncome({
      ...formDataIncome,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/incomes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataIncome),
    })
      .then((r) => r.json())
      .then((data) => {
        setNewIncome((list) => [...list, data]);
        history.push("createbudgetform");
      });
    // after page is submited, the following callback will reset the form to initial state.
    setFormDataIncome(initState);
  };

  return (
    <div id="home">
    <nav className="nav">
      <Link to="/"><h3>Home</h3></Link> 
      <Link to="login"><h3>Login</h3></Link>
      <Link to="signin"><h3>Signin</h3></Link>
      <Link to="createbudgetform">Monthly Budget Planner</Link>
    </nav>
    <h1 className="header-h1">Monthly Budget Organizer</h1>
 
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user_id">User ID:</label>
        
        <input type="text" name="id" value={formDataIncome.user_id} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="income_input2">Income 1: </label>
        <input type="text" name="income_1" placeholder="income 1" value={formDataIncome.income_input1} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="income_input2">Income 2: </label>
        <input name="income_input2" placeholder="income 1" value={formDataIncome.income_input2} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="total_income">Total Income: </label>
        <input name="total_income" value={formDataIncome.total_income} onChange={handleChange} />
      </div>
      
      
      <button type="submit" onSubmit={handleSubmit}>
         Submit
      </button>
    </form>
    
  </div>
  );
}

export default MonthlyBudget;
