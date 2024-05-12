import styled from "styled-components";
import { BsFillStarFill, BsExclamationCircle } from "react-icons/bs";

const Review = styled.div`
    background: #ffffff;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 34px;
    border-radius: 20px;
`

const ImageBox = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    gap: 15px;
`

const Image = styled.div`
    background: #1053D4;
    width: 70px;
    height: 70px;
    border-radius: 6px;
`

const Rating = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 9px;
    

    p{
        font-size: 24px;
        color: #151515;
        font-weight: 900;
    }
`

const Rating_Star = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;

    small{
        color: "#1053D4";
        font-size: 16px;
        font-weight: 400;
    }
`

const Text = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p{
        width: 296px;
        font-size: 16px;
        line-height: 160%;
        color: #95979C;
        font-weight: 400;
        letter-spacing: 1%;
}
`

const Icon_list = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    gap: 8px;
    align-items: center;

    p{
        color: #0B378D;
        font-weight: 900;
    }
`

function Reviews(props) {
    return (
        <Review>
            <ImageBox>
                <Image />
                <Rating>
                    <p>{props.nome}</p>
                    <Rating_Star>
                        <BsFillStarFill size={32} color='#caee5a' />
                        <small>4.5/5</small>
                    </Rating_Star>
                </Rating>
            </ImageBox>
            <Text>
                <Icon_list>
                    <BsExclamationCircle size={18} color='#eb5757' />
                    <p>{props.opiniao_title}</p>
                </Icon_list>
                <p>
                    Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.
                </p>
                <p>{props.data}</p>
            </Text>
        </Review>
    )
}

export default Reviews