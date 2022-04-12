import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

export default function Expenses({ expenses }) {
  const expenseItems = expenses.map((data) => {
    const { id, title, amount, date } = data;
    return <ExpenseItem key={id} title={title} amount={amount} date={date} />;
  });
  return <div className="expenses">{expenseItems}</div>;
}
