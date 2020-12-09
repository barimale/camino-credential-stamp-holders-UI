import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [41.3307940691957, -8.66682345390475];
const zoom:number = 16;

export const Map = () => {
    return (
        <MapContainer center={defaultLatLng} zoom={zoom} scrollWheelZoom={true} style={{height: 'inherit', width: 'inherit'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    );
}