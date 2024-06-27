import styled from "styled-components"

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
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
`
const Titulo = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: var(--azul_principal);
`
const Sub = styled.p`
    color: #413B89;
    font-weight: 500;
    font-size: 12px;
`

const PerfilPrestadorPage = () => {
  return (
    <Box>
      <div className="area">
        <img src="src\assets\wallpaperImage.png" alt="wallpaper" />
        <div className="meio">
          <div className="div1">
            <img src="src\assets\Avatar Image.png" alt="técnico"/>
            <Titulo>Localização</Titulo>
            <p className="sp">São Paulo</p>
            <img src="src\assets\Frame 640.png" alt="localização" />
          </div>
          <div className="div2">
            <h2>Pedro Alves</h2>
            <Titulo>Desde</Titulo>
            <p>Fevereiro de 2024</p>
            <Titulo>Especialidade</Titulo>
            <p>Tecnico em Televisores</p>
            <Titulo>Experiências</Titulo>
            <p>Trabalho há 10 anos <br/> no ramo da Eletrônica</p>
          </div>
          <div className="div3">
            <Titulo>Avaliação de clientes</Titulo>
            <div className="comentario">
              <Sub>Julia dos Santos</Sub>
              estrelas
              <p>Gostei muito do serviço, mas a garantia é curta!</p>
            </div>
            <div className="comentario">
              <Sub>Gabriela Machado</Sub>
              estrelas
              <p>Serviço excelente, mas poderia ser mais rápido o conserto!</p>
            </div>
            <Sub>Veja todas as avaliações -</Sub>
          </div>
        </div>
        <button type="submit">Contatar</button>
      </div>
    </Box>
  )
}

export default PerfilPrestadorPage