import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
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
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started!'),
  //   React.createElement(Expenses, { DUMMUY_EXPENSES: expenses })
  // )

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses DUMMUY_EXPENSES={expenses} />
    </div>
  )
}

export default App; 