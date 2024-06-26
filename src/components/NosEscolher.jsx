import styled from 'styled-components'
import { Sub_heading } from './Header'
import escolher from '../assets/escolher.png'
import Qualidades from './Qualidades'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



const Button = styled(Link)`
    padding: .8rem 1rem;
    text-align: center;
    /* width: 300px; */
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    color: white;
    transition: all .3s linear;
    font-weight: 600;
    &:hover{
        background-color: var(--verde_principal);
    }
    `
const Box = styled.div`
    width: 100vw;
    background-color: var(--azul_principal);
    margin: auto;
    padding: 3% 10%;
    padding-bottom: 5rem;
    position: relative;
    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 4rem;
    }
    .row img{
        width: 30vw;
    }
    .left{
        display: flex;
        flex-direction: row;
    }
    .button1{
        padding: 1.3rem 3rem;
        border-radius: 100px;
    }
    .button2{
        padding: 1.3rem 3rem;
        border-radius: 100px;
        display: none;
    }
    .qualidades{
        width: 20vw;
        /* height: auto; */
    }
    
    @media (max-width: 992px){
        padding: 1rem .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .row{
            justify-content: center;
            gap: 0;
            align-items: center;
        }
        .left{
            flex-direction: column;
            position: unset;
        }
        .qualidades{
            width: 90vw;
        }
        .button2{
            margin-top: 1rem;
            display: block;
        }
        .button1{
            display: none;
        }
        img{
            display: none;
        }
    }
`
const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    color: #fff;
    width: 50%;
    
    @media (max-width: 992px){
        width: 90%;
        text-align: center;
    }
`

const NosEscolher = () => {
    const { innerWidth: width, innerHeight: height } = window
    const { t } = useTranslation()


    return (
        <Box>
            <Sub_heading style={{ color: 'var(--laranja)' }}>
                {t("nosEscolher.subtitle")}
            </Sub_heading>
            <Heading_text >{t("nosEscolher.title")}</Heading_text>

            <div className="row">
                {/* {
                    width > 992 ?  : ''
                } */}
                <img src={escolher} />

                <div className="left">
                    <div className="qualidades">
                        <Qualidades title={t("nosEscolher.valores.valor1.title")} text={t("nosEscolher.valores.valor1.text")} />
                        <Qualidades title={t("nosEscolher.valores.valor3.title")} text={t("nosEscolher.valores.valor3.text")} />
                        {/* {
                            width > 992 ? : ''
                        } */}

                        <Button className='button1'>{t("nosEscolher.btncomecar")}</Button>
                    </div>
                    <div className="qualidades">
                        <Qualidades title={t("nosEscolher.valores.valor2.title")} text={t("nosEscolher.valores.valor2.text")} />
                        <Qualidades title={t("nosEscolher.valores.valor4.title")} text={t("nosEscolher.valores.valor4.text")} />
                    </div>
                </div>

            </div>
            {/* {
                width > 992 ? '' : <Button className='button'>{t("nosEscolher.btncomecar")}</Button>
            } */}
            <Button className='button2'>{t("nosEscolher.btncomecar")}</Button>
        </Box >
    )
}

export default NosEscolher