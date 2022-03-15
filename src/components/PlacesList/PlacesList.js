import React, { useState } from 'react'
import './PlacesList.css'
import PlaceItem from '../PlaceItem/PlaceItem';

const PlacesList = () => {
  const ratingOptions = [
    { id: 0, label: "All", value: "0" },
    { id: 1, label: "Above 2.0", value: "2" },
    { id: 2, label: "Above 3.0", value: "3" },
    { id: 3, label: "Above 4.0", value: "4" },
    { id: 4, label: "Above 4.5", value: "4.5" },
  ];
  const places = [
    { name: "Place One" },
    { name: "Place Two" },
    { name: "Place Three" },
    { name: "Place Four" },
    { name: "Place Five" },
    { name: "Place Six" },
    { name: "Place Seven" },
    { name: "Place Eight" },
    { name: "Place Nine" },
    { name: "Place Ten" },
  ]; 
  const [rating, setRating] = useState("");
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  return (
    <div className="placesList">
      <div className='rating'>
      <div className='rating-control'>
        <label>Rating</label>
        <select value={rating} onChange={handleRatingChange}>
          {ratingOptions.map((ratingOption) => (
            <option key={ratingOption.id} value={ratingOption.value}>
              {ratingOption.label}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div>
        {places?.map((place, i) => (
          <PlaceItem key={i} place={place} />
        ))}
      </div>
  
    </div>
  )
}

export default PlacesList