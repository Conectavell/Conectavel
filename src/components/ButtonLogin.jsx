import styled from "styled-components";

export const ButtonLogin = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  color: var(--preto);
  border: 1px solid #d2d2d2;
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  height: 30px;
  margin-top: 20px;
  flex-basis: 50%;

  img {
    margin-right: 15px;
    
  }
  @media (max-width: 1100px){
    span{
      display: none;
    }
}
`;
