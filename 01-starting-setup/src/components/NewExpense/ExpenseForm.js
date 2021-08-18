import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setEnteredTitle] = useState("");
  //   const [amount, setEnteredAmount] = useState("");
  //   const [date, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData({ ...userInput, date: new Date(userInput.date) });
    setUserInput({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
