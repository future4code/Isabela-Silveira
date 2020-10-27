import React from 'react';


export const DadosGerais = () => {
    return <div className='dados-gerais'>
    
            <h2>Etapa1 - Dados gerais</h2>
            <p>1. Qual é o seu nome?</p>
            <input />
            <p>2. Qual a sua idade?</p>
            <input />
            <p>3. Qual o seu email?</p>
            <input />
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
            {/* <input type='text' id='nome'/> */}
        
    </div>
}
