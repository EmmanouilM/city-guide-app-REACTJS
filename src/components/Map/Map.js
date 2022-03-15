import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
