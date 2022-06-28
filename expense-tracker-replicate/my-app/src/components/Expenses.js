import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.allExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            id={expense.id}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};
export default Expenses;
