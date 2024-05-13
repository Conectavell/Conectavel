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
    const [showLang, setShowLang] = useState(false)


    return (
        <LangBox>
            {
                showLang
                    ?
                    <>
                        <img
                            onClick={
                                () => {
                                    setLang("pt-br")
                                    setShowLang(!showLang)
                                }}
                            src={br} alt="" />
                        <img
                            onClick={
                                () => {
                                    setLang("en")
                                    setShowLang(!showLang)
                                }}
                            src={en} alt="" />
                    </>
                    :
                    lang === 'pt-br' ?
                        <img
                            onClick={
                                () => {
                                    setLang("pt-br")
                                    setShowLang(!showLang)
                                }}
                            src={br} alt="" />
                        :
                        <img
                            onClick={
                                () => {
                                    setLang("en")
                                    setShowLang(!showLang)
                                }}
                            src={en} alt="" />
            }
        </LangBox>
    )
}

export default Lang