import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import LoginPage from './pages/LoginPage'
import CompletarInfoClientePage from './pages/CompletarInfoClientePage'
import CompletarInfoPrestadorPage from './pages/CompletarInfoPrestadorPage'
import PerfilPrestadorPage from './pages/PerfilPrestadorPage'
import ComponentesPadrao from './components/ComponentesPadrao'
import ComponentesPadraoServicos from './components/ComponentesPadraoServicos'

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Rotas>

                    {/* rotas com componentes padroes */}
                    <Route path='/Conectavel' element={<ComponentesPadrao />}>
                        <Route index element={<HomePage />} />
                        <Route path='/Conectavel/Cadastro' exact element={<CadastroPage />} />
                        <Route path='/Conectavel/Login' exact element={<LoginPage />} />
                        <Route path='/Conectavel/PreencherCliente' exact element={<CompletarInfoClientePage />} />
                        <Route path='/Conectavel/PreencherPrestador' exact element={<CompletarInfoPrestadorPage />} />
                    </Route>

                    {/* rotas com componentes padroes */}

                    {/* se trocar de "profissional" para "cliente" os itens da barra de navegação mudarão conforme o usuario */}
                    <Route path='/Conectavel' element={<ComponentesPadraoServicos usuario="profissional"/>}>
                        <Route path='/Conectavel/PerfilPrestador' exact element={<PerfilPrestadorPage />} />
                    </Route>
                </Rotas>

            </BrowserRouter>
        </>
    )
}

export default Routes