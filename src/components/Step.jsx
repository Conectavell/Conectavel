import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid var(--verde_principal);
    border-radius: 12px;
    margin-bottom: 2rem;
    text-align: center;
    .step{
        border: 1px solid var(--verde_principal);
        border-radius: 90px;
        font-size: 18px;
        padding: .1rem .5rem;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 140%;
    }

    @media (max-width: 768px){
        flex-direction: column;
        text-align: center;
        align-items: center;
        overflow: hidden;
    }
`
const Content = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: .5rem;

    @media (max-width: 768px){
        width: 100%;
    }
`
const Texto = styled.p`
    text-align: center;
    color: #95979C;
    font-size: 20px;
`

const Step = ({ titulo1, titulo2, titulo3, text1, text2, text3 }) => {
    const { innerWidth: width, innerHeight: height } = window
    
    return (
        <Box>
            <Content>
                <p className='step'>Passo 1</p>
                <h4 className='title'>{titulo1}</h4>
                <Texto>{text1}</Texto>
            </Content>
            <Content style={width > 768 ? { borderLeft: '1px solid var(--verde_principal)' } : { borderTop: '1px solid var(--verde_principal)' }}>
                <p className='step'>Passo 2</p>
                <h4 className='title'>{titulo2}</h4>
                <Texto>{text2}</Texto>
            </Content>
            <Content style={width > 768 ? { borderLeft: '1px solid var(--verde_principal)' } : { borderTop: '1px solid var(--verde_principal)' }}>
                <p className='step'>Passo 3</p>
                <h4 className='title'>{titulo3}</h4>
                <Texto>{text3}</Texto>
            </Content>
        </Box>
    )
}

export default Step