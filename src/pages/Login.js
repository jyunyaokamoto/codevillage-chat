import React, { useState } from 'react'
import firebase from '../config/firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login