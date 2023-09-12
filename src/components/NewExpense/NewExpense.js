import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const onSave = (expenseData) => {
console.log({...expenseData, id : Math.random().toString()});
}

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSave}/>
    </div>
  );
};

export default NewExpense;
