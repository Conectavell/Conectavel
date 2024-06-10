import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  background-color: var(--azul_principal);
  padding: 35px;
`/**/
const Area = styled.div`
  background-color: white;
  width: 716px;
  border-radius: 20px;
  margin: auto;
  padding: 50px 0 20px;
`/**/
const Titulo = styled.h2`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
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
  padding-left: 30px;
  width: 600px;
  height: 65px;
  &::placeholder{
    font-size: 20px;
}
`/**/
const PutMenor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`/**/
const Col1 = styled.div`
  margin-right: 13px;
  gap: 10px;
`/**/
const Col2 = styled.div`
  gap: 10px;
`/**/
const InputCol1 = styled.input`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  padding-left: 30px;
  width: 276px;
  height: 65px;
  &::placeholder{
    font-size: 20px;
}

`/**/
const InputCol2 = styled.input`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  padding-left: 30px;
  width: 305px;
  height: 65px;
  &::placeholder{
    font-size: 20px;
}

`/**/
const Bot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`/**/
const Btn = styled.button`
  margin-top: 44px;
  width: 600px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: var(--azul_principal);
  color: white;
  font-size: 26px;
  font-weight: 400;
`/* */
const A = styled.div`
  display: block;
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: 400;
  margin: 20px;
`/**/

const CompletarInfoClientePage = () => {
  const navigate = useNavigate();

  return(
    <Box>
        <Area>
            <Titulo>Complete suas informações</Titulo>
            <PutMaior>
                <Put>
                    <label htmlFor="Nacionalidade"><Paragrafo>Nacionalidade</Paragrafo></label>
                    <CaixaPut type="text" name="Nacionalidade" id="Nacionalidade" placeholder="Selecione" />
                </Put>
                <Put>
                    <label htmlFor="cpfcnpj"><Paragrafo>CPF / CNPJ</Paragrafo></label>
                    <CaixaPut type="text" name="cpfcnpj" id="cpfcnpj" placeholder="000.000.000-00" />
                </Put>
                <Put>
                    <label htmlFor="cep"><Paragrafo>CEP</Paragrafo></label>
                    <CaixaPut type="text" name="cep" id="cep" placeholder="XXXXX-XXX" />
                </Put>
                <Put>
                    <label htmlFor="numero"><Paragrafo>Número</Paragrafo></label>
                    <CaixaPut type="text" name="numero" id="numero" placeholder="Digíte o número do endereço" />
                </Put>
                <Put>
                    <label htmlFor="complemento"><Paragrafo>Complemento</Paragrafo></label>
                    <CaixaPut type="text" name="complemento" id="complemento" placeholder="Digite o complemento" />
                </Put>
            </PutMaior>
            <PutMenor>
                <Col1>
                    <Put>
                        <label htmlFor="celular"><Paragrafo>Celular</Paragrafo></label>
                        <InputCol1 type="text" name="celular" id="celular" placeholder="(XX) X XXXX-XXXX" />
                    </Put>
                    <Put>
                        <label htmlFor="estadoCivil"><Paragrafo>Estado civil</Paragrafo></label>
                        <InputCol1 type="text" name="estadoCivil" id="estadoCivil" placeholder="Selecione" />
                    </Put>
                </Col1>
                <Col2>
                    <Put>
                        <label htmlFor="dataNasc"><Paragrafo>Data de nascimento</Paragrafo></label>
                        <InputCol2 type="text" name="dataNasc" id="dataNasc" placeholder="dd/mm/aaaa" />
                    </Put>
                    <Put>
                        <label htmlFor="sexo"><Paragrafo>Sexo</Paragrafo></label>
                        <InputCol2 type="text" name="sexo" id="sexo" placeholder="Selecione" />
                    </Put   >
                </Col2>
            </PutMenor>
            <Bot>
                <Btn onClick={()=> navigate("/Conectavel/perfilcliente")}>Enviar informações</Btn>
            </Bot>
        </Area>
        <A href="#">Deixar para Depois</A>
    </Box>
)
}

export default CompletarInfoClientePage