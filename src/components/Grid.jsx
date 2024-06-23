import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;
export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start") };
    width: ${(props) => (props.width ? props.width : "auto") };

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;



const Grid = () => {

    const [usuario, setUsuario] = useState([{nome: "Gabriel", email: "Gabriel@gmail.com", fone: "11 98773-3990"},2,3,4]);

  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th onlyweb>Fone</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {usuario.map ((item, i) => (
                <Tr key={i}>
                    <Td width="30%">{item.nome}</Td>
                    <Td width="30%">{item.email}</Td>
                    <Td width="30%" onlyweb>{item.fone}</Td>
                    <Td alignCenter width="5%"><FaEdit/></Td>
                    <Td alignCenter width="5%"><FaTrash/></Td>
                </Tr>
             ))}
        </Tbody>
    </Table>
  )
}

export default Grid
