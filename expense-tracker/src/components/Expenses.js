import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  // console.log(props.allExpenses);
  return (
    <div className="expenses">
      {props.allExpenses.map(({ title, amount, date }) => {
        return <ExpenseItem title={title} amount={amount} date={date} />;
      })}
      {/* <ExpenseItem
        title={props.allExpenses[0].title}
        amount={props.allExpenses[0].amount}
        date={props.allExpenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[1].title}
        amount={props.allExpenses[1].amount}
        date={props.allExpenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[2].title}
        amount={props.allExpenses[2].amount}
        date={props.allExpenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[3].title}
        amount={props.allExpenses[3].amount}
        date={props.allExpenses[3].date}
      ></ExpenseItem> */}
    </div>
  );
}
export default Expenses;
