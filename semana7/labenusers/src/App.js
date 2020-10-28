import logo from './logo.svg';
import Cadastro from './components/Cadastro';
import Registro from './components/Registro';
import styled from 'styled-components';
import axios from 'axios'

const EstiloApp = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`

function App() {
  return (
    <EstiloApp>
      <Registro />
      <Cadastro />
    </EstiloApp>
  );
}

export default App;

