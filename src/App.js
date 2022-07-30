import React from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

function App(){

    let expenses = [
        {
            id:'e1',
            title:'School Fee',
            price: 300,
            date: new Date(2022,6,21)

        },

        {
            id:'e2',
            title:'Car Insurance',
            price: 400,
            date: new Date(2022,5,25)

        },

        {
            id:'e3',
            title:'Shoping',
            price: 500,
            date: new Date(2022,7,27)

        },
    ]

    let funexpense = (appexpense)=>{

    }


    
    return (
        <div>

             <h1>Lets start React.... Enjoy your journey broo</h1>
            <NewExpense expensefun={funexpense}/>
           <Expenses item={expenses}/>
        </div>
       
    );
}

export default App;

