import logo from './logo.svg';
import React from 'react';
import Cadastro from './components/Cadastro';
import ListaCadastro from './components/ListaCadastro';
import ListaCompleta from './components/ListaCompleta';
import styled from 'styled-components';
import axios from 'axios'

const EstiloApp = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`

class App extends React.Component {
  state = {
    cadastro: true
  }

  changePage = () => {
    this.setState({cadastro: !this.state.cadastro})
  }

  render () {
    const paginaAtual = this.state.cadastro ? (<Cadastro />) : (<ListaCadastro />)


    return (
      <div className='App'>
        {paginaAtual}
        <button onClick={this.changePage}>ir para página da lista de cadastro</button>
        
      </div>
    );
  }
  }

  export default App


