import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem =(props)=> {
  // const deleteExpense = () => {
  //   const cardElement = document.querySelector('.expense-item');
  //   cardElement.remove();
  // }
  const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={deleteExpense}> Delete Expense </button> */}
      <button onClick={()=>{setTitle("Updated!")}}> Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
