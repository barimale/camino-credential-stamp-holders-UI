import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useMap, Marker } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import { LayerContext } from '../pages/Places/LayerContext';
import { Popup } from "react-leaflet";
import GamesTwoToneIcon from '@material-ui/icons/GamesTwoTone';
import ReactDOMServer from 'react-dom/server';

function useAddMarker(selected:boolean) {
    const map = useMap();
    const { setPoint } = useContext(LayerContext);
    const [activate, setActivate] = useState(selected);

    const targetIcon = <GamesTwoToneIcon style={{
        border: '1px solid red',
        padding: '0px',
        margin: '0px',
        cursor: 'crosshair'}}/>;

    const icon = L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(targetIcon)
    });

    const markerEvent = useCallback(
        (e: LeafletMouseEvent) => {
            e.originalEvent.preventDefault();

            setPoint(
                <Marker position={e.latlng}>
                    <Popup>
                        {/* <CreatePlaceModal/> */}
                        Lat: {e.latlng.lat} <br/>
                        Lng: {e.latlng.lng} <br/>
                    </Popup>
                </Marker>);
            e.originalEvent.stopPropagation();
        }, [setPoint]);

    useEffect(
        () => {
            map?.doubleClickZoom.disable()
            if (activate === true) {
                map?.on('dblclick', markerEvent);
            }
            return () => {
                map?.off('dblclick', markerEvent);
            }
        }, [map, activate, markerEvent]
    )

    return { setActivate, activate };
}

export default useAddMarker;

