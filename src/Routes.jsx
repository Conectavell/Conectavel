import React from 'react'
import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import CompletarInfoClientePage from './pages/CompletarInfoClientePage'
import CompletarInfoPrestadorPage from './pages/CompletarInfoPrestadorPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'

const Routes = () => {
    
    return (
        <>
            <BrowserRouter>
                <Rotas>
                    <Route path='/Conectavel' element={<HomePage/>} />
                    <Route path='/Conectavel/Cadastro' exact element={<CadastroPage/>} />
                    <Route path='/Conectavel/Login' exact element={<LoginPage/>} />
                    <Route path='/Conectavel/PreencherCliente' exact element={<CompletarInfoClientePage/>} />
                    <Route path='/Conectavel/PreencherPrestador' exact element={<CompletarInfoPrestadorPage/>} />
                    <Route path='/Conectavel/PerfilPrestador' exact element={<PerfilPrestadorPage/>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}

export default Routes