import React from 'react';

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input type="text" />
            <label htmlFor="userage">User Age (Number)</label>
            <input type="number" />
            <button type="submit">Submit</button>
        </form>
    )

}

export default AddUser;