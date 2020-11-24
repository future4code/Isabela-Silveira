import React, { useState } from 'react';
import { DivContainer } from './styled'

function FormInscricao () {
    const [form, setForm] = useState({
        name: '', 
        password: '', 
        age: 0, 
        applicationText: '', 
        country: '', 
        trip: '' 
    })

    

    return (

            <DivContainer> 

                <h1>Faça sua inscrição e viage conosco!</h1>

                <form >

                    <label>Nome:</label><br/>
                    <input 
                    type={'text'}
                    //value={}
                    //onChange={}
                    name={'name'}
                    pattern={''}
                    required
                    /><br/>

                    <label>Idade:</label><br/>
                    <input 
                    type={'number'}
                    name={'age'}
                    pattern={''}
                    required
                    /><br/>

                    <label>Poque sou um bom candidato(a)</label><br/>
                    <textarea 
                    type={'text'}
                    name={'applicationText'}
                    pattern={''}
                    required
                    /><br/>

                    <label>Profissão:</label><br/>
                    <input
                    type={'text'}
                    name={'country'}
                    pattern={''}
                    required
                    /><br/>

                    <label>Em qual país você mora?</label><br/>
                    <select
                    name={'trip'}
                    pattern={''}
                    required
                    >
                        <option>Brasil</option>
                        <option>EUA</option>
                    </select><br/>

                    <label>Para onde desejar ir?</label><br/>
                    <select
                    name={'trip'}
                    pattern={''}
                    required
                    >
                        <option>Júpiter</option>
                        <option>Marte</option>
                    </select>
                </form>

            </DivContainer>
       
    )
}

export default FormInscricao