import React from 'react'
import './CategoryButtons.css'

const CategoryButtons = () => {
  return (
    <div className='category-buttons'>
      <button className='button__hotel'>
        <div className='button__content'>
          <span className='icon icon-hotel'></span>
          <span>Hotels</span>
        </div>
      </button>
      <button>
        <div className='button__content'>
          <span className='icon icon-restaurant'></span>
          <span>Restaurants</span>
        </div>
      </button>
      <button>
        <div className='button__content'>
          <span className='icon icon-attraction'></span>
          <span>Attractions</span>
        </div>
      </button>
    </div>
  );
};

export default CategoryButtons