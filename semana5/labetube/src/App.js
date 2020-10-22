import React from 'react';
import logo from './img/logo.svg';
import iconeInicio from './img/icnpginicial.png';
import iconeAlta from './img/icnalta.png';
import iconeInscricao from './img/icninsc.png';
import iconeOriginal from './img/icnoriginal.png';
import iconeHistorico from './img/icnhistorico.png';
import './App.css';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><img src={iconeInicio} alt= "" /> Início</li>
                    <li className="botoes-meunu-vertical"><img src={iconeAlta} alt= "" /> Em alta</li>
                    <li className="botoes-meunu-vertical"><img src={iconeInscricao} alt= "" /> Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical"><img src={iconeOriginal} alt= "" /> Originais</li>
                    <li className="botoes-meunu-vertical"><img src={iconeHistorico} alt= "" /> Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
