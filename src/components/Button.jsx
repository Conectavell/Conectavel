import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 8px;
  background-color: var(--azul_principal);
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  margin: 20px 0;
  font-size: 22px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  width: 100%;
  outline: none;
  border: none;

  &:hover {
    background-color: var(--laranja);
  }


`;
