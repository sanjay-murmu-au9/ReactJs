import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {
    // console.log(props, "<<<<<<<<<<<<<<,")
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.DUMMUY_EXPENSES.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />


            {/* {filteredExpenses.length === 0 && <p> No expense found!</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) =>
                (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
                )} */}

            {/* //or */}

            {expensesContent}

        </Card>
    )

}

export default Expenses;