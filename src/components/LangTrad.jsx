import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import br from '../assets/br.png'
import en from '../assets/en.png'
import jp from '../assets/jp.jpg'

const LangBox = styled.a`
    text-decoration: none;
    border-radius: 50%;
    
    img{
        cursor: pointer;
        width: 25px !important; 
        margin: 0 .3rem;
    }
`

const LangTrad = () => {
    const { i18n } = useTranslation()
    // Instância do i18n



    const [lang, setLang] = useState("pt-br")
    const [src, setSrc] = useState(br)
    const [textoAlternativo, setTextoAlternativo] = useState(["pt-BR", "en-us", "ja"])
    const [linguagem, setLinguagem] = useState([br, en, jp])
    const [count, setCount] = useState(0)

    const mudarLingua = () => {
        setCount(count + 1)
        if (count == linguagem.length) {
            setCount(0)
        }
    }

    function handleChangeLanguage(language) {
        // Trocando o idioma na chamada da função
        i18n.changeLanguage(language)
    }

    const selectedLanguage = i18n.language // Idioma selecionado


    return (
    <LangBox>
        <img
            onClick={
                () => {
                    mudarLingua()
                    setLang(textoAlternativo[count]);
                    handleChangeLanguage(textoAlternativo[count])
                    setSrc(linguagem[count]);
                }}
            src={src} alt={`Bandeira ${lang}`} />
    </LangBox>
    )
}

export default LangTrad;