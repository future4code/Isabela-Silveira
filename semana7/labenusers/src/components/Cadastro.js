import React from 'react';
import styled from 'styled-components'
import axios from 'axio'

const Teste = styled.div`
    border: 2px solid black;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
       
`
class Cadastro extends React.Component {
  state = {
    name: '',
    email: '',
  }

  handleChange = event => {
    this.setState({name: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', user {
        headers: {
        Authorization: 'isabela-rocha-dumont'
        }
      }).thenthen((resposta) => {
          console.log(resposta.data);
        }).catch((error) => {
          console.log(error.message);
      });
      }
      };
  }


    render () {
        return (
            <Teste>
                <label>Nome:</label>
                <input type='text' onChange={this.handleChange} /><br></br>
                <label>Email:</label>
                <input type='text' /><br></br>
                <button type='submit'>Salvar</button>
                
            </Teste>
        ) 
    }
}

export default Cadastro

