import Axios from 'axios'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DivFormContainer, FormContainer } from './styled'

function CreateTripPage () {
    const [form, setForm] = useState({
        nameTrip: '',
        planet: '',
        description: '',
        durationsDays: 0,
        date: ''
    })

    const history = useHistory()

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setForm({...form, [name]: value})
    }

    const HandleSubmittion = (event) => {
        event.preventDefault()

    
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: Number(form.durationDays),  
            }

            Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isabela-dumont/trips', body, {
                headers: {
                    auth: window.localStorage.getItem('token')
                }
            } ).then((res) => {
                history.push('/viagens')
                console.log('res: ', res)
            }).catch((err) => {
                alert('Erro: ', err.message)
            })
            console.log('handleSumib: ', HandleSubmittion)
        }
    
    
    

    return (
        <div>

            <div>
                <h3>Crie uma viagem</h3>
            </div>

            <DivFormContainer>
              <FormContainer onSubmit={HandleSubmittion}>
                  <label>Nome:</label>
                  <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleInputChange}
                  pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}'
                  title='Informe o nome da viagem'
                  required
                  />
                   
                  <label>Planeta:</label>
                  <input 
                  type='text'
                  name='planet'
                  value={form.planet}
                  onChange={handleInputChange}
                  required
                  />

                  <label>Data:</label>
                  <input 
                  type='date'
                  name='date'
                  value={form.date}
                  onChange={handleInputChange}
                  required
                  />

                  <label>Descrição:</label>
                  <textarea 
                  type=''
                  name='description'
                  value={form.description}
                  onChange={handleInputChange}
                  pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}'
                  title='Informe a descrição da viagem'
                  required
                  /> 

                  <label>Duração da viagem em dias:</label>
                  <input 
                  type='Number'
                  name='durationsDay'
                  value={form.durationsDays}
                  onChange={handleInputChange}
                  min='1'
                  title='Informe a duração da viagem em dias'
                  required
                  />

                  <button>Criar</button>

              </FormContainer>
            </DivFormContainer>
        </div>
    )
}

export default CreateTripPage