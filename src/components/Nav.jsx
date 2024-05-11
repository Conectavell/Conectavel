import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'
import br from '../assets/br.png'
import en from '../assets/en.png'
import logo_alternativa from '../assets/logo-alternativa.png'
import logotipo_alternativo from '../assets/logotipo-alternativo.png'
import { useState } from 'react'

const Box = styled.nav`
    width: 67.05vw;
    margin: auto;
    padding: .5rem 3rem;
    margin-top: 1rem;
    height: 3rem;
    background-color: #C7DCF7;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    img{
        width: 50px;
    }
    .bloco{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    .logotipo{
        width: 119px;
    }

`
const ListItem = styled.li`
    list-style-type: none;
    font-size: 13px;
    cursor: pointer;

    &:hover{
        color: #06AB11;
        transition: all .3s linear;
    }

`
const Cadastro = styled.button`
    padding: .8rem 1rem;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: #06AB11;
    color: white;
    font-weight: bold;
    transition: all .3s linear;
    
    &:hover{
        background-color: #2196F3;

    }
    `
const Login = styled.button`
    border-radius: 1.5rem;
    padding: .8rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    font-weight: bold;

    &:hover{
        color: #06AB11;
        transition: all .3s linear;
    }
`
const Lang = styled.a`
    text-decoration: none;
    border-radius: 50%;
    
    img{
        cursor: pointer;
        width: 25px;
        margin: 0 .3rem;
    }
`

const Nav = () => {
    const navItems = ['Home', 'Serviços', 'Colaboradores', 'Descarte', 'Quem somos nós']
    const [showLang, setShowLang] = useState(false)
    const [lang, setLang] = useState("pt-br")

    return (
        <Box>
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <img src={logo_alternativa} alt="" />
                <img className='logotipo' src={logotipo_alternativo} alt="" />
            </div>
            <ul>
                {navItems.map((item, index) => {
                    return <ListItem key={index}>{item}</ListItem>
                })
                }
            </ul>
            <div className='bloco'>
                <IoSearch size='25px' />
                <Cadastro>Cadastre-se</Cadastro>
                <Login>Login</Login>
                <Lang>
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
                </Lang>
            </div>

        </Box>
    )
}

export default Nav