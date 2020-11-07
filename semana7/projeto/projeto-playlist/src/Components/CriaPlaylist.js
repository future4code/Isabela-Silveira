import React from 'react';
import axios from 'axios'



class CriaPlaylist extends React.Component {
    state = {
      valorPlaylist: '',
    }
  
    criarPlaylist = () => {

        const body = {
            name: this.state.valorPlaylist
        };

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
        headers: {
          Authorization: 'isabela-rocha-dumont'
          }
        }).then(res => {
            this.setState({valorPlaylist: ''})
        }).catch((erro) => {
            console.log(erro.message)
        })
      }

        onChangeValorPlaylist = (event) => {
            this.setState({valorPlaylist: event.target.value})      
    }
  
        render() {
      
      return (
        <div>
          <div>
              <input placeholder='Insira o nome da playlist' value={this.state.valorPlaylist} onChange={this.onChangeValorPlaylist} />
              <button onClick={this.criarPlaylist}>Criar Playlist</button>
          </div>
        </div>
      )
    }
  }
  
  export default CriaPlaylist 