import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){
    const [enteredTitle, setEnterdTitle] = useState('')
    const [enteredAmount, setEnterdAmount] = useState('')
    const [enteredDate, setEnterdDate] = useState('')


    const titleChangeHendler= (event)=>{
        setEnterdTitle(event.target.value)
    }
    const amountChangeHendler= (event)=>{
        setEnterdAmount(event.target.value)
    }
    const dateChangeHendler= (event)=>{
        setEnterdDate(event.target.value)
    }

    const submitHandler= (event)=>{
        event.preventDefault();

        const expenseData = {
           title: enteredTitle,
           amount: +enteredAmount,
           date: new Date(enteredDate) 
        }

        props.onSaveExpenseData(expenseData)

        setEnterdTitle('')
        setEnterdDate('')
        setEnterdAmount('')

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHendler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHendler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHendler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>

        </form>  
    )
}

export default ExpenseForm;