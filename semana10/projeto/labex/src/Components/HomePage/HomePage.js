import React from 'react';
import { useHistory } from 'react-router-dom'

function HomePage () {
    const history = useHistory()

    const goToSignUp = () => {
        history.push('/application-form')
    }

    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    return (
        <div>
            <h1>Labex</h1>
            <button onClick={goToSignUp}>Inscreva-se</button>
            <button onClick={goToListTrips}>Viagens</button>
            <button onClick={goToLogin}>Área do administrador</button>
        </div>
    )
}

export default HomePage