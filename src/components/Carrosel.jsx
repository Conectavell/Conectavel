import Carousel from 'react-bootstrap/Carousel';
import descarte1 from '../assets/descarte1.png'
import descarte3 from '../assets/descarte3.png'
import descarte4 from '../assets/descarte4.png'
import "../styles/carrossel.css"


const Carrosel = () => {
    return (
        <Carousel interval={4000} className='text-center container '  data-bs-theme="light">
            <Carousel.Item >
                <img
                    className=" d-block container__img"
                    src={descarte1}
                    alt="First slide"
                />
                <p className=' mt-2 text-light' >Quando o lixo eletrônico entra em contato com a natureza, desencadeia uma série de impactos ambientais significativos. </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" d-block container__img"
                    src={descarte4}
                    style={{border: "5px solid var(--verde_secundario)", overflow: 'hidden'}}
                    height={525}
                    alt="Second slide"
                />
                <p className=' mt-2 text-light'>Os componentes tóxicos presentes nos dispositivos eletrônicos, como chumbo, mercúrio e cádmio, contaminam o solo, comprometendo a qualidade dos ecossistemas. </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" d-block container__img"
                    src={descarte3}
                    alt="Third slide"
                />
                <p className=' m-auto mt-2 text-light'> Essa contaminação afeta a biodiversidade, causando danos à flora e à fauna, e também representa uma ameaça à saúde humana através da cadeia alimentar. </p>
            </Carousel.Item>
        </Carousel>

    )
}
export default Carrosel