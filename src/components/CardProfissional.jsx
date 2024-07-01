import { useContext } from 'react'
import styled from 'styled-components'
import wallpaper from '../assets/wallpaperImage.png'
import CadastroContext from '../context/CadastroContext'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosStar } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const CardProfissional = ({ nome, sobrenome, estado, bairro, experiencia, habilidades, foto }) => {
  const Titulo = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: var(--azul_principal);
`
  const Sub = styled.p`
    color: #413B89;
    font-weight: 500;
    font-size: 15px !important;
    margin-bottom: 5px;
`

  const Box = styled.div`
    .exp{
      width: 300px;
    }
    .area{
    border-radius: 24px;
    min-height: 605px;
  padding-bottom: 2rem;

    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  }
  img{
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    width: 100%;
  }
  .div1{
    margin: 30px 65px 7px;
  }
  .div2{
    margin: 30px 110px 0 0;
    p{
      margin-left: 10px;
    }
  } 
  .div3{
    padding: 50px 50px 0;
  }
  .meio{
    display: flex;
    flex-direction: row;
  }

  
  .sp{
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .perfil{
    width: 200px;
    border-radius: 20px;

  }
  h2{
    font-size: 56px;
    font-weight: 600;
  }
  .comentario{
    border: 1px solid #CECECE;
    border-radius: 10px;
    padding: 10px;
    width: 280px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 5px;
    p{
      font-size: 14px;
    }
  }
  button{
    background-color: var(--azul_principal);
    color: white;
    font-size: 16px;
    width: 530px;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-left: 65px;
  }
.star{
    margin-bottom: 10px;
}
  @media (max-width: 1200px) {
      text-align: center;
      .exp{
      max-width: 300px;
      text-align: center;
      word-wrap: break-word;
    }
      button{
        margin: 0;
      }
      .meio{
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .area{
      padding-bottom: 2rem;
      flex-direction: column;
      height: auto;
      width: 90%;
      margin: auto;
    }
    .div1{
      width: auto;
      height: auto;
      margin: auto;
    }
    .avatar{
        border-radius: 50%;
        width: 180px;
        margin-top: -100px;
    }
    .div2{
      margin: auto;
    }
    h2{
      font-size: 40px;
    }

    height: auto;
    button{
      width: 270px;
    }
    .wallpaper{
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      margin-bottom: 1rem;
      height: 120px;
    }
    .localizacao{
        margin-top: 1rem;
        text-align: center;
    }
    
  }
    `
  const navigate = useNavigate()
  return (
    <>

      <Box>
        <div className="area">
          <img className='wallpaper' src={wallpaper} alt="wallpaper" />
          <div className="meio">
            <div className="div1">
              <img className='perfil' src={foto} alt="técnico" />
              <Titulo className="localizacao">Localização</Titulo>
              <p className="sp">{estado ? estado : "-------"}</p>
              <p>
                <IoLocationOutline />
                {bairro ? bairro : "-------"}
              </p>
            </div>
            <div className="div2">
              <h2>{nome ? nome + " " + sobrenome : "-------"}</h2>

              <Titulo>Desde</Titulo>
              <p>Fevereiro de 2024</p>
              <Titulo>Especialidade</Titulo>
              {
                // tipoPerfil === 1 ?
                habilidades.map((hab, index) => {
                  return <p key={index}>{hab.nomeHabilidade}</p>
                })
                // :
                // ''
              }

              <Titulo>Experiências</Titulo>
              <p className='exp'>{experiencia}</p>

            </div>
            <div className="div3">
              <Titulo>Avaliação de clientes</Titulo>
              <div className="comentario">
                <Sub>Julia dos Santos</Sub>
                <div className='star'>
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                </div>
                <p>Gostei muito do serviço, mas a garantia é curta!</p>
              </div>
              <div className="comentario">
                <Sub>Gabriela Machado</Sub>
                <div className='star'>
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                  <IoIosStar color={"#E9C46A"} size={25} />
                </div>
                <p>Serviço excelente, mas poderia ser mais rápido o conserto!</p>
              </div>
            </div>
          </div>
          <button onClick={() => navigate("/Conectavel/chatprofissional")} type="submit">Contatar</button>
        </div>

      </Box>
    </>
  )
}

export default CardProfissional