import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMUY_EXPENSES = [
  {
    id: 'el1',
    title: 'Toilet Paper',
    amount: 94.21,
    date: new Date(2020, 7, 12)
  },
  {
    id: 'el2',
    title: 'New Tv',
    amount: 794.21,
    date: new Date(2020, 4, 12)
  },
  {
    id: 'el3',
    title: 'Car  Insurance',
    amount: 594.21,
    date: new Date(2020, 6, 27)
  },

  {
    id: 'el4',
    title: 'Laptop Insurance',
    amount: 594.21,
    date: new Date(2020, 11, 27)
  },
  {
    id: 'el5',
    title: 'New Phone',
    amount: 18000,
    date: new Date(2021, 7, 14)
  }
];

const App = () => {

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started!'),
  //   React.createElement(Expenses, { DUMMUY_EXPENSES: expenses })
  // )

  const [expenses, setExpenses] = useState(DUMMUY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('IN the app components')
    // console.log(expense)
    setExpenses((prevExpense) => {
      return ([expense, ...prevExpense])
    })

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses DUMMUY_EXPENSES={expenses} />
    </div>
  )
}

export default App; 