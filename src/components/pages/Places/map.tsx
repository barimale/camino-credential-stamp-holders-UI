import { useContext } from "react";
import { MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import { LayerContext } from "./LayerContext";
import AddPlaceFragment from "./AddPlaceFragment";

const defaultLatLng: LatLngTuple = [41.3307940691957, -8.66682345390475];
const zoom:number = 16;

type MapProps = {
    isAddPlaceButtonActive: boolean;
}

export const Map = (props: MapProps) => {
    const { point } = useContext(LayerContext);
    const { isAddPlaceButtonActive } = props;

    return (
        <MapContainer
            center={defaultLatLng}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{
                height: 'inherit',
                width: 'inherit', 
                cursor: isAddPlaceButtonActive ? 'crosshair' : 'grab'}}>
            <AddPlaceFragment isActivated={isAddPlaceButtonActive}/>
            <LayerGroup>
                {point}
            </LayerGroup>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
      </MapContainer>
    );
}