import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenseList = props.expenses.map((item) => (
    <ExpenseItem expenses={item} key={item.id.toString()} />
  ));

  return <Card className="expenses">{expenseList}</Card>;
};

export default Expenses;
