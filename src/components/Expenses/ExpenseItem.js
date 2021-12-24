import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
   
    <div className="expense-item">
      <div className="expence-item__description">
       <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expence-item__description h2">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price ">{props.amount}</div>
      </div>
  
  );
}

export default ExpenseItem;
