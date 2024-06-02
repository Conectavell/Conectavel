import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import CompletarInfoClientePage from './pages/CompletarInfoClientePage'
import CompletarInfoPrestadorPage from './pages/CompletarInfoPrestadorPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ColaboradoresPage from './pages/ColaboradoresPage'
import QuemSomosPage from './pages/QuemSomosPage'

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>

                    <Route path='/Conectavel' element={<HomePage />} />
                    <Route path='/Conectavel/Cadastro' exact element={<CadastroPage />} />
                    <Route path='/Conectavel/Login' element={<LoginPage />} />
                    <Route path='/Conectavel/PreencherCliente' element={<CompletarInfoClientePage />} />
                    <Route path='/Conectavel/PreencherPrestador' element={<CompletarInfoPrestadorPage />} />
                    <Route path='/Conectavel/Colaboradores' element={<ColaboradoresPage />} />
                    <Route path='/Conectavel/QuemSomos' element={<QuemSomosPage />} />


                    <Route path="/Conectavel/PerfilPrestador" element={<PerfilPrestadorPage />} />

                </Rotas>

            </BrowserRouter>
        </>
    )
}

export default Routes