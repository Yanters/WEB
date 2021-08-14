import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  //   const expenseList = props.expenses.map((item) => (
  //     <ExpenseItem expenses={item} />
  //   ));

  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
    </div>
  );
}

export default Expenses;
