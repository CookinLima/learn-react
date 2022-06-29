import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./FilterExpenses";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2020");
  const getFilteredYearHandler = (filteredYear) => {
    setChosenYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilteredYear={getFilteredYearHandler}
        setDate={chosenYear}
      />
      {props.allExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};
export default Expenses;
