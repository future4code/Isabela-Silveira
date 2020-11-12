import Axios from 'axios';
import React, { useState, useEffect } from 'react';



const TelaInicial = () => {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isabela/person').then(response => {
            setProfile(response.data.profile)
        }).catch(error => {
            alert(`Erro: ${error.message}`)
        })
    }

    const choosePerson = () => {
        const body = {
            id: profile.id;
            choice: true
        }

        Axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isabela/choose-person', body).then(response => {
            console.log(response.data)
        }).catch(error => {
            alert(`Erro: ${error.message}`)
        })
    } 

    onClickLike = ()

    return (

        <div>

            <div> 
                <h2>astromatch</h2>
                <button>Olhar os matches</button>
            </div>

            
            <div>
                <img src={profile.photo} />
                <h2>{profile.name}</h2>
                <h3>{profile.age}</h3>
            </div>

            <div>
                <p>{profile.bio}</p>
            </div>
            
            <div>
                <button>X</button>
                <button>s2</button>
            </div>

        </div>
    )
}


export default TelaInicial

