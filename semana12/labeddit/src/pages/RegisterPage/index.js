import React from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { goToFeed } from '../../router/coordinator';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import {TextField, Button} from '@material-ui/core';
import { RegisterPageContainer, FormContainer, ContainerFather, LogoContainer, H1 } from './styled';

const RegisterPage = () => {
    const { form, onChange } = useForm({ username: '', email: '', password: '', })

    const history = useHistory()

    const onChangeInput = (event) => {
        const { value, name } = event.target

        // esse onChange está vindo da função da pasta hooks - useForm
        onChange(value, name)
    }

    const submissionFormRegister = (event) => {

        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password,
            username: form.username,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body ).then(res => {
            localStorage.setItem('token', res.data.token)
            goToFeed(history)

        }).catch(error => {
            alert('Erro:', error.message)
        })
        console.log(form)
    }

    

    return (
        <ContainerFather>
            
            <RegisterPageContainer>

                <LogoContainer>

                    <img src={Logo}/>

                    <H1>Cadastro</H1>

                    <p>Faça o cadastro para ter acesso a todas publicações!</p>
                </LogoContainer>

                <FormContainer onSubmit={submissionFormRegister}>

                    <TextField 
                        label='Nome de usuário'
                        name='username'
                        value={form.username}
                        onChange={onChangeInput}
                    />

                    <TextField 
                        label='E-mail'
                        name='email'
                        type="email"
                        value={form.email}
                        onChange={onChangeInput}
                    />

                    <TextField 
                        label='Senha'
                        name='password'
                        type="password"
                        value={form.password}
                        onChange={onChangeInput}
                    />

                    <Button variant="contained"
                        color="primary"
                        type="submit">Cadastrar</Button>

                </FormContainer>

            </RegisterPageContainer>
           
        </ContainerFather>
    )
}

export default RegisterPage