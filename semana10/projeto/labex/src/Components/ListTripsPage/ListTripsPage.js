import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { LisTripContainer } from './styled'

function ListTripsPage () {
    const [trip, setTrip] = useState([])

    useEffect(() => {
        getTrip()
    }, [])

    const getTrip = () => {
        Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isabela-dumont/trips').then((res) => {
            setTrip(res.data.trips)
        }).catch((err) => {
            alert('Erro: ', err.message)
        })
    }
    
    const renderListTrip = trip.map((trips) => {
        return (

        <LisTripContainer>
            
            <p>{trips.name}</p>
            <p>{trips.description}</p>
            <p>{trips.planet}</p>
            <p>{trips.durationInDays}</p>
            <p>{trips.date}</p>
            <button>Quero Ir</button>

        </LisTripContainer>

        )
        
    })

    return (
        <div>
        
            <div>
                {renderListTrip}
            </div>
            
        </div>
    )
}

export default ListTripsPage