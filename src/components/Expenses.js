import React from "react";

import './Expenses.css';

import Expense from './Expense';

function Expenses(props){
    return(
        <div className='expenses'>
             <Expense
                 date = {props.item[0].date}
                 title = {props.item[0].title}
                 price  = {props.item[0].price}/>
             

             <Expense
                 date = {props.item[1].date}
                 title = {props.item[1].title}
                 price  = {props.item[1].price}/>
            

             <Expense
                 date = {props.item[2].date}
                 title = {props.item[2].title}
                 price  = {props.item[2].price}/>
             
        </div>

    );
}

export default Expenses;