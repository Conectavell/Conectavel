import { useRef } from 'react';
import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 150px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const Select = styled.select`
    width: 150px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    position: relative;
    top: 27px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

const Formulario = () => {
    const ref = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Buscando usuários...");
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <FieldsContainer>
                <InputArea>
                    <Label>ID</Label>
                    <Input name="id" type="number" />
                </InputArea>
                {/*<InputArea>
                    <Label>Nome</Label>
                    <Input name="nome" />
                </InputArea>
                <InputArea>
                    <Label>Sobrenome</Label>
                    <Input name="sobrenome" />
                </InputArea>
                <InputArea>
                    <Label>Email</Label>
                    <Input name="email" type="email" />
                </InputArea>
                <InputArea>
                    <Label>Senha</Label>
                    <Input name="senha" type="password" />
                </InputArea>
                <InputArea>
                    <Label>Data de Nascimento</Label>
                    <Input name="data_nascimento" type="date" />
                </InputArea>
                <InputArea>
                    <Label>CPF</Label>
                    <Input name="cpf" />
                </InputArea>*/}
                <InputArea>
                    <Label>Tipo de Perfil</Label>
                    <Select name="perfil">
                        <option value="cliente">Cliente</option>
                        <option value="profissional">Profissional</option>
                    </Select>
                </InputArea>
                                <Button type="submit">BUSCAR</Button>
            </FieldsContainer>
        </FormContainer>
    );
};

export default Formulario;
