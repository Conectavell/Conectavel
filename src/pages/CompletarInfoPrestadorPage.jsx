import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavbarPerfis'

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
`

const ChatLateral = styled.div`
  width: 313px;
  height: 100%;
  border: 2px #EBEBEE solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

`

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
`



const CompletarInfoPrestadorPage = () => {
  return (
    <>
      <SectionWrapper>
        <Navbar />
        <MainWrapper>
          <ChatLateral>

          </ChatLateral>
        </MainWrapper> 
      </SectionWrapper>
    </>
  )
}

export default CompletarInfoPrestadorPage