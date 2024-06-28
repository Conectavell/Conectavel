import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext';

const InputSenha = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { setSenhaUsuario, senhaUsuario } = useContext(CadastroContext)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <FormControl variant="outlined">
                <InputLabel
                    required={true}
                    htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    value={senhaUsuario}
                    onChange={e => {
                        setSenhaUsuario(e.target.value)
                        // console.log(senhaUsuario)
                    }}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}

                            </IconButton>
                        </InputAdornment>
                    }
                    label="Senha"
                />
            </FormControl>

        </>
    )
}

export default InputSenha