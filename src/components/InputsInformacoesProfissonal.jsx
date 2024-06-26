import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { useUsuario } from '../App';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const names = [
    'Manutenção de vídeo games',
    'Manutenção de celulares e telefones',
    'Manutenção de televisores',
    'Manutenção de aparelhos domésticos',
    'Manutenção de computadores',
]

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}


export const InputHabilidades = () => {
    const theme = useTheme();
    const [personName, setPersonName] = useState([])
    // const  [usuario, setUsuario ] = useUsuario()
    // const { usuario, setUsuario } = useContext(CadastroContext)


    const handleChange = (event) => {
        const { target: { value } } = event
        setPersonName(typeof value === 'string' ? value.split(',') : value)
        // setUsuario({
        //     ...usuario,
        //     habilidades: [event.target.value]
        // })
        // console.log(usuario.habilidades[0])
        // console.log(event.target.value)
    }


    return (
        <>
            <FormControl fullWidth>
                <InputLabel required id="demo-multiple-chip-label">Habilidades de reparo</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Habilidades de reparo" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}
