import { createContext, useState } from 'react';
import { LatLngTuple } from 'leaflet';

const LayerContext:any = createContext({});

const LayerContextProvider = ({ children }: any) => {

    const [point, setPoint] = useState<LatLngTuple>([0, 0]);
    const [coordinates, setCoordinates] = useState<LatLngTuple>([0, 0]);

    const defaultValue = {
        point,
        setPoint,
        coordinates,
        setCoordinates
    };

    return (
        <LayerContext.Provider value={defaultValue}>
            {children}
        </LayerContext.Provider>
    )
}

export { LayerContext, LayerContextProvider };