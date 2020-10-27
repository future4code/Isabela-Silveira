import React from 'react';
import styled from 'styled-components'

const Teste = styled.div`
    border: 2px solid black;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
       
`
class Cadastro extends React.Component {
    render () {
        return (
            <Teste>
                <label>Nome:</label>
                <input type='text' value=''></input><br></br>
                <label>Email:</label>
                <input type='text' value=''></input><br></br>
                <button>Salvar</button>
                
            </Teste>
        ) 
    }
}

export default Cadastro