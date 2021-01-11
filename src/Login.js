import React, {useContext, useState} from 'react'
import { appContext } from './appContext';
import {Form, Button} from './Style'

export const Login = props => {
    const {setUser} = useContext(appContext)
    const [error, setError] = useState(``);
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const submithandler = e => {
        e.preventDefault()
        console.log(username, password)
    }

    const changeUsername = e => {
        const newUsername = e.target.value
        setUsername(newUsername)
    }

    const changePassword = e => {
        const newPassword = e.target.value
        setPassword(newPassword)
    }

    const createUser = e => {
        console.log(username, password)
        postUser(username, password)
    }

    const postUser = (username, password) => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: `POST`,
            headers: {
                "Content-Type": `application/json`,
                Accept: `application/json`
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                setError(r.error)
            } else {
                setUser(r.user)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    return(
            <Form onSubmit={submithandler}>
                <label>Username:</label>
                <input onChange={changeUsername} value={username}></input>
                {/* <br/> */}
                <label>Password:</label>
                <input type="password" onChange={changePassword} value={password}></input>
                {/* <br/> */}
                <Button primary type="submit">Login</Button>
                <Button primary onClick={createUser}>Create</Button>
                {/* <p>{error}</p> */}
            </Form>
    )
}