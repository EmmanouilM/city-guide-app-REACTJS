import React from "react";
import "./CategoryButtons.css";

const CategoryButtons = ({ setType }) => {
  return (
    <div className='category-buttons'>
      <button
        type='button'
        className='button__hotel'
        onClick={() => setType("hotels")}
      >
        <div className='button__content'>
          <span className='icon icon-hotel'></span>
          <span>Hotels</span>
        </div>
      </button>
      <button type='button' onClick={() => setType("restaurants")}>
        <div className='button__content'>
          <span className='icon icon-restaurant'></span>
          <span>Restaurants</span>
        </div>
      </button>
      <button type='button' onClick={() => setType("attractions")}>
        <div className='button__content'>
          <span className='icon icon-attraction'></span>
          <span>Attractions</span>
        </div>
      </button>
    </div>
  );
};

export default CategoryButtons;
