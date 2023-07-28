import React, { useState, useEffect } from "react";
import CardGrid from "./Components/CardGrid/CardGrid";
import Header from "../src/Components/Navbar/Header";
import Hero from "./Components/Hero/Hero";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/Api";
import styles from '../src/App.module.css'

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  const fetchData = async () => {
    try {
      const [topAlbums, newAlbums, songs] = await Promise.all([
        fetchTopAlbums(),
        fetchNewAlbums(),
        fetchSongs()
      ]);
      setTopAlbumData(topAlbums);
      setNewAlbumData(newAlbums);
      setSongsData(songs);
    } catch (err) {
      console.log(err);
    }
  };
  const  filteredData =(val)=>{
    setSongsData(val);

  }
 /// console.log(topAlbumData);
  useEffect(() => {
   fetchData();
  }, []);
//console.log(topAlbumData);
  return (
    <div>
      <Header data={topAlbumData} />
      <Hero />
      <div className={styles.mainCardGridWrapper}>
        <CardGrid data={topAlbumData} type="album" title="Top Albums"/>
        <CardGrid data={newAlbumData} type="album" title="New Albums"/>
        <CardGrid data={songsData} type="song" title="Songs" filteredData={filteredData}/>
      </div>
    </div>
  );
}

export default App;
