import React, { useState } from "react";
import "./Searchbar.css";
import searchIcon from "../../assets/Search_icon.png";
import cancelIcon from "../../assets/cancel_icon.png";
//import { getValue } from '@testing-library/user-event/dist/utils';

const Searchbar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([]);
  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    setWordEntered(searchedWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchedWord.toLowerCase());
    });
    if (searchedWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput =()=>{
    setFilteredData([]);
    setWordEntered("");
  }
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} onChange={handleFilter} value={wordEntered} />
        <button className="searchIcon">
          {filteredData.length === 0 ? (
            <img src={searchIcon} alt="Get search icon" />
          ) : (
            <img src={cancelIcon} alt="Get cancel icon" id="clearBtn" onClick={clearInput}/>
          )}
        </button>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((data, key) => {
            return (
              <div className="dataItem">
                <a href="">{data.title}</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
