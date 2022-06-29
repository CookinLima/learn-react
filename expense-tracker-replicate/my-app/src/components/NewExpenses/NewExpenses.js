import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const newExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: "ObjectIgris" + Math.random().toString(),
    };
    props.getNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getNewExpense={newExpenseHandler} />
    </div>
  );
};
export default NewExpenses;
