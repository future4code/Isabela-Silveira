import React from 'react'
import { useHistory } from 'react-router-dom'

function AfterLoginPage () {
    const history = useHistory()

    const goToCreateTrip = () => {
        history.push('/trips/create')
    }

    const goToListTrip = () => {
        history.push('/trips/list')
    }

    const comeBackHome = () => {
        history.push('/')
    } 

    return (
        <div>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button onClick={goToListTrip}>Ver todas as Viagens</button>
            <button onClick={comeBackHome}>Voltar para página Inicial</button>
            
        </div>
    )
}

export default AfterLoginPage