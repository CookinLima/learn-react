import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 5, 27);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 296.23;

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
