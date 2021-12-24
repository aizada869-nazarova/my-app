import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import uniqid from "uniqid"

const NewExpense = () => {
    // how to pass data from child to parent, communicate from bottom-up 
    // creating a function which recieve a param enteredExpenseData from ExpenseForm.js
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: uniqid()
        }
console.log(expenseData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};
export default NewExpense;
