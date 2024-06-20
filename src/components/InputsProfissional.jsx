import { useContext } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CadastroContext from '../context/CadastroContext'

const FormCadastro = styled.form`
    overflow-y: scroll;
    height: 80%;
    width: 100%;
    padding: 1rem 0;

    .submit{
        transition: .3s ease-in-out;
        background-color: var(--azul_principal);
        padding: .7rem 0;
        border-radius: .5rem;
        }
        .submit:hover{
        background-color: var(--laranja);
    }
`

const InputsProfissional = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setInfoPessoal, setValue } = useContext(CadastroContext)

    const onSubmit = (data) => {
        console.log(data)
    }

    // const [age, setAge] = React.useState('');
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <FormCadastro style={{ overflow: "hidden" }} onSubmit={handleSubmit(onSubmit)}>

            <Box
                sx={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}
            >
                <h2>Complete suas informações</h2>
                <TextField
                    label="Conte-nos sobre você"
                    {...register("sobre", { required: "First Name is required." })}
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    error={Boolean(errors.firstName)}
                />
                <TextField
                    label="Experiência profissional"
                    {...register("experiencia", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='text'
                    fullWidth
                    required={true}
                    id="fullWidth" />
                <TextField
                    label="Habilidades"
                    {...register("habilidades", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='text'
                    fullWidth
                    required={true}
                    id="fullWidth" />

                <FormControl>
                    <InputLabel
                        required={true}
                        id="demo-simple-select-label"
                    >Nacionalidade</InputLabel>
                    <Select
                        label="Nacionalidade"
                        {...register("nacionalidade", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        required={true}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <MenuItem value="feminino">Brasileira</MenuItem>
                        <MenuItem value="masculino">Estadunidente</MenuItem>
                        <MenuItem value="outro">Outros</MenuItem>
                    </Select>
                </FormControl>

                {/* <Button  className='submit' onClick={()=>setValue(0)} variant="contained">Voltar</Button> */}
                <Button type='submit' className='submit' variant="contained">Enviar informações</Button>
            </Box>
        </FormCadastro>

    )
}

export default InputsProfissional