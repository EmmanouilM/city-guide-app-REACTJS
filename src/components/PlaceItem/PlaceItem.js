import React from "react";
import "./PlaceItem.css";
import Card from "../UI/Card";

const PlaceItem = ({ place }) => {
  return (
    <div className='placeItem'>
      <Card>{place.name}</Card>
    </div>
  );
};

export default PlaceItem;
