import styled from 'styled-components'
import { FaDatabase } from "react-icons/fa6";

const Card = styled.div`
    height: 316px;
    width: 343px;
    background: #2CB87B;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Card_Tipo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    padding: 10px;

    p{
        margin: 0;
        font-size: 16px;
        font-weight: lighter;
        color: white;
    }
`

const Card_Qntd = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    padding: 10px;

    p{
        font-size: 50px;
        font-weight: bolder;
        color: white;
        margin: 0;
    }
`


const Card_Completo = (props) => {
    return (
        <Card>
            <Card_Tipo>
                <p>{props.tipo}</p>
            </Card_Tipo>
            <FaDatabase size={135} color='white' />
            <Card_Qntd>
                <p>{props.val}</p>
            </Card_Qntd>
        </Card>
    )
}

export default Card_Completo;