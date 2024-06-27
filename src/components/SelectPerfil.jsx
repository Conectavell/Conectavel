import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'

const SelectPerfil = () => {
    const { tipoPerfil, setTipoPerfil } = useContext(CadastroContext)
    const [provisorio,setProvisorio] = useState('') // apagar apos gravar as telas
    return (
        <>
            <ToggleButtonGroup
                color="primary"
                // value={tipoPerfil} // descomentar apos gravar as telas
                value={provisorio}
                exclusive
                onChange={(e) => {
                    // setTipoPerfil(e.target.value) // descomentar apos gravar as telas
                    setProvisorio(e.target.value)
                    console.log(provisorio)
                    // console.log(tipoPerfil) // descomentar apos gravar as telas
                }}
                aria-label="Platform">
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="1">Cliente</ToggleButton>
                <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="2">Profissional</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default SelectPerfil