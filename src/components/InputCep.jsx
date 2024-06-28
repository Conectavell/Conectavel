import { useContext } from 'react'
import { TextField } from '@mui/material'
import CadastroContext from '../context/CadastroContext'
import axios from "axios";
import ReactInputMask from 'react-input-mask'

const InputCep = () => {
    const {
        cepUsuario, setCepUsuario,
        setLogradouro,
        setBairro,
        setEstado,
        setCidade
    } = useContext(CadastroContext)

    async function getCEP() {
        const baseURL = `https://viacep.com.br/ws/${cepUsuario}/json/`
        const res = await axios.get(baseURL)
        const data = await res.data
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setEstado(data.uf)
        setCidade(data.localidade)
        setCepUsuario(data.cep)
    }

    if(cepUsuario.length === 9){
        getCEP(cepUsuario)
    }
    return (
        <>
            <ReactInputMask
                mask="99999-999"
                value={cepUsuario}
                onChange={e => {
                    setCepUsuario(e.target.value)
                    // console.log(cepUsuario)
                }}
                disabled={false}
                maskChar=" "
            >
                {() => (
                    <TextField
                        label="CEP"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        type='text'
                        fullWidth
                        required={true}
                        id="fullWidth" />
                )}
            </ReactInputMask>
        </>
    )
}

export default InputCep