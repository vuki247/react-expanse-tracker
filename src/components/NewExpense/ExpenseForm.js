import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /* Using one state instead - wright way (when depending on previous state)
  
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    eneteredDate: "",
  });

  const titleChangeHandler = (event) => {
      // Wrong
    // setUserInput({ 
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // Wright way
    setUserInput((prevState)=>{
        return {
            ...userInput,
       enteredTitle: event.target.value,
        }
    });
  };

  const amountChangeHandler = (event) => {
      // Wrong
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // Wright
    setUserInput((prevState)=>{
        return {
            ...userInput,
       enteredAmount: event.target.value,
        }
    });
  };

  const dateChangeHandler = (event) => {
      // Wrong
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // Wright
    setUserInput((prevState)=>{
        return {
            ...userInput,
       enteredDate: event.target.value,
        }
    });
  };

  */

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-17"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
