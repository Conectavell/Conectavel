import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'

const SelectPerfil = () => {
    const { tipoPerfil, setTipoPerfil } = useContext(CadastroContext)
    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={tipoPerfil}
                exclusive
                onChange={(e) => {
                    setTipoPerfil(e.target.value)
                    console.log(tipoPerfil)
                }}
                aria-label="Platform">
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="1">Cliente</ToggleButton>
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="2">Profissional</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default SelectPerfil