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
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
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
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
        />
        <PlacesList
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          rating={rating}
          setRating={setRating}
        />
      </div>
    </div>
  );
};

export default App;
