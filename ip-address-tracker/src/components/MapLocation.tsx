import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapLocation() {
  const position: LatLngExpression = [51.505, -0.09];
  const theme = useTheme();
  const md = useMediaQuery(() => theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        "& .leaflet-container": {
          zIndex: 0,
        },
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{
          height: md ? "max(100vh, 415px)" : "max(415px, calc(100vh - 280px))",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: "./images/icon-location.svg",
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
