import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart'


const Expenses = (props) => {

  const[selectedYear, setSelectedYear] = useState('2021');

  const showSelectedYear = (year) => {
      setSelectedYear(year);
  }

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={selectedYear} selectedYear={showSelectedYear} />  
      <ExpenseChart expenses={filteredExpenses}/>    
      <ExpensesList items={filteredExpenses} />      
    </Card>
    
  );
}

export default Expenses;
