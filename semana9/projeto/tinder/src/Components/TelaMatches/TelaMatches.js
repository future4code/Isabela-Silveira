import React, { useEffect, useState } from 'react';
import Axios from 'axios'


const TelaMatches = () => {

    const [matche, setMatche] = useState([])

    const getMatches = () => {
        Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isabela/matches').then(response => {
            setMatche(response.data.matches)
        }).catch(error => {
            alert(`Erro: ${error.message}`)
        })
    }

    useEffect (() => {
        getMatches()
    }, [matche])

    const newArray = matche.map((matches) => {
        return (
            <div>
                <img src={matches.photo}/>
                <p>{matches.name}</p>
            </div>

        )
    })

    return (
        <div>
            {newArray}
        </div>
    )

}

export default TelaMatches