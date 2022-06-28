import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
    </Card>
  );
};
export default Expenses;
