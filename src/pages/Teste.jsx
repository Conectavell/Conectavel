import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  background-color: var(--azul_principal);
  padding: 35px;
  @media (max-width: 992px){
    padding: 0px;
  }
`/**/
const Area = styled.form`
  background-color: white;
  width: 50%;
  border-radius: 20px;
  margin: auto;
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px){
    width: 90%;
  }
`/**/
const Titulo = styled.h2`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  @media (max-width: 992px){
    font-size: 38px;
  }
`/**/
const Paragrafo = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #4D5959;
  margin-bottom: 0;
`/**/
const Put = styled.div`
  display: flex;
  flex-direction: column;
  top: -10px;
  width: 82%;
`/**/
const PutMaior = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`/**/
const CaixaPut = styled.input`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  padding: 1rem;
  padding-left: 1rem;
  width: 100%;

  &::placeholder{
    font-size: 1.05em;
}
`/**/
const PutMenor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`/**/

const Col = styled.div`
width: 45%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
@media (max-width: 992px){
  width: 100%;
}
`/**/
const Bot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`/**/
const Btn = styled.button`
  margin-top: 2rem;
  width: 82%;
  padding: .8rem 2.2rem;
  border: none;
  border-radius: 10px;
  background-color: var(--azul_principal);
  color: white;
  font-size: 22px;
  font-weight: 400;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: var(--laranja);
  }
`/* */
const A = styled.div`
  display: block;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 20px;
  text-decoration: underline;
`/**/


const Teste = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <Box>
            <Area>
                <Titulo>Complete suas informações</Titulo>
                <Put>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Nacionalidade</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value='pt-br'>Brasil</MenuItem>
                            <MenuItem value='pt-pt'>Portugal</MenuItem>
                            <MenuItem value='us'>Estados Unidos</MenuItem>
                        </Select>
                    </FormControl>
                </Put>
                <Put>
                    <TextField required={true} id="outlined-controlled" label="CPF / CNPJ" placeholder="000.000.000-00" />

                </Put>
                <Put>
                    <TextField required={true} id="outlined-controlled" label="CEP" placeholder="XXXXX-XXX" />
                </Put>
                <Put>
                    <TextField required={true} id="outlined-controlled" label="Número" placeholder="Digíte o número do endereço" />
                </Put>
                <Put>
                    <TextField required={true} id="outlined-controlled" label="Complemento" placeholder="Digite o complemento" />
                </Put>
                <PutMenor>
                    <Col>
                        <Put>
                        <TextField required={true} id="outlined-controlled" label="Celular" placeholder="(XX) X XXXX-XXXX" />
                        </Put>
                        <Put>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Estado civil</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='solteiro'>Solteiro</MenuItem>
                                    <MenuItem value='casado'>Casado</MenuItem>
                                    <MenuItem value='divorciado'>Divorciado</MenuItem>
                                </Select>
                            </FormControl>

                        </Put>
                    </Col>
                    <Col>
                        <Put>
                            <TextField type='date' required={true} id="outlined-controlled"   />
                        </Put>
                        <Put>
                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='feminino'>Feminino</MenuItem>
                                    <MenuItem value='masculino'>Masculino</MenuItem>
                                    <MenuItem value='outro'>Outro</MenuItem>
                                </Select>
                            </FormControl>
                        </Put   >
                    </Col>
                </PutMenor>
                <Btn type='submit' onClick={() => navigate("/Conectavel/perfilcliente")}>Enviar informações</Btn>
            </Area>
            <A onClick={() => navigate("/Conectavel/perfilcliente")} href="#">Deixar para Depois</A>
        </Box>
    );
}

export default Teste

    ;

