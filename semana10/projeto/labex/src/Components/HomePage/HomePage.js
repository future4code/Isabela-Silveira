import React from 'react';
import { useHistory } from 'react-router-dom';
import TripListHome from '../TripListHome/TripListHome';
import { LogoH1, DivContainer, ButtonHeader,DivListTripContainer } from './styled';


function HomePage () {
    const history = useHistory()

    const goToSignUp = () => {
        history.push('/application-form')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    return (
        <div>
            <DivContainer>

                <div> 
                    <LogoH1>Labex</LogoH1>
                </div>

                <div> 
                    <ButtonHeader onClick={goToSignUp}>Inscreva-se</ButtonHeader>
                    <ButtonHeader onClick={goToLogin}>Área do administrador</ButtonHeader>
                </div>

            </DivContainer>

            <DivListTripContainer>
                <TripListHome />
            </DivListTripContainer>
        </div>

    
    )
}

export default HomePage