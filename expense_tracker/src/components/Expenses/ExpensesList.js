import React from 'react';

import ExpenseItem from './ExpenseItem'
import  './ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <p className='expenses-list__fallback' >No result found...</p>
    }

    if (props.items.length > 0) {
        return props.items.map(expense =>
            <ul className='expenses-list'>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            </ul>
        );
    }

}

export default ExpensesList;