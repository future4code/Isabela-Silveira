// import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CriaPlaylist from './Components/CriaPlaylist';
import ListaPlaylist from './Components/ListaPlaylist'


class App extends React.Component {
  state = {
    formPlaylist: true
  }

  mudaPagina = () => {
    this.setState({formPlaylist: !this.state.formPlaylist})
  }

  render() {
    const paginaAtual = this.state.formPlaylist ? (<CriaPlaylist />) : (<ListaPlaylist />)

    return (
      <div>
        {paginaAtual}
        <button onClick={this.mudaPagina}>Minhas playlists</button>
      </div>
    )
  }
}

export default App
