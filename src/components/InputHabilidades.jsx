import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CadastroContext from '../context/CadastroContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const hab = [
    'Manutenção de vídeo games',
    'Manutenção de celulares e telefones',
    'Manutenção de televisores',
    'Manutenção de aparelhos domésticos',
    'Manutenção de computadores',
];

export default function InputHabilidades() {
    const { habilidadesUsuario, setHabilidadesUsuario } = React.useContext(CadastroContext)

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setHabilidadesUsuario(
            typeof value === 'string' ? value.split(',') : value
        );
        console.log(habilidadesUsuario)
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">Habilidades de reparo</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={habilidadesUsuario}
                    onChange={handleChange}
                    input={<OutlinedInput label="Habilidades de reparo" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {hab.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={habilidadesUsuario.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}