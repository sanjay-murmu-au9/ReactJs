import React, { useState } from 'react';
import Card from '../UI/Card';
import Classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModal';
const AddUser = props => {
    const [enteruserName, setEnterUserName] = useState('')
    const [enteruserAge, setEnterUserAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteruserName.trim().length === 0 || enteruserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (Non Empty values).'
            })
            return;
        }

        if (+enteruserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (>0).'
            })
            return;
        }

        console.log(enteruserName, enteruserAge)
        props.onAddUser(enteruserName, enteruserAge)
        setEnterUserName('')
        setEnterUserAge('')
    }

    const userNameChangeHandler = event => {
        setEnterUserName(event.target.value);

    }

    const ageChangeHandler = event => {
        setEnterUserAge(event.target.value)

    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={Classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id='username' type="text" value={enteruserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age"> Age (Year)</label>
                    <input id='age' type="number" value={enteruserAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )

}

export default AddUser;