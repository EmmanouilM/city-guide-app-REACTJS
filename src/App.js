import React from "react";
import './App.css'
import Header from './components/Header/Header'
import CategoryButtons from './components/CategoryButtons/CategoryButtons'
import Map from './components/Map/Map'
import PlacesList from './components/PlacesList/PlacesList'

const App = () => {
  return <div>
    <Header/>
    <CategoryButtons/>
    <Map/>
    <PlacesList/>
  </div>;
};

export default App;
