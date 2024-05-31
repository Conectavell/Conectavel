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
                    <Route path='/CircuSustain' element={<HomePage/>} />
                    <Route path='/CircuSustain/Cadastro' exact element={<CadastroPage/>} />
                    <Route path='/CircuSustain/Login' exact element={<LoginPage/>} />
                    <Route path='/CircuSustain/PreencherCliente' exact element={<CompletarInfoClientePage/>} />
                    <Route path='/CircuSustain/PreencherPrestador' exact element={<CompletarInfoPrestadorPage/>} />
                    <Route path='/CircuSustain/PerfilPrestador' exact element={<PerfilPrestadorPage/>} />
                </Rotas>
            </BrowserRouter>
        </>
    )
}

export default Routes