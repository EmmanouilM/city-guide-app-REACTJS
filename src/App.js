import React, { useState, useEffect } from "react";
import "./App.css";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import CategoryButtons from "./components/CategoryButtons/CategoryButtons";
import Map from "./components/Map/Map";
import PlacesList from "./components/PlacesList/PlacesList";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: 0, ne: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <CategoryButtons />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          setChildClicked={setChildClicked}
        />
        <PlacesList places={places} childClicked={childClicked} />
      </div>
    </div>
  );
};

export default App;
