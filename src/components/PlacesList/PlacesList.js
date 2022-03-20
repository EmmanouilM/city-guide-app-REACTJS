import React, { useState, useEffect, createRef } from "react";
import { CircularProgress } from "@material-ui/core";
import "./PlacesList.css";
import PlaceItem from "../PlaceItem/PlaceItem";

const PlacesList = ({ places, childClicked, isLoading,rating,setRating }) => {
  const ratingOptions = [
    { id: 0, label: "All", value: "0" },
    { id: 2, label: "Above 2.0", value: "2" },
    { id: 3, label: "Above 3.0", value: "3" },
    { id: 4, label: "Above 4.0", value: "4" },
    { id: 4.5, label: "Above 4.5", value: "4.5" },
  ];
  const [elRefs, setElRefs] = useState([]);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);
  return (
    <div className='placesList'>
      {isLoading ? (
        <div className='loading'>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
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
              <div ref={elRefs[i]} key={i}>
                <PlaceItem
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlacesList;
