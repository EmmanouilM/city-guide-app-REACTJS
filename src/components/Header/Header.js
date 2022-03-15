import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__title'>
        City<span>guide</span>
      </div>
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
    </div>
  );
};

export default Header;
