import styled from "styled-components";


export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: 10px;

  label {
    color: var(--cinza);
  }

  input {
    padding: 1rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--azul_principal);
  }
`;

export const InputS = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--azul_principal);

  label {
    color: var(--cinza);
  }
`

const Input = ({ name, label, placeholder, type, mudanca}) => {
  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={mudanca}/>
    </InputDiv>
  );
};

export default Input;
