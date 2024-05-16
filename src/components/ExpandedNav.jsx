import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'
import logo_alternativa from '../assets/logo-alternativa.png'
import logotipo_alternativo from '../assets/logotipo-alternativo.png'
import { Button } from './Nav'
import Lang from './Lang'
import bars from '../assets/bars.png'
import { useContext } from 'react'
import ExpandedNavContext from '../context/ExpandNavContext'

const Box = styled.nav`
    width: 80vw !important;
    margin: auto;
    padding: .5rem 1rem;
    margin-top: 1rem;
    height: 20rem;
    background-color: #C7DCF7;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .row{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`
const ListItem = styled.li`
    list-style-type: none;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        color: #009788;
        transition: all .3s linear;
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
        color: #009788;
        transition: all .3s linear;
    }
`

const ExpandedNav = () => {
    const navItems = ['Home', 'Serviços', 'Colaboradores', 'Descarte', 'Quem somos nós']
    const {expand, setExpand} = useContext(ExpandedNavContext)



    return (
        <Box>
            <div className='row'>
                <div className="col">
                    <img src={logo_alternativa} alt="" />
                    <img className='logotipo' src={logotipo_alternativo} alt="" />
                </div>
                <img onClick={() => setExpand(!expand)} src={bars} alt="" />
            </div>
            {
                <ul>
                    {navItems.map((item, index) => {
                        return <ListItem key={index}>{item}</ListItem>
                    })
                    }
                </ul>

            }
            <div className='bloco'>
                <IoSearch size='25px' />
                <Button>Cadastre-se</Button>
                <Login>Login</Login>
                <Lang />
            </div>

        </Box>
    )
}

export default ExpandedNav