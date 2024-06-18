import Carousel from 'react-bootstrap/Carousel';
import descarte1 from '../assets/descarte1.png'
import descarte3 from '../assets/descarte3.png'
import descarte4 from '../assets/descarte4.png'
import "../styles/carrossel.css"
import { useTranslation } from 'react-i18next';
//

const Carrosel = () => {
    const { t } = useTranslation()

    return (
        <Carousel interval={4000} className='text-center container '  data-bs-theme="light">
            <Carousel.Item >
                <img
                    className=" d-block container__img"
                    src={descarte1}
                    alt="First slide"
                />
                <p className=' mt-2 text-light' >{t("contribua.slides.slide1.text")} </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" d-block container__img"
                    src={descarte4}
                    style={{border: "5px solid var(--verde_secundario)", overflow: 'hidden'}}
                    height={525}
                    alt="Second slide"
                />
                <p className=' mt-2 text-light'>{t("contribua.slides.slide2.text")} </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" d-block container__img"
                    src={descarte3}
                    alt="Third slide"
                />
                <p className=' m-auto mt-2 text-light'> {t("contribua.slides.slide3.text")} </p>
            </Carousel.Item>
        </Carousel>

    )
}
export default Carrosel