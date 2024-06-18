import styled from 'styled-components'
//
const LangBox = styled.a`
    text-decoration: none;
    border-radius: 50%;
    
    img{
        cursor: pointer;
        width: 25px !important; 
        margin: 0 .3rem;
    }
`

const Lang = ({src}) => {
    return (
        <LangBox>
            <img src={src} alt='' />
        </LangBox>
    )
}

export default Lang