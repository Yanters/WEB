import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, getSelectedYear] = useState("2021");

  const expenseList = props.expenses.map((item) => (
    <ExpenseItem expenses={item} key={item.id.toString()} />
  ));

  const getSelectedYearHandler = (year) => {
    getSelectedYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          getSelectedYear={getSelectedYearHandler}
        />
        {expenseList}
      </Card>
    </div>
  );
};

export default Expenses;
