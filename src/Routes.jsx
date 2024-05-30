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
                    <Route path='/Cadastro' exact element={<CadastroPage/>} />
                    <Route path='/Login' exact element={<LoginPage/>} />
                    <Route path='/PreencherCliente' exact element={<CompletarInfoClientePage/>} />
                    <Route path='/PreencherPrestador' exact element={<CompletarInfoPrestadorPage/>} />
                    <Route path='/PerfilPrestador' exact element={<PerfilPrestadorPage/>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}

export default Routes