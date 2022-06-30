import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  // console.log(props.allExpenses);
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveFilterExpenseData = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.allExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let checkExpense = <p>No expenses found.</p>;
  if (filteredExpense.length > 0) {
    checkExpense = filteredExpense.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          setYear={filteredYear}
          onFilterExpenseData={saveFilterExpenseData}
        />
        {checkExpense}
      </Card>
    </div>
  );
}
export default Expenses;
