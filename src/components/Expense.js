import React,{useState} from "react";

import './Expense.css';
import ExpenseDate from './ExpenseDate';
//import { useState } from 'react';
function Expense(props){

///let[title , settitle] = useState(props.title);

//let[newtitle , changesettitle] = useState();

//let handle = () =>{
//   settitle(newtitle);
//}


//let chhandle = (event) =>{
//    changesettitle(event.target.value)

//}

    return(
        <div className='expense-item'>
            <div>
              <ExpenseDate date={props.date}/>
           </div>

           <div className='expense-item__description'>
              <h2>{props.title}</h2> 
           </div>

           <div className='expense-item__price'>
               {props.price}
           </div>

          

        </div>
    );

}

export default Expense;