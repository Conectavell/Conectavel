import { useEffect, useState } from 'react'
import styled from 'styled-components'
//
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

const Lang = () => {
    const { i18n } = useTranslation();



    const [src, setSrc] = useState(br)
    const [textoAlternativo, setTextoAlternativo] = useState(["pt","ja","en"])
    const [linguagem,setLinguagem] = useState([br, en, jp])
    const [count, setCount] = useState(0)

    const handleChangeLanguage = (value) => {
        i18n.changeLanguage(value);
    };

    const mudarLingua = () => {
        setCount(prevCount => {
            const newCount = (prevCount + 1) % linguagem.length;
            setSrc(linguagem[newCount]);
            handleChangeLanguage(textoAlternativo[newCount]);
            return newCount;
        });
    };
      


    return (
        <LangBox>
            <img
                onClick={
                    () => {
                        mudarLingua()
                    }}
                src={src} alt={`Bandeira ${textoAlternativo[count]}`} />
        </LangBox>
    )
}

export default Lang