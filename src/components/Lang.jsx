import styled from 'styled-components'
import br from '../assets/br.png'
import en from '../assets/en.png'
import jp from '../assets/jp.jpg'
import { useTranslation } from "react-i18next";


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