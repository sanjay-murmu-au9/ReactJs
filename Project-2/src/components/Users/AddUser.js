import React, { useState } from 'react';
import Card from '../UI/Card';
import Classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
    const [enteruserName, setEnterUserName] = useState('')
    const [enteruserAge, setEnterUserAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteruserName.trim().length === 0 || enteruserAge.trim().length === 0) {
            return;
        }

        if (+enteruserAge < 1) {
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
    return (
        <Card className={Classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id='username' type="text" value={enteruserName} onChange={userNameChangeHandler} />
                <label htmlFor="age"> Age (Year)</label>
                <input id='age' type="number" value={enteruserAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;