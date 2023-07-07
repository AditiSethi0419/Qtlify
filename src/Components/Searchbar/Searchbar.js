import React, { useState } from "react";
import './Searchbar.css';
import searchIcon from '../assets/Search_icon.png';
const Searchbar = (data) => {
  const [searchInput, setsearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
  };

  return (
    <div className="search_css">
      <div >
        <input
        type="search"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search a album of your choice"
        />
         <div>
        <button >
          <img src={searchIcon} alt="Get search icon"/>

        </button>
      </div>
      {/* </div>
      <div> */}

      </div>
     
    </div>
  );
};

export default Searchbar;
