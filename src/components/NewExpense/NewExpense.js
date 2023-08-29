import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveExpenseDateHandler=(enteredExpenseDate)=>{
        const expenseData = {
            ...enteredExpenseDate,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
              <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}></ExpenseForm>  
        </div>
    )
}

export default NewExpense;