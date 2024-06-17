import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import ConectavelLogo from "../components/ConectavelLogo"
import { BoxInputPequeno, FormCadastro } from "../components/InputsPessoais"
import CadastroContext from "../context/CadastroContext"
import { useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"
// inputs para cadastrar o cliente

const CompletarInfoClientePage = () => {
    const { register, formState: { errors } } = useForm();
    const {
        identidadeUsuario, setIdentidadeUsuario,
        cepUsuario, setCepUsuario,
        numeroUsuario, setNumeroUsuario,
        complementoUsuario, setComplementoUsuario,
        celularUsuario, setCelularUsuario,
        dataNascimentoUsuario, setDataNascimentoUsuario,
        sexoUsuario, setSexoUsuario,
    } = useContext(CadastroContext)

    const location = useLocation();

    const completarCadastro = (perfil, nome, email, senha, nacionalidade, identidade, cep, numero, complemento, celular, estado, data, sexo) => {
        axios.post('http://localhost:8080/api/v1/usuario', {
            tipoDePerfilUsuario: `${perfil}`,
            nomeUsuario: `${nome}`,
            emailUsuario: `${email}`,
            senhaUsuario: `${senha}`,
            nacionalidadeUsuario: `${nacionalidade}`,
            cpfUsuario: `${identidade}`,
            cepUsuario: `${cep}`,
            numeroUsuario: `${numero}`,
            complementoUsuario: `${complemento}`,
            celularUsuario: `${celular}`,
            estadoCivilUsuario: `${estado}`,
            dataNascimentoUsuario: `${data}`,
            sexoUsuario: `${sexo}`
        }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            }
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        completarCadastro(location.state.tipoPerfil, location.state.nomeUsuario, location.state.emailUsuario, location.state.senhaUsuario, identidadeUsuario, cepUsuario, numeroUsuario, complementoUsuario, celularUsuario, dataNascimentoUsuario, sexoUsuario);
        console.log("logado")
    }

    return (
        <ConectavelLogo>
            <FormCadastro style={{ overflow: "hidden" }} onSubmit={handleSubmit}>
                <Box
                    sx={{
                        width: "90%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                    <h2>Complete suas informações</h2>

                    <TextField
                        label="CPF/CNPJ"
                        {...register("identidadeUsuario", { required: "CPF/CNPJ is required." })}
                        type='number'
                        fullWidth required={true}
                        id="fullWidth"
                        error={Boolean(errors.identidadeUsuario)}

                        value={identidadeUsuario}
                        onChange={e => {
                            setIdentidadeUsuario(e.target.value)
                            console.log(identidadeUsuario)
                        }}
                    />
                    <TextField
                        label="CEP"
                        {...register("cepUsuario", { required: "CEP is required." })}
                        error={Boolean(errors.cepUsuario)}
                        type='number'
                        fullWidth
                        required={true}
                        value={cepUsuario}
                        onChange={e => {
                            setCepUsuario(e.target.value)
                            console.log(cepUsuario)
                        }}
                        id="fullWidth" />
                    <TextField
                        label="Complemento"
                        {...register("complementoUsuario", { required: "Complemento is required." })}
                        error={Boolean(errors.complementoUsuario)}
                        fullWidth
                        required={true}
                        value={complementoUsuario}
                        onChange={e => {
                            setComplementoUsuario(e.target.value)
                            console.log(complementoUsuario)
                        }}
                        id="fullWidth" />

                    <BoxInputPequeno sx={{ margin: "auto", }}>
                        <TextField
                            label="Número do endereço"
                            required={true} {...register("numeroUsuario", { required: "Número do endereço is required." })}
                            error={Boolean(errors.numeroUsuario)}
                            type='number'
                            style={{ width: "48%" }}
                            id="outlined-basic"
                            value={numeroUsuario}
                            onChange={e => {
                                setNumeroUsuario(e.target.value)
                                console.log(numeroUsuario)
                            }}
                            variant="outlined" />
                        <TextField
                            label="Celular"
                            required={true} {...register("celularUsuario", { required: "Celular is required." })}
                            error={Boolean(errors.celularUsuario)}
                            type='number'
                            style={{ width: "48%" }}
                            id="outlined-basic"
                            value={celularUsuario}
                            onChange={e => {
                                setCelularUsuario(e.target.value)
                                console.log(celularUsuario)
                            }}
                            variant="outlined" />

                        <FormControl
                            style={{ width: "48%" }}>
                            <InputLabel
                                required={true}
                                id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                label="Sexo"
                                {...register("sexoUsuario", { required: "Sexo is required." })}
                                error={Boolean(errors.sexoUsuario)}
                                required={true}
                                value={sexoUsuario}
                                onChange={e => {
                                    setSexoUsuario(e.target.value)
                                    console.log(sexoUsuario)
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                            
                                <MenuItem value="feminino">Feminino</MenuItem>
                                <MenuItem value="masculino">Masculino</MenuItem>
                                <MenuItem value="outro">Outro</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            type='date'
                            {...register("dataNascimentoUsuario", { required: "Data de nascimento is required." })}
                            error={Boolean(errors.dataNascimentoUsuario)}
                            required={true}
                            style={{ width: "48%" }}
                            value={dataNascimentoUsuario}
                            onChange={e => {
                                setDataNascimentoUsuario(e.target.value)
                                console.log(dataNascimentoUsuario)
                            }}
                            fullWidth id="fullWidth" />
                    </BoxInputPequeno>

                    <Button
                        disabled={!(identidadeUsuario && cepUsuario && numeroUsuario && complementoUsuario && celularUsuario && dataNascimentoUsuario && sexoUsuario)}
                        type="submit"
                        style={{ width: "100%", margin: "1rem auto" }}
                        variant="contained">Enviar informações</Button>
                </Box>
            </FormCadastro>
        </ConectavelLogo>
    )
}

export default CompletarInfoClientePage