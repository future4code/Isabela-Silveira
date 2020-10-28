import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BotaoApagar = styled.span`
    color: red;
    margin-left: 10px;
`
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const axiosConfig = {
    headers: {
        Authorization: 'isabela-rocha-dumont'
    }
}
// as duas const são  para armazenar a url e a authorization para fazer a requisição do API. 
 
class ListaCadastro extends React.Component {
    state = {
        listaUsuario: []
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => { //lista todos os usuários

        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({listaUsuario: response.data})
        }).catch(error => {
            console.log(error.message)
        })
    }

    deleteUser = (userId) => { 
        

        axios.delete(`${baseUrl}/${userId}`, axiosConfig).then(response => {
            this.getAllUsers()
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        const renderNomeUsuario = this.state.listaUsuario.map((usuario) => {
            return (
            <p key={usuario.id}> {usuario.name} <BotaoApagar onClick={() => {if(window.confirm('Tem certeza de que deseja deletar?')) this.deleteUser(usuario.id)}}>X</BotaoApagar></p>
            )// window.confirm é o alert que aparece quando vai deletar perguntando se realmente quer deletar e o this.deleteUser(usuario.id) que faz com que delete quando clica em ok.
        })
        
        const renderNomeEmail = this.state.listaUsuario.map((usuarioCompleto) => {
            return (
                <p key={usuarioCompleto.id}>{usuarioCompleto.name}, {usuarioCompleto.email}</p>
            )
        })

      return (
        <div>
          {renderNomeUsuario} {renderNomeEmail}
        </div>
      )
    }
  }
  
  export default ListaCadastro
