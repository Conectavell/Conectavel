import { useState, useEffect } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'
import CadastroContext from './context/CadastroContext.jsx'
import axios from 'axios'
import EnderecoContext from './context/EnderecoContext.jsx'

// Hook personalizado para gerenciar o estado do usuário
const useUsuario = () => {
  const [usuario, setUsuario] = useState({
    nacionalidade: '',
    identidade: '',
    cep: '',
    numero: '',
    complemento: '',
    celular: '',
    estadoCivil: '',
    dataNascimento: '',
    sexo: '',
    sobre: '',
    experiencia: '',
    habilidades: '',
    logradouro: '',
    bairro: '',
    estado: '',
    cidade: '',
    tipoPerfil: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    const idUsuario = sessionStorage.getItem('idUsuario');
    if (idUsuario) {
      axios.get(`http://localhost:8080/API/getUsuario/${idUsuario}`)
        .then(response => {
          const data = response.data;
          setUsuario({
            ...usuario,
            nome: data.nomeUsuario,
            sobrenome: data.sobrenomeUsuario,
            email: data.emailUsuario,
            foto: data.fotoPerfilPath,
            celular: data.celularUsuario
          });
          console.log(data);
        })
        .catch(error => console.error('Erro em encontrar dados do usuário:', error));
    }
  }, []);

  return [usuario, setUsuario];
};

function App() {
  const [expand, setExpand] = useState(false);
  const [usuario, setUsuario] = useUsuario();
  const [nextTab, setNextTab] = useState(0);
  const [fill, setFill] = useState(true);
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [complementoUsuario, setComplementoUsuario] = useState('')
  const [cep, setCep] = useState('')
  const [numeroUsuario, setNumeroUsuario] = useState('')


  return (
    // Aplicação dos Providers dos contextos
    <EnderecoContext.Provider value={{ cep, setCep, logradouro, setLogradouro, bairro, setBairro, estado, setEstado, cidade, setCidade, complementoUsuario, setComplementoUsuario, numeroUsuario, setNumeroUsuario }}>
      <CadastroContext.Provider value={{ ...usuario, setUsuario, nextTab, setNextTab, fill, setFill }}>
        <ExpandedNavContext.Provider value={{ expand, setExpand }}>
          <Routes />
        </ExpandedNavContext.Provider>
      </CadastroContext.Provider>
    </EnderecoContext.Provider>
  );
}

export default App;
