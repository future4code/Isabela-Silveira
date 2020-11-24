import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { DivContainer } from './styled'

function LoginPage () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            history.push('/after/login')
        } else {
            history.push('/')
        }

    }, [history])

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isabela-dumont/login', body ).then((res) => {
            localStorage.setItem('token', res.data.token)
            history.push('/after/login')
        }).catch((err) => {
            alert('Erro: ', err.message)
        })
    }

    return (
        <DivContainer>
            
            <p>Email:</p>
            <input type={'email'} value={email} onChange={handleEmail}/>

            <p>Senha:</p>
            <input type={'password'} value={password} onChange={handlePassword}/>

            <button onClick={login}>Entrar</button>

        </DivContainer>
    )
}

export default LoginPage