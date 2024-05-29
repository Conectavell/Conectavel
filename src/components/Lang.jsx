import { useState } from 'react'
import styled from 'styled-components'
import br from '../assets/br.png'
import en from '../assets/en.png'


const LangBox = styled.a`
    text-decoration: none;
    border-radius: 50%;
    
    img{
        cursor: pointer;
        width: 25px !important; 
        margin: 0 .3rem;
    }
`

const Lang = () => {
    const [lang, setLang] = useState("pt-br")
    const [src, setSrc] = useState(br)


    return (
        <LangBox>
            <img
                onClick={
                    () => {
                        setLang(lang === "pt-br" ? "en" : "pt-br")
                        setSrc(src === br ? en : br)
                    }}
                src={src} alt={`Bandeira ${lang}`} />
        </LangBox>
    )
}

export default Lang