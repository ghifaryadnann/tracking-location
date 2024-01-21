import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
// import Geocoder from "./Geocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function App() {
  const position = [-6.200000, 106.816666]

  return (
    <div className="App"><div className="judul">
      <h1 >Moving Direct</h1>
      <span>by Ghifary Adnan</span>
    </div>
      
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {/* <Geocoder/> */}
        <LeafletRoutingMachine/>
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/location.png",
  iconSize: [50, 50],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;


export default App;
