import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { IMaskInput } from "react-imask";
import Modal from '../components/ModalCadastro'
import axios from 'axios';

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
const CaixaPut = styled(IMaskInput)`
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
const InputCol1 = styled(IMaskInput)`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  /* width: 276px; */
  /* height: 65px; */
  &::placeholder{
    font-size: 1.05em;
    }
    
    `/**/
const InputCol2 = styled.input`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  width: 40%;
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

const CompletarInfoClientePage = () => {
  const location = useLocation();
  // console.log(location)

  const [nacionalidadeUsuario, setNacionalidadeUsuario] = useState('');
  const [identidadeUsuario, setIdentidadeUsuario] = useState('');
  const [cepUsuario, setCepUsuario] = useState('');
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [complementoUsuario, setComplementoUsuario] = useState('');
  const [celularUsuario, setCelularUsuario] = useState('');
  const [estadoCivilUsuario, setEstadoCivilUsuario] = useState('');
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState('');
  const [sexoUsuario, setSexoUsuario] = useState('')

  const completarCadastro = (perfil,nome, email, senha, nacionalidade, identidade, cep, numero, complemento, celular, estado, data, sexo) => {
    axios.post('http://localhost:8080/api/v1/usuario', {
      tipoDePerfilUsuario:`${perfil}`,
      nomeUsuario:`${nome}`,
      emailUsuario:`${email}`,
      senhaUsuario:`${senha}`,
      nacionalidadeUsuario:`${nacionalidade}`,
      cpfUsuario:`${identidade}`,
      cepUsuario:`${cep}`,
      numeroUsuario:`${numero}`,
      complementoUsuario:`${complemento}`,
      celularUsuario:`${celular}`,
      estadoCivilUsuario:`${estado}`,
      dataNascimentoUsuario:`${data}`,
      sexoUsuario:`${sexo}`
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
  }})
    .then(function (response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    completarCadastro(location.state.tipoPerfil, location.state.nomeUsuario, location.state.emailUsuario, location.state.senhaUsuario, nacionalidadeUsuario, identidadeUsuario, cepUsuario, numeroUsuario, complementoUsuario, celularUsuario, estadoCivilUsuario, dataNascimentoUsuario, sexoUsuario);
    setOpenModal(true)
  }

  const [openModal, setOpenModal] = useState(false)

  return(
    <Box>
        <Area onSubmit={handleSubmit}>
            <Titulo>Complete suas informações</Titulo>
                <Put>
                    <label htmlFor="Nacionalidade"><Paragrafo>Nacionalidade</Paragrafo></label>
                    <CaixaPut required type="text" name="Nacionalidade" id="Nacionalidade" placeholder="Selecione" value={nacionalidadeUsuario} onChange={(e) => setNacionalidadeUsuario(e.target.value)}/>
                </Put>
                <Put>
                    <label htmlFor="cpfcnpj"><Paragrafo>CPF / CNPJ</Paragrafo></label>
                    <CaixaPut required type="text" name="cpfcnpj" id="cpfcnpj" placeholder="000.000.000-00" mask="000.000.000-00" value={identidadeUsuario} onChange={(e) => setIdentidadeUsuario(e.target.value)}/>
                </Put>
                <Put>
                    <label htmlFor="cep"><Paragrafo>CEP</Paragrafo></label>
                    <CaixaPut required type="text" name="cep" id="cep" placeholder="XXXXX-XXX" mask="00000-000" value={cepUsuario} onChange={(e) => setCepUsuario(e.target.value)}/>
                </Put>
                <Put>
                    <label htmlFor="numero"><Paragrafo>Número</Paragrafo></label>
                    <CaixaPut required type="text" name="numero" id="numero" placeholder="Digíte o número do endereço" value={numeroUsuario} onChange={(e) => setNumeroUsuario(e.target.value)}/>
                </Put>
                <Put>
                    <label htmlFor="complemento"><Paragrafo>Complemento</Paragrafo></label>
                    <CaixaPut required type="text" name="complemento" id="complemento" placeholder="Digite o complemento" value={complementoUsuario} onChange={(e) => setComplementoUsuario(e.target.value)}/>
                </Put>
            <PutMenor>
                <Col>
                    <Put>
                        <label htmlFor="celular"><Paragrafo>Celular</Paragrafo></label>
                        <InputCol1 required type="text" name="celular" id="celular" placeholder="(XX) X XXXX-XXXX" mask="(00)00000-0000" value={celularUsuario} onChange={(e) => setCelularUsuario(e.target.value)}/>
                    </Put>
                    <Put>
                        <label htmlFor="estadoCivil"><Paragrafo>Estado civil</Paragrafo></label>
                        <InputCol1 required type="text" name="estadoCivil" id="estadoCivil" placeholder="Selecione" value={estadoCivilUsuario} onChange={(e) => setEstadoCivilUsuario(e.target.value)}/>
                    </Put>
                </Col>
                <Col>
                    <Put>
                        <label htmlFor="dataNasc"><Paragrafo>Data de nascimento</Paragrafo></label>
                        <InputCol1 required type="date" name="dataNasc" id="dataNasc" placeholder="dd/mm/aaaa" value={dataNascimentoUsuario} onChange={(e) => setDataNascimentoUsuario(e.target.value)}/>
                    </Put>
                    <Put>
                        <label htmlFor="sexo"><Paragrafo>Sexo</Paragrafo></label>
                        <InputCol1 required type="text" name="sexo" id="sexo" placeholder="Selecione" value={sexoUsuario} onChange={(e) => setSexoUsuario(e.target.value)}/>
                    </Put   >
                </Col>
            </PutMenor>
                <Btn type='submit'>Enviar informações</Btn>
        </Area>
        <A onClick={()=> navigate("/Conectavel/perfilcliente")}>Deixar para Depois</A>
        <Modal isOpen={openModal}/>
    </Box>
)
}

export default CompletarInfoClientePage