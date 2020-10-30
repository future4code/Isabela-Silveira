import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'


class App extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.obterPlaylist()
  }

  obterPlaylist = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'isabela-rocha-dumont'
        }
      }).then(res => {
          console.log(res.data)
      }).catch(erro => {
        console.log(erro.message)
      })
    }

  render() {
      const playlistRenderizada = this.state.playlists.map(playlist => {
        return <p key={playlist.id}>{playlist.name}</p>
      })

    return (
      <div>
        {playlistRenderizada}
      </div>
    )
  }
}

export default App
