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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
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
        <PlacesList
          places={places}
          childClicked={childClicked}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default App;
