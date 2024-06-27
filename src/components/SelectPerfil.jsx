import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'

const SelectPerfil = () => {
    const context = useContext(CadastroContext)
    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={context.tipoPerfil} 
                exclusive
                onChange={(e) => {
                    context.tipoPerfil = e.target.value
                    console.log(context.tipoPerfil)
                }}
                aria-label="Platform">
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="1">Cliente</ToggleButton>
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="2">Profissional</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default SelectPerfil