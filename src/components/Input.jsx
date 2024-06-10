import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 13px;

  label {
    color: var(--cinza);
  }

  input {
    padding: 16px;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--azul_principal);
  }
`;

const Input = ({ name, label, placeholder, type = "text" }) => {
  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </InputDiv>
  );
};

export default Input;
