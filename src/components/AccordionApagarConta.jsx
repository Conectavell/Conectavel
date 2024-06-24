import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import styled from "styled-components";

const DetailText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    p:first-child{
        font-size: 1.2em;
        font-weight: 500;
    }
`
const ContainerButtons = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    @media (max-width:992px){
        flex-direction: column;
        
    }
`


const AccordionApagarConta = () => {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey)
        return (
            <Button
            className="mt-3 mt-md-0"
                color="error"
                variant="contained"
                onClick={decoratedOnClick}>
                Deletar
            </Button>
        );
    }


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const { setSenhaUsuario, senhaUsuario } = useContext(CadastroContext)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <>

            <Accordion defaultActiveKey={false}>
                <Card className="p-2 border-0">
                    <ContainerButtons>
                        <DetailText>
                            <p className="m-0">Deletar conta</p>
                            <p className="m-0">Delete de forma permanente sua conta</p>
                        </DetailText>
                        <CustomToggle eventKey={true} />
                    </ContainerButtons>
                    <Accordion.Collapse eventKey={true}>
                        <Card.Body className="p-0 pt-3">

                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    required={true}
                                    htmlFor="outlined-adornment-password">Digite sua senha para confirmar</InputLabel>
                                <OutlinedInput
                                    // value={senhaUsuario}
                                    // onChange={e => {
                                    //     setSenhaUsuario(e.target.value)
                                    //     // console.log(senhaUsuario)
                                    // }}
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
                                    label="Digite sua senha para confirmar"
                                />
                            </FormControl>

                            <Button disabled sx={{ margin: "1rem 0" }} fullWidth color="error" variant="contained">Deletar minha conta permanentemente</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        </>
    )
}


export default AccordionApagarConta