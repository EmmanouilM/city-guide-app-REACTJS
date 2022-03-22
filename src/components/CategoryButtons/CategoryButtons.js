import React, { useState } from "react";
import "./CategoryButtons.css";

const CategoryButtons = ({ setType }) => {
  const [typeActive, setTypeActive] = useState("hotels");
  const [active, setActive] = useState(false);
  const toggleActive = (e) => {
    const currentState = active;
    e.preventDefault();
    setTypeActive(e.currentTarget.value);
    setType(e.currentTarget.value);
    setActive(!currentState);
  };

  return (
    <div className='category-buttons'>
      <button
        type='button'
        value='hotels'
        className={typeActive === "hotels" ? "active" : null}
        onClick={toggleActive}
      >
        <div className='button__content'>
          <span className='icon icon-hotel'></span>
          <span>Hotels</span>
        </div>
      </button>
      <button
        type='button'
        value='restaurants'
        className={typeActive === "restaurants" ? "active" : null}
        onClick={toggleActive}
      >
        <div className='button__content'>
          <span className='icon icon-restaurant'></span>
          <span>Restaurants</span>
        </div>
      </button>
      <button
        type='button'
        value='attractions'
        className={typeActive === "attractions" ? "active" : null}
        onClick={toggleActive}
      >
        <div className='button__content'>
          <span className='icon icon-attraction'></span>
          <span>Attractions</span>
        </div>
      </button>
    </div>
  );
};

export default CategoryButtons;
