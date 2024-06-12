import styled from "styled-components";

export const ButtonLogin = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  color: var(--preto);
  border: 1px solid #d2d2d2;
  padding: .5rem 1rem ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
  flex-basis: 50%;
  
  img {
    /* margin-right: 15px; */
    
    }
    @media (max-width: 1100px){
      justify-content: center;
      span{
      display: none;
    }
}
`;
