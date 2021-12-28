import { savedExpenses } from "../../data/ExpenseItemData";
import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import NewExpense from "../NewExpense/NewExpense"


function Expenses() {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const[expenses, setExpenses] = useState(savedExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses]
    });
  };


  return (
    <>
     <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onSelectedYear={filterChangeHandler} />
      <div className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </div>
    </>
  );
}

export default Expenses;
