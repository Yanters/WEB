import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(23);
  const expenseTitle = "Car insurance";
  var expenseAmount = (Math.random() * 500).toFixed(2);
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
