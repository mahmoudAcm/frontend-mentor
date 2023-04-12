import { Icon, LatLngExpression, Map as MapType } from "leaflet";
import { Ref, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const locationIcon = new Icon({
  iconUrl: "./images/icon-location.svg",
});

interface MapProps {
  position: LatLngExpression;
  popup: string;
}

export default function Map(props: MapProps) {
  const mapRef = useRef<MapType>();

  useEffect(() => {
    mapRef.current?.setView(props.position);
  }, [props.position]);

  return (
    <MapContainer
      center={props.position}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
      ref={mapRef as Ref<MapType>}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.position} icon={locationIcon}>
        <Popup>
          {!props.popup
            ? "A pretty CSS3 popup. <br /> Easily customizable."
            : props.popup}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
