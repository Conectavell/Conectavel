import styled from "styled-components";

const InputDiv = styled.div`
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

const Input = ({ name, label, placeholder, type = "text" }) => {
  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </InputDiv>
  );
};

export default Input;
