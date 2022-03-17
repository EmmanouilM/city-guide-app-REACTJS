import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: faStar,
  },
};
const colors = {
  star: ["#fdbf49", "#fdbf49", "#ffffff"],
};

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <div
            className='map-marker'
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <span> {place.name}</span>
            <img
              className='place-photo--small'
              src={
                place.photo
                  ? place.photo.images.large.url
                  : "https://images.unsplash.com/photo-1415025148099-17fe74102b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
              }
              alt={place.name}
            />
            <PrettyRating
              value={place.rating}
              icons={icons.star}
              colors={colors.star}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
