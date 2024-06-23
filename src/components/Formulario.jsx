import { useRef } from 'react'
import styled from 'styled-components'



export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #f1f1f1;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;
export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`;
export const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #2c73d2;
color: white;
height: 42px;
`;
export const Label = styled.label``;

const Formulario = () => {
    const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
      <Label>Nome</Label>
      <Input name="nome"/>
      </InputArea>
      <InputArea>
      <Label>Email</Label>
      <Input name="email" type='email'/>
      </InputArea>
      <InputArea>
      <Label>Telefone</Label>
      <Input name="fone"/>
      </InputArea>
      <InputArea>
      <Label>Data De Nascimento</Label>
      <Input name="data_nascimento" type='date'/>
      </InputArea>

      <Button type='submit'>SALVAR</Button>
    </FormContainer>
  )
}

export default Formulario
