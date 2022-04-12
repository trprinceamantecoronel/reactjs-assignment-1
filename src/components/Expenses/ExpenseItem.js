import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">P{amount}</div>
      </div>
    </div>
  );
}
