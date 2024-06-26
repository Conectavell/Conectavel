import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';
import Modal from './Modal';
import axios from 'axios';

const Container = styled.div`
    width: 100%;
    margin: 20px auto;
    display: contents;
    justify-content: center;
    align-items: center;
`;

const Table = styled.table`
    width: 1350px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding: 14px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
    padding: 14px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

const Grid = () => {
    const [usuario, setUsuario] = useState([]);
    const [onedit, setOnEdit] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get("http://localhost:8080/API/Login");
                setUsuario(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários", error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        <Th width="5%">ID</Th>
                        <Th width="10%">Nome</Th>
                        <Th width="10%">Sobrenome</Th>
                        <Th width="20%">Email</Th>
                        <Th width="10%">Senha</Th>
                        <Th width="15%" onlyweb>Data de Nascimento</Th>
                        <Th width="15%" onlyweb>CPF</Th>
                        <Th width="10%" onlyweb>Tipo de Perfil</Th>
                        <Th width="2%"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {usuario.map((item, i) => (
                        <Tr key={i}>
                            <Td width="5%">{item.id}</Td>
                            <Td width="10%">{item.nome}</Td>
                            <Td width="10%">{item.sobrenome}</Td>
                            <Td width="20%">{item.email}</Td>
                            <Td width="10%">{item.senha}</Td>
                            <Td width="15%" onlyweb>{item.datanascimento}</Td>
                            <Td width="15%" onlyweb>{item.cpf}</Td>
                            <Td width="10%" onlyweb>{item.perfil}</Td>
                            <Td alignCenter width="2%" onClick={() => setOpenModal(true)}><FaCog /></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)}>
                {/* children */}
                {/*<p>oi eu sou o children</p>*/}
            </Modal>
        </Container>
    );
}

export default Grid;
