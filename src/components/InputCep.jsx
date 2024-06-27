import { useContext} from 'react'
import { TextField } from '@mui/material'
import CadastroContext from '../context/CadastroContext'
import axios from "axios";
import ReactInputMask from 'react-input-mask'
import EnderecoContext from '../context/EnderecoContext';

const InputCep = () => {
    // const { setLogradouro} = useContext(CadastroContext)
    const context = useContext(CadastroContext)
    const { setLogradouro,
        setBairro,
        setEstado,
        setCidade,
        cep,setCep } = useContext(EnderecoContext)

    async function getCEP() {
        const baseURL = `https://viacep.com.br/ws/${cep}/json/`
        const res = await axios.get(baseURL)
        const data = await res.data

        // exibir dados autopreenchidos para o usuario
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setEstado(data.uf)
        setCidade(data.localidade)
        setCep(data.cep)

        // colocar no context
        context.logradouro = data.logradouro
        context.bairro = data.bairro
        context.estado = data.uf
        context.cidade = data.localidade
        context.cep = data.cep

        
    }
    return (
        <>
            <ReactInputMask
                mask="99999-999"
                value={cep}
                onChange={e => {
                    setCep(e.target.value)
                    context.cep = cep
                    // console.log(cepUsuario)
                }}
                onBlur={() => getCEP(cep)}
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