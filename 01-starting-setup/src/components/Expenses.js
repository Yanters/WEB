import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenseList = props.expenses.map((item) => (
    <ExpenseItem expenses={item} />
  ));

  return <div className="expenses">{expenseList}</div>;
}

export default Expenses;
