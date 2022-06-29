import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [changedTitle, setChangedTitle] = useState(props.title);
  const changeTitleHandler = (event) => {
    console.log("Changed!!");
    setChangedTitle("Changed!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{changedTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={changeTitleHandler}>Change Title</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
