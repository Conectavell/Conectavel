import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Steper from './Steper'


const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 85vh;
    padding-top: 60%;

    &::-webkit-scrollbar{
        width: 0;
    }

`
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
  width: 100%;
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
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`/**/

const Col = styled.div`
width: 40%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
@media (max-width: 992px){
  width: 100%;
}
`/**/
const InputCol1 = styled.input`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  &::placeholder{
    font-size: 1.05em;
    }
    `/**/

const Btn = styled.button`
  margin-top: 2rem;
  width: 100%;
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
  color: var(--azul_principal);
  font-size: 20px;
  font-weight: 400;
  margin: 20px;
  text-decoration: underline;
`/**/

const FormCompletarInfoPrestador = () => {
    const navigate = useNavigate();

    return (
        <Container>
            

            <Titulo>Complete suas informações</Titulo>
            <Put>
                <label htmlFor="Nacionalidade"><Paragrafo>Nacionalidade</Paragrafo></label>
                <CaixaPut required type="text" name="Nacionalidade" id="Nacionalidade" placeholder="Selecione" />
            </Put>
            <Put>
                <label htmlFor="cpfcnpj"><Paragrafo>CPF / CNPJ</Paragrafo></label>
                <CaixaPut required type="text" name="cpfcnpj" id="cpfcnpj" placeholder="000.000.000-00" />
            </Put>
            <Put>
                <label htmlFor="cep"><Paragrafo>CEP</Paragrafo></label>
                <CaixaPut required type="text" name="cep" id="cep" placeholder="XXXXX-XXX" />
            </Put>
            <Put>
                <label htmlFor="numero"><Paragrafo>Número</Paragrafo></label>
                <CaixaPut required type="text" name="numero" id="numero" placeholder="Digíte o número do endereço" />
            </Put>
            <Put>
                <label htmlFor="complemento"><Paragrafo>Complemento</Paragrafo></label>
                <CaixaPut required type="text" name="complemento" id="complemento" placeholder="Digite o complemento" />
            </Put>
            <PutMenor>
                <Col>
                    <Put>
                        <label htmlFor="celular"><Paragrafo>Celular</Paragrafo></label>
                        <InputCol1 required type="text" name="celular" id="celular" placeholder="(XX) X XXXX-XXXX" />
                    </Put>
                    <Put>
                        <label htmlFor="estadoCivil"><Paragrafo>Estado civil</Paragrafo></label>
                        <InputCol1 required type="text" name="estadoCivil" id="estadoCivil" placeholder="Selecione" />
                    </Put>
                </Col>
                <Col>
                    <Put>
                        <label htmlFor="dataNasc"><Paragrafo>Data de nascimento</Paragrafo></label>
                        <InputCol1 required type="text" name="dataNasc" id="dataNasc" placeholder="dd/mm/aaaa" />
                    </Put>
                    <Put>
                        <label htmlFor="sexo"><Paragrafo>Sexo</Paragrafo></label>
                        <InputCol1 required type="text" name="sexo" id="sexo" placeholder="Selecione" />
                    </Put   >
                </Col>
            </PutMenor>
            <Btn type='submit' onClick={() => navigate("/Conectavel/perfilcliente")}>Enviar informações</Btn>
            <A onClick={() => navigate("/Conectavel/perfilcliente")} href="#">Deixar para Depois</A>

        </Container>
    )
}

export default FormCompletarInfoPrestador