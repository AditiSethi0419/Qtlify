import React, { useState,useEffect } from "react";
import styles from "./CardGrid.module.css";
import Card from "../Card/Card";
import { CircularProgress, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";


const CardGrid = ({ title, data, type ,filteredData=null}) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);
  const [songsData,setSongsData]=useState(data);
 
  const handleToggle = () => {
    setToggle(!toggle);
    //console.log("changetext");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   //console.log(data);
  //console.log(newAlbumData);
  const generateSongsData=(key)=>{
    const res=data.filter(item=>item.genre.key===key);
    filteredData(res);
    //setSongsData

  }
  useEffect(() => {
    if(value===1){
      generateSongsData('rock');
    }
   
  }, [value]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type === "song" ? (
        
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CardGrid;
