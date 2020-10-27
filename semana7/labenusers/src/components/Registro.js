import React from 'react';
import styled from 'styled-components'

const EstiloBotao = styled.button`
    background-color: grey;

`
class Registro extends React.Component {
    render() {
        return (
            <EstiloBotao>Ir para a página de lista</EstiloBotao>
        )
    }
}

export default Registro