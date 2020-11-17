import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ImgProfile, NomeProjeto, ContornaTudo } from './styled';
import Like from './Components/Images/Like';
import Dislike from './Components/Images/Dislike';


const TelaInicial = () => {

    const [profile, setProfile] = useState([])
    const [choiceProfile, setChoiceProfile] = useState(false)
    const [renderComponent, setRenderComponent] = useState(false)

    const getProfile = () => {
        Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isabela/person').then(response => {
            setProfile(response.data.profile)
        }).catch(error => {
            alert(`Erro: ${error.message}`)
        })
    }

    const postChoosePerson = () => {
        const body = {
            id: profile.id,
            choice: choiceProfile
        }

        Axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isabela/choose-person', body).then(response => {
            console.log(response.data)
        }).catch(error => {
            alert(`Erro: ${error.message}`)
        })
    } 

    const onClickLike = () => {
        setChoiceProfile(true)
        getProfile()
        setRenderComponent(!renderComponent)
    }

    const onClickDislike = () => {
        setChoiceProfile(false)
        getProfile()
        setRenderComponent(!renderComponent)
    }

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        postChoosePerson()
    }, [renderComponent])

    return (

        <ContornaTudo>

            <div> 
                <NomeProjeto>astromatch</NomeProjeto>
            </div>

            
            <div>
                <ImgProfile src={profile.photo} />
                <h2>{profile.name}</h2>
                <h3>{profile.age}</h3>
            </div>

            <div>
                <p>{profile.bio}</p>
            </div>
            
            <div>
                <Dislike onClick={onClickDislike} />
                <Like onClick={onClickLike} />
                
            </div>

            </ContornaTudo>
    )
}

console.log(TelaInicial)
export default TelaInicial

