import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/minhafoto.jpeg';
import ImgEmail from './img/email1.jpg';
import ImgEndereco from './img/localizacao.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno.js'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Isabela Rocha" 
          descricao="Oi, eu sou a Isabela. Faço curso de Web Full Stack na Labenu e de direito no Centro Universitário  Metodista Izabela Hendrix (IMIH)."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
        imagem={ImgEmail}
        nome="Email:  "
        descricao="isabela@outlook.com"
        />

       <CardPequeno 
        imagem={ImgEndereco}
        nome="Endereço:  "
        descricao="Contagem, MG, Brasil"
        />
      </div>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Auxiliar Contábil" 
          descricao="Emprego temporário de auxiliar" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Jovem Aprendiz" 
          descricao="Jovem aprendiz, no setor contábil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
