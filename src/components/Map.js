import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType = "cases", center, zoom }) {
  React.useEffect(() => {
    // render()
  }, [center]);
  
  const filteredCountries = countries.filter(item => item.country !== "Worldwide");
  console.log('Map',filteredCountries)
  console.log(center,zoom)
  
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(filteredCountries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;