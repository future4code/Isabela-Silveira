import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { goToFeed, goToRegister } from '../../router/coordinator';
import {TextField, Button} from '@material-ui/core';
import { LoginPageContainer, FormContainer } from './styled';

const LoginPage = () => {
    const { form, onChange } = useForm({ email: '', password:'' })

    const history = useHistory()

    const onChangeInput = (event) => {
        // desestruturação do event
        const { value, name } = event.target

        // esse onChange está vindo da função da pasta hooks - useForm
        onChange(value, name)
    }

    const submissionFormLogin = (event) => {
        // para não carregar a página
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body ).then(res => {
            localStorage.setItem('token', res.data.token)
            goToFeed(history)
            console.log(res)
        }).catch(error => {
            alert('Email ou senha inválidos, tente novamente!')
            console.log(error.message)
        })
    }

    return (
        <LoginPageContainer>

            <FormContainer onSubmit={submissionFormLogin}>

                <TextField
                label='E-mail'
                type='email' 
                name='email'
                value={form.email}
                onChange={onChangeInput}
                />

                <TextField
                label='Senha'
                type='password'
                name='password'
                value={form.password}
                onChange={onChangeInput}
                />

                <Button color='primary' type='submit' variant='contained'>Entrar</Button>
                
            </FormContainer>

            <Button onClick={() => goToRegister(history)} color='primary'>Ainda não tem cadastro? Faça aqui!</Button>

        </LoginPageContainer>
    )
}

export default LoginPage
