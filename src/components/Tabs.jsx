import { useContext } from 'react'
import styled from 'styled-components'
import CadastroContext from '../context/CadastroContext'

const Bar = styled.div`
    border-radius: 3px;
    width: 43.5%;
    height: 15px;
    background-color: ${(props) => props.fill ? "var(--azul_principal)" : "transparent"} ;
    border: 2px solid var(--azul_principal);
    cursor: pointer;
    margin: 1rem 0;
`
export const BoxBars = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`
const Tabs = () => {
    const { setNextTab, fill, setFill } = useContext(CadastroContext)
    return (
        <>
            <BoxBars>
                <Bar fill={fill} onClick={() => {
                    setNextTab(0)
                    setFill(true)
                }} />
                <Bar fill={!fill} onClick={() => {
                    setNextTab(1)
                    setFill(false)
                }} />
            </BoxBars>

        </>
    )
}

export default Tabs