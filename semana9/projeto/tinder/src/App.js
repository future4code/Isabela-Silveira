import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TelaInicial from './Components/TelaInicial/TelaInicial';
import TelaMatches from './Components/TelaMatches/TelaMatches'

function App() {

  const [telaInicial, setTelaInicial] = useState(true)

  const onClickSwitchPage = () => {
    setTelaInicial(!setTelaInicial)
  }

  const currentPage = telaInicial ? <TelaInicial /> : <TelaMatches />

  return (

    <div className="App">
      {currentPage}
      <button onClick={onClickSwitchPage}>Matches</button>
      <button>Resetar</button>
    </div>

  );
}

export default App;
