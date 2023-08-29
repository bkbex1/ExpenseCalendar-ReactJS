import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){
    const [filteredYear, setFilteredYear]= useState('2020')

    const filterChangeHendler = selectedYear=>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHendler}></ExpensesFilter>

            <ExpensesChart expenses={filteredExpenses}/>
            
            {filteredExpenses.length === 0 ? <p>No expenses found.</p> :
             (filteredExpenses.map(expenseElem=> <ExpenseItem key={expenseElem.id} expense={expenseElem}/>))}

        </Card>
    )
}

export default Expenses;