import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{props.expenses.title}</h2>
          <div className="expense-item__price">${props.expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
