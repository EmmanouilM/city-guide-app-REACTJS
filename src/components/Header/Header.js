import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className='header'>
      <div className='header__title'>
        City<span>guide</span>
      </div>
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        class='autocomplete'
      >
        <form action='#' className=' header__search'>
          <input
            type='text'
            className='header__search-input'
            placeholder='Search a new place...'
          />
          <button className='header__search-button'>
            <FontAwesomeIcon
              className='header__search-icon'
              icon={faMagnifyingGlass}
            />
          </button>
        </form>
      </Autocomplete>
    </div>
  );
};

export default Header;
