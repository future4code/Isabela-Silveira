import Axios from 'axios'
import React, { useState } from 'react'

function CreateTripPage () {
    // const [name, setName] = useState('')
    // const [planet, setPlanet] = useState('')
    // const [description, setDescripition] = useState('')
    // const [durationDays, setDurationDays] = useState()
    // const [date, setDate] = useState('')

    // const createTrip = () => {
    //     const body = {
    //         name: name,
    //         planet: planet,
    //         date: date,
    //         description: description,
    //         durationInDays: durationDays,
            
    //     }
    //     Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isabela-dumont/trips', body ).then((res) => {
    //         set
    //     }).catch((err) => {
    //         alert('Erro: ', err.message)
    //     })
    
    // }


    return (
        <div>

            <div>
                <h3>Crie uma viagem</h3>
            </div>

            <div>
                <p>Nome:</p>
                <input />
            </div>

            <div>
                <p>Planeta:</p>
                <input />
            </div>

            <div>
                <p>Data:</p>
                <input />
            </div>

            <div>
                <p>Descrição:</p>
                <input />
            </div>

            <div>
                <p>Duração da viagem:</p>
                <input />
            </div>

        </div>
    )
}

export default CreateTripPage