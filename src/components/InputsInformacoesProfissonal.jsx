import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const InputHabilidades = () => {
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

    const hab = [
        'Manutenção de vídeo games',
        'Manutenção de celulares e telefones',
        'Manutenção de televisores',
        'Manutenção de aparelhos domésticos',
        'Manutenção de computadores',
    ]

    function getStyles(name, habilidadesUsuario, theme) {
        return {
            fontWeight:
                habilidadesUsuario.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        }
    }


        const theme = useTheme();
        const {habilidadesUsuario, setHabilidadesUsuario} = useContext(CadastroContext)


        const handleChange = (event) => {
            const { target: { value } } = event
            setHabilidadesUsuario(typeof value === 'string' ? value.split(',') : value)
            // context.habilidades = habilidadesUsuario
            // console.log(context.habilidades)
        }




        return (
            <>
                {/* <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-chip-label">Habilidades de reparo</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={habilidadesUsuario}
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
                        {hab.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, habilidadesUsuario, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
                
                
                
            </>
        )
    }

