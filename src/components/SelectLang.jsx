import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import pt from '../assets/br.png'
import en from '../assets/en.png'

export default function SelectLang() {
    const [lang, setLang] = useState('pt');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <FormControl sx={{
            m: 0, padding: 0, minWidth: 120, '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' }, '& .MuiSelect-select': {
                padding: 0,
                color: '#fff',
                fontSize: '.9em',
            }
        }}>
            <Select
                value={lang}
                onChange={handleChange}
                defaultValue={lang}
            >
                <MenuItem value="pt"><img style={{marginRight: '.3rem'}} width={25} src={pt} alt="Bandeira do Brasil" /> PT-BR</MenuItem>
                <MenuItem value="en"><img style={{marginRight: '.3rem'}} width={25} src={en} alt="Bandeira do USA" /> EN</MenuItem>
            </Select>


        </FormControl>
    );
}
