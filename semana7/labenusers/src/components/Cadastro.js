import React from 'react';
import styled from 'styled-components';
import axios from 'axios'


class Cadastro extends React.Component {
  state = {
    valorNome: '',
    valorEmail: ''
  }

  createUser = () => { //cria usuário
   const body = {
     name: this.state.valorNome,
     email: this.state.valorEmail
   }

   axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
     headers: {
       Authorization: 'isabela-rocha-dumont'
     }
   }).then(response => {
     alert('Usuário criado com sucesso!!')
     this.setState({valorNome: '', valorEmail: ''})
   }).catch(error => {
     console.log(error.message)
   })
  }

  // a função acima é do post (createUser) do postman para criar usuário

  onChangeValorNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeValorEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  }
  
  // as funções acima é do onChange dos inputs, para fazer isso tem que pegar o objeto do state. Isso é input controlado.

  render() {
    return (
      <div>
        <p>Nome:</p>
        <input 
        value={this.state.valorNome} onChange={this.onChangeValorNome}
        />
        <p>Email:</p>
        <input 
        value={this.state.valorEmail} onChange={this.onChangeValorEmail}
        />
        <button onClick={this.createUser}>Salvar</button>
      </div>
    )
  }
}

export default Cadastro

