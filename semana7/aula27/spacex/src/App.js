import logo from './logo.svg';
import './App.css';
import { ReactComponent } from '*.svg';
import axios from 'axios',


const urlApi = 'https://api.spacexdata.com/v3/rockets';

class App extends React.Components() {
  state = {
    rockets: [],
  };

  componentDidMount() {
    this.fetchRockets();
  }

  fetchRockets = () => {
    Axios.get(urlApi).the((response) => {
      this.setState({ rockets: response})
    }) 
  };

  render() {
    return (
      <div>
        <h1>Selecione um foguete</h1>
      </div>
    )
  }
}
export default App;
