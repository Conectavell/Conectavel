import React, { useContext } from 'react'
import styled from 'styled-components'
import avatar from '../assets/Avatar Image.png'
import wallpaper from '../assets/wallpaperImage.png'
import frame from '../assets/Frame 640.png'
import Portifolio from "../components/Portifolio"
import CadastroContext from '../context/CadastroContext'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosStar } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const CardProfissional = () => {
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
    
    .area{
    border-radius: 24px;
    height: 605px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  }
  img{
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
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
    button{
        margin: 0;
    }
      .meio{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .area{
      flex-direction: column;
      height: auto;
      width: 400px;
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
      width: 400px;
      height: 120px;
    }
    .localizacao{
        margin-top: 1rem;
        text-align: center;
    }
  }
    `

    const { estado, cidade } = useContext(CadastroContext)
    const navigate = useNavigate()
    return (

        <Box>
            <div className="area">
                <img src={wallpaper} alt="wallpaper" />
                <div className="meio">
                    <div className="div1">
                        <img src={avatar} alt="técnico" />
                        <Titulo className="localizacao">Localização</Titulo>
                        <p className="sp">{estado ? estado : "-------"}</p>
                        <p>
                            <IoLocationOutline />
                            {cidade ? cidade : "-------"}
                        </p>
                    </div>
                    <div className="div2">
                        <h2>Pedro Alves</h2>
                        <Titulo>Desde</Titulo>
                        <p>Fevereiro de 2024</p>
                        <Titulo>Especialidade</Titulo>
                        <p>Tecnico em Televisores</p>
                        <Titulo>Experiências</Titulo>
                        <p>Trabalho há 10 anos <br /> no ramo da Eletrônica</p>
                    </div>
                    <div className="div3">
                        <Titulo>Avaliação de clientes</Titulo>
                        <div className="comentario">
                            <Sub>Julia dos Santos</Sub>
                            <div  className='star'>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            </div>
                            <p>Gostei muito do serviço, mas a garantia é curta!</p>
                        </div>
                        <div className="comentario">
                            <Sub>Gabriela Machado</Sub>
                            <div className='star'>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            <IoIosStar color={"#E9C46A"} size={25}/>
                            </div>
                            <p>Serviço excelente, mas poderia ser mais rápido o conserto!</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=> navigate("/Conectavel/chatprofissional")} type="submit">Contatar</button>
            </div>

        </Box>
    )
}

export default CardProfissional