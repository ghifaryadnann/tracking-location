import React, { useEffect } from 'react'
import L from "leaflet"
import { useMap } from 'react-leaflet'
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"

const LeafletRoutingMachine = () => {
    const map = useMap()
    let DefaultIcon = L.icon({
        iconUrl: "/car2.png",
        iconSize: [50, 50],
      });
      
    useEffect(()=> {
        let marker1 = L.marker([-6.200000, 106.816666], {icon: DefaultIcon}).addTo(map)
        map.on("click", function (e){
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
             L.Routing.control({
            waypoints: [
              L.latLng(-6.200000, 106.816666),
              L.latLng(e.latlng.lat, e.latlng.lng),
            ],
            lineOptions : {
                styles: [
                    {
                        color:"blue",
                        weight: "4",
                        opacity:0.7
                    }
                ]
            },
            routeWhileDragging : false,
            geocoder: L.Control.Geocoder.nominatim(),
            fitSelectedRoutes : false,
            showAlternatives: false
          })
          .on("routesfound", function (e){
            e.routes[0].coordinates.forEach((c, i) => {
                setTimeout(() => {
                    marker1.setLatLng([c.lat, c.lng])
                }, 200 * i)
            })
          })
          .addTo(map);
        })
       
    },[])
  return (
    <div>LeafletRoutingMachine</div>
  )
}

export default LeafletRoutingMachine