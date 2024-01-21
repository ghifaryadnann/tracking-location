import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"

const Geocoder = () => {
    const map = useMap()
    useEffect(() => {

        const control = L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
                var latlng = e.geocode.center;
                L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.fitBounds(e.geocode.bbox);
                
            })
            .addTo(map) 
             console.log(control)
    }, [])

  
  return (
    <div>
        
    </div>
  )
}

export default Geocoder