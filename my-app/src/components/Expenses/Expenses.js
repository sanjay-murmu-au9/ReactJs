import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.DUMMUY_EXPENSES.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                <ExpenseList items={filteredExpenses} />

            </Card>
        </div>
    )

}

export default Expenses;