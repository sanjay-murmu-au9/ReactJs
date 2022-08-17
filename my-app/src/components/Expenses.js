import ExpenseItem from "./ExpenseItem";
// import './Expenses.css';


function Expenses(props) {
    // console.log(props, "<<<<<<<<<<<<<<,")

    return (
        <div className="expenses">
            <h2>hello world</h2>
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
        </div>
    )

}

export default Expenses;