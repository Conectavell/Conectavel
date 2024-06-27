import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext';

const InputSenha = ({ fullWidth, sx }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [senhaUsuario, setSenhaUsuario] = useState('')
    const context = useContext(CadastroContext)

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <FormControl sx={sx ? { marginTop: "1rem" } : ''} fullWidth={fullWidth ? true : false} variant="outlined">
                <InputLabel
                    required={true}
                    htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    value={senhaUsuario}
                    onChange={e => {
                        setSenhaUsuario(e.target.value)
                        context.senha = senhaUsuario
                        // console.log(context.senha)
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