import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;

export const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{height: 'inherit', width: 'inherit'}}>
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