import { Box, Button } from '@mui/material'
import PropTypes from 'prop-types';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputsPessoais from './InputsPessoais'
import InputsProfissional from './InputsProfissional'
import styled from 'styled-components';
import CadastroContext from '../context/CadastroContext';

const FormCadastroProfissional = ({ form }) => {

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                style={{ overflow: "hidden" }}
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const {  value } = React.useContext(CadastroContext)

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    width: "80%",
                }}>

                </Box>
                <CustomTabPanel value={value} index={0}>
                    <InputsPessoais />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <InputsProfissional />
                </CustomTabPanel>

                <Tabs value={value} sx={{ margin: "auto", width: "70%" }} aria-label="basic tabs example">
                    <Tab label="Informações pessoais" {...a11yProps(0)} />
                    <Tab label="Informações profissionais" {...a11yProps(1)} />
                </Tabs>
            </Box>

        </>
    )
}

export default FormCadastroProfissional