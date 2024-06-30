import { BrowserRouter, Route, Routes as Rotas, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ColaboradoresPage from './pages/ColaboradoresPage'
import QuemSomosPage from './pages/QuemSomosPage'
import DescartePage from './pages/DescartePage'
import ClienteOrcamento from './pages/ClienteOrcamento'
import Comunidade from './pages/Comunidade'
import TechnicianProfile from './pages/TechnicianProfile'
import Dashboard from './pages/Dashboard'
import ChatProfissional from './pages/ChatProfissional'
import PerfilClientePage from './pages/PerfilClientePage'
import PreencherPrestadorPage from './pages/PreencherPrestadorPage'
import PreencherClientePage from './pages/PreencherClientePage'
import ConfiguracoesPage from './pages/ConfiguracoesPage'
import SegurancaPage from './pages/SegurancaPage'
import AdminPage from './pages/AdminPage'
import SelecionarPrestador from './pages/SelecionarPrestadorPage'
import ServicosPage from './pages/ServicosPage'
import PerfilProfissionalPage from './pages/PerfilProfissionalPage'
// import ClienteAvaliacaoPage from './pages/ClienteAvaliacaoPage'
import usuarioFiltrado from './pages/ProfissionalFiltrado'
import Auth from './context/Auth'

function PrivateRoute({ children }) {
    return Auth() ? <>{children}</> : <Navigate to="/Conectavel" />
}

{/* Import Administração */ }
import PaginaTbUsuarios from './pages/PaginaTbUsuarios'

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>
                    <Route path='/Conectavel' element={<HomePage />} />
                    <Route path='/Conectavel/login' element={<LoginPage />} />
                    <Route path="/Conectavel/descarte" element={<DescartePage />} />
                    <Route path='/Conectavel/colaboradores' element={<ColaboradoresPage />} />
                    <Route path='/Conectavel/quemsomos' element={<QuemSomosPage />} />
                    <Route path='/Conectavel/Serviços' element={<ServicosPage />} />

                    <Route path='/Conectavel/cadastro' element={<CadastroPage />} />
                    <Route path='/Conectavel/preencherprestador' element={<PreencherPrestadorPage />} />
                    <Route path='/Conectavel/preenchercliente' element={<PreencherClientePage />} />
                    {/* <Route path='/Conectavel/avaliacaocliente' element={<ClienteAvaliacaoPage />} /> */}


                    <Route path='/Conectavel/perfilprestador' element={<PrivateRoute><PerfilPrestadorPage /></PrivateRoute>} />
                    <Route path='/Conectavel/perfilcliente' element={<PrivateRoute><PerfilClientePage /></PrivateRoute>} />

                    <Route path="/Conectavel/selecionarprofissional" element={<PrivateRoute><SelecionarPrestador /></PrivateRoute>} />
                    <Route path='/Conectavel/orcamento' element={<PrivateRoute><ClienteOrcamento /></PrivateRoute>} />
                    <Route path='/Conectavel/chatprofissional' exact element={<PrivateRoute><ChatProfissional /></PrivateRoute>} />
                    <Route path="/Conectavel/profissional" element={<PrivateRoute><PerfilProfissionalPage /></PrivateRoute>} />

                    {/* <Route path='/Conectavel/comunidade' exact element={<Comunidade/>} /> */}

                    <Route path='/Conectavel/TechnicianProfile' exact element={<TechnicianProfile/>} />
                    <Route path='/Conectavel/Dashboard' exact element={<Dashboard/>} />


                    {/* ------------ telas de configuracoes do usuario ------------ */}
                    <Route path='/Conectavel/configuracoes' element={<PrivateRoute><ConfiguracoesPage /></PrivateRoute>} />
                    <Route path='/Conectavel/configuracoes/seguranca' element={<PrivateRoute><SegurancaPage /></PrivateRoute>} />

                    {/* Rotas Administração */}
                    <Route path='/Conectavel/tbusuarios' exact element={<PaginaTbUsuarios />} />
                    <Route path='/Conectavel/Admin' element={<PrivateRoute><AdminPage /></PrivateRoute>} />

                    {/* Tela do profissional filtrado */}
                    <Route path='/Conectavel/:usuarioSelecionado' element={<PrivateRoute><usuarioFiltrado/></PrivateRoute>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}



export default Routes