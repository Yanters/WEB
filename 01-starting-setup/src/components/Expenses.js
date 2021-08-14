import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const expenseList = props.expenses.map((item) => (
    <ExpenseItem expenses={item} />
  ));

  return <Card className="expenses">{expenseList}</Card>;
}

export default Expenses;
