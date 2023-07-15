//import logo from './logo.svg';
//import './App.css';
import React, { useState, useEffect } from "react";
import CardGrid from "./Components/CardGrid/CardGrid";
import Header from "../src/Components/Navbar/Header";
import Hero from "./Components/Hero/Hero";
import { fetchTopAlbums } from "./api/Api";
import styles from '../src/App.module.css'

function App() {
  const [data, setData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      // debugger;
      // console.log(res);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  //debugger;
  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
    
      {/* {data.map((item) => (
        
        <Card  data={item} type="album" />
      ))} */}
      <div className={styles.mainCardGridWrapper}>
      <CardGrid data={data} type="album" title="Top Albums"/>
      </div>
    </div>
  );
}

export default App;
