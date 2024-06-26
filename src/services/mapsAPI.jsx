import { MarkerF } from "@react-google-maps/api";
import samsungImg from '/src/assets/samsung.png'
import greenImg from '/src/assets/greenEletron.png'
import abreeImg from '/src/assets/abree.png'
import axios from "axios";
import { responsiveProperty } from "@mui/material/styles/cssUtils";

export const keyMaps = "AIzaSyBv_JyvnAqFgt2_21dARAT6p6ZzaBDP9So"

// coordenadas

export const center = {
    lat: -23.561656,
    lng: -46.638482
};
export const samsung = [
    {
        "lat": -23.5979001,
        "lng": -46.6426221
    },
    {
        "lat": -23.5004256,
        "lng": -46.471943
    },
    {
        "lat": -23.570018249999997,
        "lng": -46.651070077176925
    },
    {
        "lat": -23.5642742,
        "lng": -46.6909543
    }
]

export const abree = [
    {
        "lat": -23.6487766,
        "lng": -46.7531674
    },
    {
        "lat": -23.5311978,
        "lng": -46.6552125
    },
    {
        "lat": -23.5311978,
        "lng": -46.6552125
    },
    {
        "lat": -23.5256826,
        "lng": -46.5482362
    }
]


export const greenEletron = [
    {
        "lat": -23.56800915,
        "lng": -46.66838394910417
    },
    {
        "lat": -23.5434362,
        "lng": -46.6175724
    },
    {
        "lat": -23.5700325,
        "lng": -46.64023039547913
    },
    {
        "lat": -23.52956375,
        "lng": -46.63277250230544
    },
]

// renderizar localizações

export const mapSamsung = (
    samsung.map((loc, index) => {
        return <MarkerF key={index} position={loc} icon={samsungImg} />
    })
)
export const mapAbree = (
    abree.map((loc, index) => {
        return <MarkerF key={index} position={loc} icon={abreeImg} />
    })
)
export const mapGreenEletron = (
    greenEletron.map((loc, index) => {
        return <MarkerF key={index} position={loc} icon={greenImg} />
    })
)
// export const mapApi = (
//     axios.get("http://localhost:8080/API/pontosDescarte").then(function(response){
//         response.map((ponto, index) => {
//             "lat":ponto.
//         })
//     })
// )
export const mapTodos = (
    <>
        {mapSamsung}
        {mapAbree}
        {mapGreenEletron}
    </>
)