import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
// import CompletarInfoClientePage from './pages/CompletarInfoClientePage'
import CompletarInfoPrestadorPage from './pages/CompletarInfoPrestadorPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ColaboradoresPage from './pages/ColaboradoresPage'
import QuemSomosPage from './pages/QuemSomosPage'
import DescartePage from './pages/DescartePage'
import ClienteOrcamento from './pages/ClienteOrcamento'

import ChatProfissional from './pages/ChatProfissional'

import PerfilClientePage from './pages/PerfilClientePage'

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>
                    <Route path='/Conectavel' element={<HomePage />} />
                    <Route path='/Conectavel/cadastro' element={<CadastroPage />} />
                    <Route path='/Conectavel/login' element={<LoginPage />} />
                    {/* <Route path='/Conectavel/preenchercliente' element={<CompletarInfoClientePage />} /> */}
                    <Route path='/Conectavel/preencherprestador' element={<CompletarInfoPrestadorPage />} />
                    <Route path='/Conectavel/colaboradores' element={<ColaboradoresPage />} />
                    <Route path='/Conectavel/quemsomos' element={<QuemSomosPage />} />

                    <Route path="/Conectavel/perfilprestador" element={<PerfilPrestadorPage />} />
                    <Route path="/Conectavel/perfilcliente" element={<PerfilClientePage />} />                 

                    <Route path="/Conectavel/descarte" element={<DescartePage />} />
                    <Route path='/Conectavel/orcamento' element={<ClienteOrcamento />} />


                    <Route path='/Conectavel/ChatProfissional' exact element={<ChatProfissional/>} />
                </Rotas>


            </BrowserRouter>
        </>
    )
}

export default Routes
