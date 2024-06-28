import react, { useState, useContext } from 'react';
import styled from 'styled-components';
import CadastroContext from '../context/CadastroContext';
import { CgProfile } from "react-icons/cg"
import Card from '../components/Card_Admin';
import Modal from '../components/Modal_Admin';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';


const MainWrapper = styled.main`
    width: 100vw;
    height: 100vh;
`

const NavBar = styled.nav`
    width: 100%;
    height: 71px;
    background: #175EC6;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

const LadoEsquerdoNav = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
`

const NomeUsuario = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    color: white;
`

const DadosWrapper = styled.section`
    height: 100%;
    width: 100%;
    padding: 20px 10px;
`

const CardsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    gap: 10px;
`

const ButtonModal = styled.button`
    width: 10%;
    height: 100%;
    border-radius: 20px;
    border: none;
`

const CloseButton = styled.button`
    background: none;
    border: none;
`

const Admin_Options = styled.button`
    width: 100%;
    height: 10%;
    border-radius: 50px;
    background: #FB8C00;
    border: none;
    

    p{
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
    }
`


const AdminPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const context = useContext(CadastroContext)

    const [profissional, setProfissional] = useState(0)
    const [admin, setAdmin] = useState(0)
    const [usuariosTotal, setUsuariosTotal] = useState(0)
    const [clientes, setClientes] = useState(0);


    axios.get("http://localhost:8080/API/contarUsuarios").then(function (response) {
        setUsuariosTotal(response.data)
    }).catch(function (error) {
        console.log(error);
    })

    axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${2}`).then(function (response) {
        setProfissional((response.data) ? response.data : 0)
    }).catch(function (error) {
        console.log(error);
    })

    axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${1}`).then(function (response) {
        setClientes((response.data) ? response.data : 0)
    }).catch(function (error) {
        console.log(error);
    })

    axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${3}`).then(function (response) {
        setAdmin((response.data) ? response.data : 0)
    }).catch(function (error) {
        console.log(error);
    })
    


    const [marcPonto, setMarcPont] = useState('')
    const [Long, setLongPont] = useState('')
    const [LatiPont, setLatiPont] = useState('')

    const AdicionarPonto = () => {
        let opcao = 0;

        while (opcao == 0) {
            setMarcPont(prompt(`Digite o nome do marcador do ponto:`))
            setLongPont(prompt(`Digite o valor da Longitude: `))
            setLatiPont(prompt(`Digite o valor da Latitude`))

            opcao = parseInt(prompt(`Você deseja continuar com esses valores?
                ${Long} e ${LatiPont} e ${marcPonto}
                1 - Sim
                0 - Não`))
        }

        axios.post("http://localhost:8080/API/SalvarPonto", {
            "marcadorPonto":`${marcPonto}`,
            "latitudePonto":`${Long}`,
            "longitudePonto":`${LatiPont}`
        }).then(function (response) {
            alert("Cadastro de novo ponto realizado!"+ response)
        }).catch(function (error) {
            alert(error)
        })
    }

    return (
        <MainWrapper>
            <NavBar>
                <LadoEsquerdoNav>
                    <CgProfile size={55} color='white' />
                    <NomeUsuario>Conta de Adiministrador(a)</NomeUsuario>
                </LadoEsquerdoNav>
                <ButtonModal onClick={() => setOpenModal(true)}>Opções</ButtonModal>
            </NavBar>
            <DadosWrapper>
                <CardsWrapper>
                    <Card tipo={"Usuários Totais"} val={usuariosTotal}>

                    </Card>
                    <Card tipo={"Clientes"} val={clientes}>

                    </Card>
                    <Card tipo={"Profissionais"} val={profissional}>

                    </Card>
                    <Card tipo={"Admins"} val={admin}>

                    </Card>
                </CardsWrapper>
            </DadosWrapper>
            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                <Admin_Options onClick={AdicionarPonto}>
                    <p>Adicionar ponto de coleta</p>
                </Admin_Options>
            </Modal>
        
        </MainWrapper>
    )
}

export default AdminPage;