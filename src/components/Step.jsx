import React from 'react'
import styled from 'styled-components'
import { Detail } from './Inicio'

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid #5EC460;
    border-radius: 12px;
    margin-bottom: 2rem;
    
    .step{
        border: 1px solid #5EC460;
        border-radius: 90px;
        font-size: 12px;
        padding: .1rem .5rem;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
    }
`
const Content = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: .5rem;

    
`

const Step = ({ titulo1, titulo2, titulo3, text1, text2, text3 }) => {
    return (
        <Box>
            <Content>
                <p className='step'>Step 1</p>
                <h4 className='title'>{titulo1}</h4>
                <Detail style={{ textAlign: 'center' }}>{text1}</Detail>
            </Content>
            <Content style={{ borderLeft: '1px solid #5EC460' }}>
                <p className='step'>Step 2</p>
                <h4 className='title'>{titulo2}</h4>
                <Detail style={{ textAlign: 'center' }}>{text2}</Detail>
            </Content>
            <Content style={{ borderLeft: '1px solid #5EC460' }}>
                <p className='step'>Step 3</p>
                <h4 className='title'>{titulo3}</h4>
                <Detail style={{ textAlign: 'center' }}>{text3}</Detail>
            </Content>
        </Box>
    )
}

export default Step