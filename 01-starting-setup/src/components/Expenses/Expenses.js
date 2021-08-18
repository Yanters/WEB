import React, { useState } from "react";

import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, getSelectedYear] = useState("2021");

  // Old rendering
  // const expenseList = props.expenses.map((item) => (
  //   <ExpenseItem expenses={item} key={item.id.toString()} />
  // ));

  // Parsing 'year' to Int to not have a warning in console.
  const specyfivList = props.expenses.filter((item) => {
    return item.date.getFullYear() === parseInt(year);
  });

  const getSelectedYearHandler = (year) => {
    getSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          getSelectedYear={getSelectedYearHandler}
        />
        <ExpensesChart expenses={specyfivList} />
        <ExpensesList expenses={specyfivList} />
      </Card>
    </div>
  );
};

export default Expenses;
