import { useContext } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CadastroContext from '../context/CadastroContext'

const BoxInputPequeno = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 4%;
`

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

const InputsPessoais = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setValue } = useContext(CadastroContext)


    const onSubmit = (data) => {
        console.log(data)
        setValue(1)
    }
    
    // const [age, setAge] = React.useState('') fazer isso pra pegar os dados
    // const handleChange = (event) => {
    //     setAge(event.target.value)
    // }

    return (
        <FormCadastro style={{overflow:"hidden"}} onSubmit={handleSubmit(onSubmit)}>

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
                    label="CPF/CNPJ"
                    {...register("cpf", { required: "First Name is required." })}
                    type='number'
                    fullWidth required={true}
                    id="fullWidth"
                    error={Boolean(errors.firstName)}
                />
                <TextField
                    label="CEP"
                    {...register("cep", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='number'
                    fullWidth
                    required={true}
                    id="fullWidth" />
                <TextField
                    label="COMPLEMENTO"
                    {...register("complemento", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    fullWidth
                    required={true}
                    id="fullWidth" />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <TextField
                        label="Número do endereço"
                        required={true} {...register("numeroEndereco", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='number'
                        style={{ width: "48%" }}
                        id="outlined-basic"
                        variant="outlined" />
                    <TextField
                        label="Celular"
                        required={true} {...register("celular", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='number'
                        style={{ width: "48%" }}
                        id="outlined-basic"
                        variant="outlined" />

                    <FormControl
                        style={{ width: "48%" }}>
                        <InputLabel
                            required={true}
                            id="demo-simple-select-label"
                        >Sexo</InputLabel>
                        <Select
                            label="Sexo"
                            {...register("sexo", { required: "First Name is required." })}
                            error={Boolean(errors.firstName)}
                            required={true}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        // value={age}
                        // onChange={handleChange}
                        >
                            <MenuItem value="feminino">Feminino</MenuItem>
                            <MenuItem value="masculino">Masculino</MenuItem>
                            <MenuItem value="outro">Outro</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type='date'
                        {...register("dataNascimento", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        required={true}
                        style={{ width: "48%" }}
                        fullWidth id="fullWidth" />

                </BoxInputPequeno>
                <Button type='submit' className='submit' variant="contained">Continuar</Button>
                </Box>
        </FormCadastro>

    )
}

export default InputsPessoais