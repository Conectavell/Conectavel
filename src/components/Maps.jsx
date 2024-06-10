import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

import { keyMaps, center, mapSamsung, mapAbree, mapTodos, mapGreenEletron } from '../services/mapsAPI.jsx'

const Maps = ({ company }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: keyMaps
    })

    return isLoaded
        ? (
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={11}>
                {
                    company === "samsung" ? mapSamsung
                        : company === "abree" ? mapAbree
                            : company === "green" ? mapGreenEletron
                                : mapTodos
                }
            </GoogleMap>
        )
        : <><h2>Loading</h2></>
}

export default Maps