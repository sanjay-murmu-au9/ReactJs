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

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem
                title={props.DUMMUY_EXPENSES[0].title}
                amount={props.DUMMUY_EXPENSES[0].amount}
                date={props.DUMMUY_EXPENSES[0].date}

            />
            <ExpenseItem
                title={props.DUMMUY_EXPENSES[1].title}
                amount={props.DUMMUY_EXPENSES[1].amount}
                date={props.DUMMUY_EXPENSES[1].date}

            />
            <ExpenseItem
                title={props.DUMMUY_EXPENSES[2].title}
                amount={props.DUMMUY_EXPENSES[2].amount}
                date={props.DUMMUY_EXPENSES[2].date}

            />
            <ExpenseItem
                title={props.DUMMUY_EXPENSES[3].title}
                amount={props.DUMMUY_EXPENSES[3].amount}
                date={props.DUMMUY_EXPENSES[3].date}
            />
        </Card>
    )

}

export default Expenses;