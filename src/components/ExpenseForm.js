import React,{useState} from "react";
import './ExpenseForm.css';

let ExpenseForm = (props) =>{

    let [entertitle, setentertitle]=useState('');
    let [enteramount, setenteramount]=useState('');
    let [enterdate, setenterdate]=useState('');

let titlechange = (event) =>{
    setentertitle(event.target.value);

}

let amountchange = (event) =>{
    setenteramount(event.target.value);

}

let datechange = (event) =>{
    setenterdate(event.target.value);

}

let submithand= (event)=>{
    event.preventdefault();

    let expensedata={
        title : entertitle,
        amount : enteramount,
        date : new Date(enterdate)
    }

    props.ondata(expensedata);
    console.log(expensedata);

    setentertitle('');
    setenteramount('');
    setenterdate('');

}

    return(
       <form onSubmit={submithand}>
           <div className="new-expense__controls">
              <div className="new-expense__control">
                 <label>Title</label>
                 <input type="text"value={entertitle} onChange={titlechange}/>

              </div>

              <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number"value={enteramount} onChange={amountchange}/>

              </div>


              <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date"value={enterdate} onChange={datechange}/>

              </div>


           </div>

           <div className="new-expense__actions">
                  <button type="submit">Add Expense</button>

              </div>
       </form>
    );
}

export default ExpenseForm;