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
const InputCol1 = styled.input`
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
  const navigate = useNavigate();

  return(
    <Box>
        <Area>
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
                <Btn type='submit' onClick={()=> navigate("/Conectavel/perfilcliente")}>Enviar informações</Btn>
        </Area>
        <A onClick={()=> navigate("/Conectavel/perfilcliente")} href="#">Deixar para Depois</A>
    </Box>
)
}

export default CompletarInfoClientePage