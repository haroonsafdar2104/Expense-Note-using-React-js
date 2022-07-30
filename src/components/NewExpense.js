import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

let NewExpense = (props) =>{

  let savadata = (enteredexpensedata) =>{
    console.log(enteredexpensedata);
  }

  props.expensefun(savadata);

    return(
        <div className="new-expense">
          <ExpenseForm ondata={savadata}/>
        </div>
    );

}

export default NewExpense;

