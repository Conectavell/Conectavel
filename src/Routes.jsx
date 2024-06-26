import { BrowserRouter, Route, Routes as Rotas, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ColaboradoresPage from './pages/ColaboradoresPage'
import QuemSomosPage from './pages/QuemSomosPage'
import DescartePage from './pages/DescartePage'
import ClienteOrcamento from './pages/ClienteOrcamento'


import PerfilClientePage from './pages/PerfilClientePage'
import PreencherPrestadorPage from './pages/PreencherPrestadorPage'
import PreencherClientePage from './pages/PreencherClientePage'
import ConfiguracoesPage from './pages/ConfiguracoesPage'
import SegurancaPage from './pages/SegurancaPage'
import Auth from './context/Auth'
import AdminPage from './pages/AdminPage'

function PrivateRoute({ children }) {
    return Auth() ? <>{children}</> : <Navigate to="/Conectavel" />
}

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>
                    <Route path='/Conectavel' element={<HomePage />} />
                    <Route path='/Conectavel/login' element={<LoginPage />} />

                    <Route path='/Conectavel/cadastro' element={<CadastroPage />} />
                    <Route path='/Conectavel/preencherprestador' element={<PreencherPrestadorPage />} />
                    <Route path='/Conectavel/preenchercliente' element={<PreencherClientePage />} />

                    <Route path='/Conectavel/colaboradores' element={<ColaboradoresPage />} />
                    <Route path='/Conectavel/quemsomos' element={<QuemSomosPage />} />

                    <Route path="/Conectavel/descarte" element={<DescartePage />} />
                    <Route path='/Conectavel/orcamento' element={<ClienteOrcamento />} />

                    {/* ------------ telas de configuracoes do usuario ------------ */}

                    <Route path='/Conectavel/configuracoes' element={<ConfiguracoesPage />} />
                    <Route path='/Conectavel/configuracoes/seguranca' element={<SegurancaPage />} />
                    

                    <Route path='/Conectavel/perfilcliente' element={<PrivateRoute><PerfilClientePage /></PrivateRoute>} />
                    <Route path='/Conectavel/perfilprestador' element={<PrivateRoute><PerfilPrestadorPage /></PrivateRoute>} />
                    <Route path='/Conectavel/Admin' element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}



export default Routes
