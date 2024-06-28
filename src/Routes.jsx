import { BrowserRouter, Route, Routes as Rotas, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ColaboradoresPage from './pages/ColaboradoresPage'
import QuemSomosPage from './pages/QuemSomosPage'
import DescartePage from './pages/DescartePage'
import ClienteOrcamento from './pages/ClienteOrcamento'
import ChatProfissional from './pages/ChatProfissional'
import ClienteAvaliacao from './pages/ClienteAvaliacaoPage'
import PerfilClientePage from './pages/PerfilClientePage'
import PreencherPrestadorPage from './pages/PreencherPrestadorPage'
import ConfiguracoesPage from './pages/ConfiguracoesPage'
import SegurancaPage from './pages/SegurancaPage'
import AdminPage from './pages/AdminPage'
import PreencherClientePage from './pages/PreencherClientePage'
import Auth from './context/Auth'

function PrivateRoute({ children }) {
    return Auth() ? <>{children}</> : <Navigate to="/Conectavel" />
}

{/* Import Administração */ }
import PaginaTbUsuarios from './pages/PaginaTbUsuarios'
import SelecionarPrestador from './pages/SelecionarPrestadorPage'
import ServicosPage from './pages/ServicosPage'
import PerfilProfissionalPage from './pages/PerfilProfissionalPage'

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>
                    <Route path='/Conectavel' element={<HomePage />} />
                    <Route path='/Conectavel/login' element={<LoginPage />} />
                    <Route path="/Conectavel/descarte" element={<DescartePage />} />

                    <Route path='/Conectavel/cadastro' element={<CadastroPage />} />
                    <Route path='/Conectavel/preencherprestador' element={<PreencherPrestadorPage />} />
                    <Route path='/Conectavel/preenchercliente' element={<PreencherClientePage />} />
                    <Route path='/Conectavel/ClienteAvaliacaoPage' element={<ClienteAvaliacao />} />


                    <Route path='/Conectavel/colaboradores' element={<ColaboradoresPage />} />
                    <Route path='/Conectavel/quemsomos' element={<QuemSomosPage />} />
                    <Route path='/Conectavel/Serviços' element={<ServicosPage />} />


                    <Route path='/Conectavel/cadastro' element={<CadastroPage />} />
                    <Route path='/Conectavel/preencherprestador' element={<PreencherPrestadorPage />} />
                    <Route path='/Conectavel/preenchercliente' element={<PreencherClientePage />} />

                    


                    <Route path="/Conectavel/selecionarprofissional" element={<SelecionarPrestador />} />
                    <Route path="/Conectavel/profissional" element={<PerfilProfissionalPage />} />


                    


                    {/* ------------ telas de configuracoes do usuario ------------ */}

                    {/* <Route path='/Conectavel/configuracoes' element={<ConfiguracoesPage />} /> */}


  

                    {/* ------------ telas de configuracoes do usuario ------------ */}
                    <Route path='/Conectavel/orcamento' element={<PrivateRoute><ClienteOrcamento /></PrivateRoute>} />

                    <Route path='/Conectavel/configuracoes' element={<PrivateRoute><ConfiguracoesPage /></PrivateRoute>} />
                    <Route path='/Conectavel/configuracoes/seguranca' element={<PrivateRoute><SegurancaPage /></PrivateRoute>} />
                    <Route path='/Conectavel/perfilcliente' element={<PrivateRoute><PerfilClientePage /></PrivateRoute>} />
                    {/* <Route path='/Conectavel/perfilprestador' element={<PrivateRoute><PerfilPrestadorPage /></PrivateRoute>} /> */}
                    {/* <Route path='/Conectavel/chatprofissional' exact element={<PrivateRoute><ChatProfissional /></PrivateRoute>} /> */}
                    <Route path='/Conectavel/chatprofissional' exact element={<ChatProfissional />} />
                    <Route path='/Conectavel/perfilprestador' element={<PerfilPrestadorPage />} />

                    {/* Rotas Administração */}
                    <Route path='/Conectavel/tbusuarios' exact element={<PaginaTbUsuarios />} />
                    <Route path='/Conectavel/Admin' element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}



export default Routes