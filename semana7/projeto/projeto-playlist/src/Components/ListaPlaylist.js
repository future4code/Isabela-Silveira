import React from 'react';
import axios from 'axios'

class ListaPlaylist extends React.Component {
    render() {
        return (
            <div>
                <h1>serei uma lista</h1>
                <h2>terei um botão</h2>
            </div>
        )
    }
}

export default ListaPlaylist 


// state = {
//     playlists: [],
//     valorPlaylist: ''
//   }

//   componentDidMount = () => {
//     this.obterPlaylist()
//   }

//   obterPlaylist = () => {
//     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
//       headers: {
//         Authorization: 'isabela-rocha-dumont'
//         }
//       }).then(res => {
//           console.log(res.data)
//       }).catch(erro => {
//         console.log(erro.message)
//       })
//     }

//   criarPlaylist = () => {

//   }

//   onChangeValorPlaylist = (event) => {
//       this.steState({valorPlaylist: event.target.value})
//   }

//   render() {
//       const playlistRenderizada = this.state.playlists.map(playlist => {
//         return <p key={playlist.id}>{playlist.name}</p>
//       })

//     return (
//       <div>
//         {playlistRenderizada}
//         <div>
//             <input placeholder='Insira o nome da playlist' value={this.state.valorPlaylist} onchange={this.onChangeValorPlaylist}/>
//             <button>Criar Playlist</button>
//         </div>
//       </div>
//     )
//   }
// }