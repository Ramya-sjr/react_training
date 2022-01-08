import React, { useState } from 'react';

import ErrorModal from '../UI/ErrorModal';

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid input non-empty."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter non-zero age."
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('');
        setEnteredAge('');
    }

    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
        setEnteredUserName('');
        setEnteredAge('');
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.containar}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Add User</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age"> Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );

};

export default AddUser;